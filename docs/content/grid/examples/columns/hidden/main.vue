<template>
  <div>
    <div class="example-config">
      <KButton @click="restoreColumns">Restore hidden columns</KButton>
    </div>
    <Grid
      :style="{ height: '280px' }"
      :data-items="items"
      :columns="columns"
      @hidecolumn="hideColumn"
    >
      <template #myTemplate="{ props }">
        <Header
          :field="props.field"
          :title="props.title"
          @hidecolumn="hideColumn"
        />
      </template>
    </Grid>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import Header from './Header.vue';

const columns = ref([
    {
        field: 'ProductID',
        title: 'ID',
        headerCell: 'myTemplate',
        width: '130px',
    },
    {
        field: 'ProductName',
        title: 'Product Name',
        width: '300px',
        headerCell: 'myTemplate',
    },
    {
        field: 'UnitPrice',
        title: 'Unit Price',
        headerCell: 'myTemplate',
    },
]);

const items = ref([
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18.0 },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19.0 },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10.0 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22.0 },
]);

const hideColumn = (field) => {
    columns.value.forEach((column) => {
        if (column.field === field) {
            column.hidden = true;
        }
    });
};

const restoreColumns = () => {
    columns.value.forEach((column) => {
        if (column.hidden) {
            column.hidden = false;
        }
    });
};
</script>
