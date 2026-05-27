<template>
  <Grid
    ref="grid"
    :cell-render="cellTemplate"
    :style="{ height: '580px' }"
    :data-items="gridData"
    :resizable="true"
    :reorderable="true"
    :sortable="true"
    :pageable="gridPageable"
    :groupable="{ footer: 'visible', expandable: true }"
    :group="group"
    :take="take"
    :skip="skip"
    :columns="columns"
    @datastatechange="dataStateChange"
  >
    <template #myTemplate="{ props }">
      <CustomCell
        :field="props.field"
        :expanded="props.expanded"
        :row-type="props.rowType"
        :level="props.level"
        :column-index="props.columnIndex"
        :columns-count="props.columnsCount"
        :data-item="props.dataItem"
        :class-name="props.className"
        :class="props.class"
        @click="(e, item, expanded) => props.onClick(e, item, expanded)"
      />
    </template>
  </Grid>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import CustomCell from './CellComponent.vue';

const aggregates = [
    { field: 'UnitsInStock', aggregate: 'sum' },
    { field: 'UnitPrice', aggregate: 'average' },
];

const cellTemplate = 'myTemplate';
const gridPageable = { pageSizes: true };
const products = ref([]);
const gridData = ref([]);
const skip = ref(0);
const take = ref(10);
const group = ref([{ field: 'UnitsInStock', aggregates }]);
const columns = [
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
];

onMounted(() => {
    products.value = createRandomData(1000);
    getData();
});

function getData() {
    gridData.value = process(products.value, {
        take: take.value,
        skip: skip.value,
        group: group.value,
    });
}

function createAppState(dataState) {
    if (dataState.group) {
        dataState.group.map(group => (group.aggregates = aggregates));
    }
    group.value = dataState.group;
    take.value = dataState.take;
    skip.value = dataState.skip;
    getData();
}

function dataStateChange(event) {
    createAppState(event.data);
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
    const units = [2, 7, 12, 25, 67, 233, 123, 53, 67, 89];

    return Array.from({ length: count }, (_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        UnitsInStock: units[Math.floor(Math.random() * units.length)],
    }));
}
</script>
