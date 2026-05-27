<template>
  <div>
    <Grid
      ref="gridRef"
      :style="{ height: '400px' }"
      :data-items="data"
      :auto-process-data="true"
      :data-item-key="'ProductID'"
      :select="select"
      :selectable="{
        enabled: true,
        drag: true,
        cell: true,
        mode: 'multiple'
      }"
      :navigatable="true"
      :clipboard="{ copyHeaders: true }"
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
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

const data = ref(products.map((item) => Object.assign({ selected: false }, item)));
const select = ref({});
const copiedText = ref('');
const previousCopiedItems = ref([]);
const cellColors = ref({});

const gridRef = ref(null);

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

const handleClipboard = (event) => {
  const gridClipboardData = populateClipboardData({
    event,
    data: data.value,
    selectedState: select.value,
    previousCopiedItems: previousCopiedItems.value
  });
  const { clipboardData, copiedItems: newCopied, pastedItems: newPasted } = gridClipboardData;

  copiedText.value = clipboardData;

  if (event.type !== ClipboardActionType.paste) {
    previousCopiedItems.value = newCopied;
    applyCellColors(newCopied, event.type);
  } else {
    const currentPastedItems = newPasted?.slice() || [];
    const newData = data.value.slice();
    currentPastedItems.forEach((item) => {
      updateDataItem(newData, item);
    });
    data.value = newData;
    applyCellColors(currentPastedItems, event.type);
  }
};
</script>
