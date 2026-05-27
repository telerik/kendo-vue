<template>
  <div>
    <div class="example-config">
      <div class="row">
        <div>
          <h5>Select Columns to Print</h5>
          <div v-for="(column, index) in columns" :key="'chbx'+index" class="col-xs-12 example-col">
            <KCheckbox
              :id="column.field"
              :name="column.field"
              :defaultChecked="!column.hidden"
              :label="column.title"
              @change="onChange"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="example-config">
      <div class="row">
        <div class="col">
          <KButton @click="print">Print Grid</KButton>
        </div>
      </div>
    </div>
    <Grid
      :style="dimensions"
      :data-items="dataItems"
      :columns="columns"
      :scrollable="scrollable"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Checkbox as KCheckbox } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import products from './products.json';

const dataItems = ref(products);
const printState = ref(false);
const scrollable = ref('scrollable');
const dimensions = ref({ height: '400px', width: '800px' });

const defaultColumns = [
    { field: 'ProductID', title: 'ID', hidden: false, width: '250px' },
    { field: 'ProductName', title: 'Product Name', hidden: false, width: '250px' },
    { field: 'UnitPrice', title: 'Unit Price', hidden: false, width: '250px' },
    { field: 'Discontinued', title: 'Discontinued', hidden: false, width: '250px' },
    { field: 'QuantityPerUnit', title: 'QuantityPerUnit', hidden: false, width: '250px' },
    { field: 'Category.CategoryName', title: 'CategoryName', hidden: false, width: '250px' },
];

const columnsToPrint = ref([...defaultColumns]);

const columns = computed(() => (printState.value ? columnsToPrint.value : defaultColumns));

function print() {
    setPrintLayout();
    setTimeout(() => {
        window.print();
        setNormalLayout();
    });
}

function setPrintLayout() {
    printState.value = true;
    dimensions.value = { height: '100%', width: '100%' };
    scrollable.value = 'none';
}

function setNormalLayout() {
    printState.value = false;
    dimensions.value = { height: '400px', width: '800px' };
    scrollable.value = 'scrollable';
}

function onChange(event) {
    const field = event.target.name;
    columnsToPrint.value = columnsToPrint.value.map((column) =>
        column.field === field ? { ...column, hidden: !column.hidden } : column
    );
}
</script>

<style>
@media print {
  * {
    overflow: visible !important;
    visibility: hidden;
  }

  .k-grid {
    visibility: visible;
    margin-top: -200px;
  }

  .k-grid * {
    visibility: visible;
  }
}
</style>
