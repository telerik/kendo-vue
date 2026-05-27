<template>
  <div>
    <Grid
      :data-items="gridData"
      :columns="columns"
      :context-menu="true"
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
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Menu } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';
import { copyIcon } from '@progress/kendo-svg-icons';

const gridData = [
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

const showMenu = ref(false);
const menuOffset = ref({ left: 0, top: 0 });
const selectedCell = ref('');

const columns = [
  { field: 'ProductID', title: 'ID' },
  { field: 'ProductName', title: 'Name' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'In stock' },
  { field: 'Discontinued', title: 'Discontinued' },
];

const menuItems = [
  { text: 'Copy cell', data: { action: 'copyCell' }, svgIcon: copyIcon },
];

function handleContextMenu(event) {
  event.event.preventDefault();
  menuOffset.value = {
    left: event.event.pageX,
    top: event.event.pageY,
  };

  const { dataItem, field } = event;
  if (field) {
    selectedCell.value = String(dataItem[field]);
  }

  showMenu.value = true;
}

function handleOnSelect(e) {
  const action = e.item.data?.action;
  if (action === 'copyCell') {
    navigator.clipboard.writeText(selectedCell.value);
  }
  showMenu.value = false;
}

document.addEventListener('click', () => {
  if (showMenu.value) {
    showMenu.value = false;
  }
});
</script>
