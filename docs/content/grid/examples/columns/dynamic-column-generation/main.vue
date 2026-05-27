<template>
  <div class="row">
    <div class="col m-3">
      <NumericTextBox
        v-if="!loader"
        v-model="numberOfColumns"
        :min="1"
        :label="'Number of columns'"
        :style="{ width: '250px' }"
      />
      <div>Loading columns from a remote service</div>
    </div>
  </div>
  <Grid
    :style="{ height: '440px', width: '700px' }"
    :data-items="data"
    :columns="columns"
    :show-loader="showLoader"
  />
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { Grid } from '@progress/kendo-vue-grid';

const numberOfColumns = ref(3);
const numberOfRows = ref(10);
const data = ref([]);
const showLoader = ref(false);

const columns = computed(() => {
    const cols = [{ field: 'id', width: '150px' }];
    for (let c = 1; c < numberOfColumns.value; c++) {
        cols.push({ field: `Field-${c}`, width: '150px' });
    }
    return cols;
});

const getData = () => {
    const page = [];
    for (let r = 1; r <= numberOfRows.value; r++) {
        const row = { id: r };
        for (let c = 1; c <= numberOfColumns.value; c++) {
            row[`Field-${c}`] = `R${r}:C${c}`;
        }
        page.push(row);
    }
    return page;
};

watch(numberOfColumns, () => {
    showLoader.value = true;
    setTimeout(() => {
        data.value = getData();
        showLoader.value = false;
    }, 1000);
});

data.value = getData();
</script>
