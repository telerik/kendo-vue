<template>
  <div>
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
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const dataItems = ref([]);
const scrollable = ref('scrollable');
const dimensions = ref({ height: '400px', width: '800px' });

const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

function print() {
    setPrintLayout();
    setTimeout(() => {
        window.print();
        setNormalLayout();
    });
}

function setPrintLayout() {
    dimensions.value = { height: '100%', width: '100%' };
    scrollable.value = 'none';
}

function setNormalLayout() {
    dimensions.value = { height: '400px', width: '800px' };
    scrollable.value = 'scrollable';
}

function createRandomData(count) {
    const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk',
    ];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName: productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
}

dataItems.value = createRandomData(100);
</script>

<style>
@media print {
  * {
    overflow: visible !important;
    visibility: hidden;
  }

  .k-grid {
    visibility: visible;
    margin-top: -60px;
  }

  .k-grid * {
    visibility: visible;
  }
}
</style>
