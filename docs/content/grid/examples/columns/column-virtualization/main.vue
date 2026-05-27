<template>
  <Grid
    :style="{ width: '620px', height: '400px' }"
    :scrollable="'virtual'"
    :column-virtualization="true"
    :skip="skip"
    :take="take"
    :total="numberOfRows"
    :data-items="products"
    :columns="columns"
    @pagechange="pageChange"
  />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
const getColumns = () => {
    const cols = [];
    for (let c = 1; c <= numberOfColumns; c++) {
        cols.push({ field: 'Field-' + c.toString(), width: 150 });
    }
    return cols;
};
const numberOfColumns = 100;
const numberOfRows = 100000;
const skip = ref(0);
const take = ref(15);
const columns = ref(getColumns());
const products = ref([]);
const getData = (skip, take) => {
    const page = [];
    for (let r = skip + 1; r <= skip + take && r <= numberOfRows; r++) {
        const row = {};
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = 'R' + r + ':C' + c;
        }
        page.push(row);
    }
    return page;
};
const pageChange = (event) => {
    skip.value = event.page.skip;
    take.value = event.page.take;
    products.value = getData(event.page.skip, event.page.take);
};
onMounted(() => {
    products.value = getData(skip.value, take.value);
});
</script>
