<template>
  <div>
    <KButton @click="handleCopyClick">Copy</KButton>
    <KCheckbox :value="dragEnabled" :label="'Enable drag selection'" @change="onDragChange" />
    <KCheckbox :value="cellEnabled" :label="'Enable cell selection'" @change="onCellChange" />
    <KRadioGroup :value="selectionMode" @change="onSelectionModeChange" :data-items="selectionModes" />
    <Grid
      ref="gridRef"
      :style="{ height: '400px' }"
      :data-items="data"
      :auto-process-data="true"
      :data-item-key="'ProductID'"
      :select="select"
      :selectable="selectable"
      :navigatable="true"
      :clipboard="true"
      :columns="columns"
      :cells="{ data: 'customDataCell' }"
      @clipboard="handleClipboard"
      @selectionchange="onSelectionChange"
    >
      <template #customDataCell="{ props: cellProps, defaultSlots }">
        <td
          v-bind="cellProps.tdProps"
          :style="{ backgroundColor: getCellBgColor(cellProps.dataItem, cellProps.field) }"
        >
          <component :is="() => defaultSlots" />
        </td>
      </template>
    </Grid>
    clipboardData:
    <code :style="codeStyle">
      {{ copiedText }}
    </code>
    <hr />
    copied items:
    <code :style="codeStyle">
      {{ formattedCopiedItems }}
    </code>
    pasted items:
    <code :style="codeStyle">
      {{ formattedPastedItems }}
    </code>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Checkbox as KCheckbox, RadioGroup as KRadioGroup } from '@progress/kendo-vue-inputs';
import { getter } from '@progress/kendo-vue-common';
import { populateClipboardData, ClipboardActionType } from '@progress/kendo-vue-data-tools';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';
const idGetter = getter(DATA_ITEM_KEY);

const codeStyle = { display: 'block', maxHeight: '200px', overflow: 'auto', whiteSpace: 'pre-line' };

const columns = [
  { field: 'ProductName', title: 'Product Name', width: '300px' },
  { field: 'UnitsInStock', title: 'Units In Stock' },
  { field: 'UnitsOnOrder', title: 'Units On Order' },
  { field: 'ReorderLevel', title: 'Reorder Level' }
];

const selectionModes = [
  { value: 'single', label: 'Single selection mode' },
  { value: 'multiple', label: 'Multiple selection mode' }
];

const data = ref(products.map((item) => Object.assign({ selected: false }, item)));
const select = ref({});
const copiedText = ref('');
const copiedItems = ref([]);
const pastedItems = ref([]);
const dragEnabled = ref(true);
const cellEnabled = ref(true);
const selectionMode = ref('multiple');
const previousCopiedItems = ref([]);
const cellColors = ref({});

const gridRef = ref(null);

const selectable = computed(() => ({
  enabled: true,
  drag: dragEnabled.value,
  cell: cellEnabled.value,
  mode: selectionMode.value
}));

const formattedCopiedItems = computed(() =>
  copiedItems.value
    .map((item) => `${JSON.stringify(item.dataItem, [DATA_ITEM_KEY, ...item.fields])}`)
    .join('\r\n')
);

const formattedPastedItems = computed(() =>
  pastedItems.value.map((item) => `${JSON.stringify(item.dataItem)}`).join('\r\n')
);

const getCellBgColor = (dataItem, field) => {
  const key = `${dataItem[DATA_ITEM_KEY]}-${field}`;
  return cellColors.value[key] || '';
};

const updateDataItem = (dataArr, item) => {
  const itemIndex = dataArr.findIndex((dataItem) => idGetter(dataItem) === idGetter(item.dataItem));
  if (itemIndex > -1) {
    const updatedItem = Object.assign(
      {},
      dataArr[itemIndex],
      Object.fromEntries([...item.fields.map((field) => [field, item.dataItem[field]])])
    );
    dataArr[itemIndex] = updatedItem;
  }
};

const applyCellColors = (items, actionType) => {
  const newColors = { ...cellColors.value };
  items.forEach((item) => {
    item.fields.forEach((field) => {
      const key = `${item.dataItem[DATA_ITEM_KEY]}-${field}`;
      if (actionType === ClipboardActionType.copy) {
        newColors[key] = 'skyblue';
      } else if (actionType === ClipboardActionType.paste) {
        newColors[key] = 'lightgreen';
      } else if (actionType === ClipboardActionType.cut) {
        newColors[key] = 'red';
      }
    });
  });
  cellColors.value = newColors;
  setTimeout(() => {
    cellColors.value = {};
  }, 500);
};

const onSelectionChange = (event) => {
  select.value = event.select;
};

const onDragChange = (event) => {
  dragEnabled.value = event.value;
};

const onCellChange = (event) => {
  cellEnabled.value = event.value;
};

const onSelectionModeChange = (event) => {
  selectionMode.value = event.value;
};

const handleCopyClick = () => {
  performClipboardAction({
    type: ClipboardActionType.copy,
    columns: columns,
    dataItemKey: DATA_ITEM_KEY
  });
};

const handleClipboard = (event) => {
  performClipboardAction(event);
};

const performClipboardAction = (event) => {
  const gridClipboardData = populateClipboardData({
    event,
    data: data.value,
    selectedState: select.value,
    previousCopiedItems: previousCopiedItems.value
  });
  const { clipboardData, copiedItems: newCopied, pastedItems: newPasted } = gridClipboardData;

  copiedText.value = clipboardData;

  if (event.type !== ClipboardActionType.paste) {
    copiedItems.value = newCopied;
    previousCopiedItems.value = newCopied;
    applyCellColors(newCopied, event.type);
  } else {
    const currentPastedItems = newPasted?.slice() || [];
    pastedItems.value = currentPastedItems;
    const newData = data.value.slice();
    currentPastedItems.forEach((item) => {
      updateDataItem(newData, item);
    });
    data.value = newData;
    applyCellColors(currentPastedItems, event.type);
  }
};
</script>
