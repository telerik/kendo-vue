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
      :data-items="result"
      :pageable="pageable"
      :skip="skip"
      :take="take"
      :total="total"
      :columns="columns"
      :scrollable="scrollable"
      @pagechange="pageChangeHandler"
      :show-loader="showLoader"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const showLoader = ref(false);
const dataItems = ref([]);
const skip = ref(0);
const take = ref(10);
const isPrintState = ref(false);
const scrollable = ref('scrollable');
const dimensions = ref({ height: '400px', width: '800px' });

const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

const result = computed(() =>
    isPrintState.value
        ? dataItems.value
        : dataItems.value.slice(skip.value, take.value + skip.value)
);

const total = computed(() => dataItems.value.length);

const pageable = computed(() => !isPrintState.value);

function print() {
    setPrintLayout();
    setTimeout(() => {
        window.print();
        setNormalLayout();
    });
}

function setPrintLayout() {
    isPrintState.value = true;
    dimensions.value = { height: '100%', width: '100%' };
    scrollable.value = 'none';
}

function setNormalLayout() {
    isPrintState.value = false;
    dimensions.value = { height: '400px', width: '800px' };
    scrollable.value = 'scrollable';
}

function pageChangeHandler(event) {
    showLoader.value = true;
    setTimeout(() => {
        showLoader.value = false;
        skip.value = event.page.skip;
        take.value = event.page.take;
    }, 300);
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
