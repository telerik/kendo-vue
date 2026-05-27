<template>
  <div>
    <Grid
      :data-items="getData"
      :data-item-key="'ProductID'"
      :editable="true"
      :columns="columns"
      @itemchange="onItemChange"
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
  { ProductID: 1, ProductName: 'Chai', UnitPrice: 18.0, UnitsInStock: 39, Discontinued: false },
  { ProductID: 2, ProductName: 'Chang', UnitPrice: 19.0, UnitsInStock: 17, Discontinued: false },
  { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10.0, UnitsInStock: 13, Discontinued: false },
  { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22.0, UnitsInStock: 53, Discontinued: false },
  { ProductID: 5, ProductName: "Chef Anton's Gumbo Mix", UnitPrice: 21.35, UnitsInStock: 0, Discontinued: true },
  { ProductID: 6, ProductName: "Grandma's Boysenberry Spread", UnitPrice: 25.0, UnitsInStock: 120, Discontinued: false },
  { ProductID: 7, ProductName: "Uncle Bob's Organic Dried Pears", UnitPrice: 30.0, UnitsInStock: 15, Discontinued: false },
  { ProductID: 8, ProductName: 'Northwoods Cranberry Sauce', UnitPrice: 40.0, UnitsInStock: 6, Discontinued: false },
  { ProductID: 9, ProductName: 'Mishi Kobe Niku', UnitPrice: 97.0, UnitsInStock: 29, Discontinued: true },
  { ProductID: 10, ProductName: 'Ikura', UnitPrice: 31.0, UnitsInStock: 31, Discontinued: false },
];

const gridData = ref([...sampleProducts]);
const editID = ref(null);
const dataItemIndex = ref(0);
const selectedRow = ref(null);
const showMenu = ref(false);
const menuOffset = ref({ left: 0, top: 0 });

const columns = [
  { field: 'ProductID', title: 'ID', editable: false },
  { field: 'ProductName', title: 'Name', editor: 'text' },
  { field: 'UnitPrice', title: 'Price', editor: 'numeric' },
  { field: 'UnitsInStock', title: 'In stock', editor: 'numeric' },
  { field: 'Discontinued', title: 'Discontinued', editor: 'boolean' },
];

const menuItems = [
  { text: 'Add row', data: { action: 'addRow' }, icon: 'plus' },
  { text: 'Edit row', data: { action: 'editRow' }, icon: 'edit' },
  { text: 'Delete row', data: { action: 'deleteRow' }, icon: 'delete' },
  { text: 'Move row up', data: { action: 'moveUp' }, icon: 'arrow-up' },
  { text: 'Move row down', data: { action: 'moveDown' }, icon: 'arrow-down' },
];

const getData = computed(() =>
  gridData.value.map((item) => ({
    ...item,
    inEdit: item.ProductID === editID.value,
  }))
);

function onItemChange(event) {
  const field = event.field || '';
  gridData.value = gridData.value.map((item) =>
    item.ProductID === event.dataItem.ProductID
      ? { ...item, [field]: event.value }
      : item
  );
}

function handleContextMenu(event) {
  event.event.preventDefault();
  const dataItem = event.dataItem;
  dataItemIndex.value = gridData.value.findIndex(
    (p) => p.ProductID === dataItem.ProductID
  );
  selectedRow.value = dataItem;
  menuOffset.value = {
    left: event.event.pageX,
    top: event.event.pageY,
  };
  showMenu.value = true;
}

function handleOnSelect(e) {
  const action = e.item.data?.action;
  switch (action) {
    case 'addRow':
      handleAddRow();
      break;
    case 'editRow':
      handleEditRow();
      break;
    case 'deleteRow':
      handleDeleteRow();
      break;
    case 'moveUp':
      handleMoveUp();
      break;
    case 'moveDown':
      handleMoveDown();
      break;
    default:
  }
  showMenu.value = false;
}

function handleAddRow() {
  const newRow = { ProductID: gridData.value.length + 1 };
  gridData.value = [newRow, ...gridData.value];
  editID.value = newRow.ProductID;
}

function handleEditRow() {
  editID.value = selectedRow.value.ProductID;
}

function handleDeleteRow() {
  const data = [...gridData.value];
  data.splice(dataItemIndex.value, 1);
  gridData.value = data;
}

function handleMoveUp() {
  if (dataItemIndex.value !== 0) {
    const data = [...gridData.value];
    data.splice(dataItemIndex.value, 1);
    data.splice(dataItemIndex.value - 1, 0, selectedRow.value);
    gridData.value = data;
  }
}

function handleMoveDown() {
  if (dataItemIndex.value < gridData.value.length - 1) {
    const data = [...gridData.value];
    data.splice(dataItemIndex.value, 1);
    data.splice(dataItemIndex.value + 1, 0, selectedRow.value);
    gridData.value = data;
  }
}

document.addEventListener('click', () => {
  if (showMenu.value) {
    showMenu.value = false;
  }
});
</script>
