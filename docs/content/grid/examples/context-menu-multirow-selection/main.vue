<template>
  <div>
    <Grid
      :data-items="dataState"
      :style="{ height: '400px' }"
      :data-item-key="'ProductID'"
      :select="select"
      :selectable="{ enabled: true, drag: false, cell: false, mode: 'multiple' }"
      :columns="columns"
      @selectionchange="onSelectionChange"
      @headerselectionchange="onHeaderSelectionChange"
      @contextmenu="handleContextMenu"
    >
    </Grid>
    <Popup :show="showMenu" :offset="menuOffset">
      <Menu
        :vertical="true"
        :style="{ display: 'inline-block' }"
        :items="menuItems"
        @select="handleOnSelect"
      />
    </Popup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Menu } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';

const sampleProducts = [
  { ProductID: 1, ProductName: 'Chai', UnitsInStock: 39, UnitsOnOrder: 0, ReorderLevel: 10, Discontinued: false },
  { ProductID: 2, ProductName: 'Chang', UnitsInStock: 17, UnitsOnOrder: 40, ReorderLevel: 25, Discontinued: false },
  { ProductID: 3, ProductName: 'Aniseed Syrup', UnitsInStock: 13, UnitsOnOrder: 70, ReorderLevel: 25, Discontinued: false },
  { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitsInStock: 53, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
  { ProductID: 5, ProductName: "Chef Anton's Gumbo Mix", UnitsInStock: 0, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: true },
  { ProductID: 6, ProductName: "Grandma's Boysenberry Spread", UnitsInStock: 120, UnitsOnOrder: 0, ReorderLevel: 25, Discontinued: false },
  { ProductID: 7, ProductName: "Uncle Bob's Organic Dried Pears", UnitsInStock: 15, UnitsOnOrder: 0, ReorderLevel: 10, Discontinued: false },
  { ProductID: 8, ProductName: 'Northwoods Cranberry Sauce', UnitsInStock: 6, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
  { ProductID: 9, ProductName: 'Mishi Kobe Niku', UnitsInStock: 29, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: true },
  { ProductID: 10, ProductName: 'Ikura', UnitsInStock: 31, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
];

const dataState = sampleProducts.map((item) =>
  Object.assign({ selected: false }, item)
);

const select = ref({});
const current = ref(undefined);
const showMenu = ref(false);
const menuOffset = ref({ left: 0, top: 0 });

const selectedCount = computed(() => Object.keys(select.value).filter((k) => select.value[k]).length);

const menuItems = computed(() => {
  if (selectedCount.value > 0) {
    return [
      { text: `Deselect all (${selectedCount.value})`, data: { action: 'deselectAll' }, icon: 'minus' },
      { text: 'Deselect', data: { action: 'deselect', item: current.value }, icon: 'minus' },
    ];
  }
  return [
    { text: 'Select', data: { action: 'select', item: current.value }, icon: 'plus' },
  ];
});

const columns = [
  { columnType: 'checkbox', width: '40px',
    headerSelectionValue: dataState.findIndex((item) => !select.value[item.ProductID]) === -1 },
  { field: 'ProductName', title: 'Product Name', width: '300px' },
  { field: 'UnitsInStock', title: 'Units In Stock' },
  { field: 'UnitsOnOrder', title: 'Units On Order' },
  { field: 'ReorderLevel', title: 'Reorder Level' },
];

function onSelectionChange(event) {
  select.value = event.select;
}

function onHeaderSelectionChange(event) {
  select.value = event.dataItems.reduce((acc, item) => {
    acc[item.ProductID] = true;
    return acc;
  }, {});
}

function handleContextMenu(event) {
  event.event.preventDefault();
  current.value = event.dataItem;
  menuOffset.value = {
    left: event.event.pageX,
    top: event.event.pageY,
  };
  showMenu.value = true;
}

function handleOnSelect(e) {
  const action = e.item.data?.action;
  switch (action) {
    case 'deselectAll':
      select.value = {};
      break;
    case 'deselect': {
      const newSelect = { ...select.value };
      const item = e.item.data?.item;
      if (item) {
        newSelect[item.ProductID] = false;
      }
      select.value = newSelect;
      break;
    }
    case 'select': {
      const item = e.item.data?.item;
      if (item) {
        select.value = { ...select.value, [item.ProductID]: true };
      }
      break;
    }
    default:
  }
  showMenu.value = false;
}

document.addEventListener('click', () => {
  if (showMenu.value) {
    showMenu.value = false;
  }
});
</script>
