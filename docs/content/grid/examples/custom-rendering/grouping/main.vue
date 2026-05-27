<template>
  <Grid
    ref="grid"
    :cell-render="cellTemplate"
    :style="{ height: '520px' }"
    :data-items="gridData"
    :resizable="true"
    :reorderable="true"
    :sortable="true"
    :pageable="gridPageable"
    :groupable="true"
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
import { ref, onMounted, onBeforeMount } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import CustomCell from './CustomCell.vue';

const cellTemplate = ref('myTemplate');
const gridPageable = ref({ pageSizes: true });
const products = ref(null);
const gridData = ref([]);
const skip = ref(0);
const take = ref(10);
const group = ref([{ field: 'UnitsInStock' }]);
const columns = ref([
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
]);

const getData = () => {
    gridData.value = process(products.value, {
        take: take.value,
        skip: skip.value,
        group: group.value,
    });
};

const createAppState = (dataState) => {
    group.value = dataState.group;
    take.value = dataState.take;
    skip.value = dataState.skip;
    getData();
};

const dataStateChange = (event) => {
    createAppState(event.data);
};

const createRandomData = (count) => {
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
};
onBeforeMount(() => {
    products.value = createRandomData(100);
});

onMounted(() => {
    getData();
});
</script>
