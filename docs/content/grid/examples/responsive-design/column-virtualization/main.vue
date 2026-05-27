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
import { onBeforeMount, ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const numberOfColumns = 100;
const numberOfRows = 100000;
const skip = ref(0);
const take = ref(15);
const products = ref(null);
const columns = ref(null);

function getColumns() {
    const cols = [];
    for (let c = 1; c <= numberOfColumns; c++) {
        cols.push({
            field: 'Field-' + c.toString(),
            width: 150,
            hidden: c % 2 === 1,
            media: c === 6 ? '(min-width: 800px)' : undefined,
        });
    }
    return cols;
}

function pageChange(event) {
    skip.value = event.page.skip;
    take.value = event.page.take;
    products.value = getData(skip.value, take.value);
}

function getData(skip, take) {
    const page = [];
    for (let r = skip + 1; r <= skip + take && r <= numberOfRows; r++) {
        const row = {};
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = `R${r}:C${c}`;
        }
        page.push(row);
    }
    return page;
}

onBeforeMount(() => {
    products.value = getData(skip.value, take.value);
    columns.value = getColumns();
});
</script>
