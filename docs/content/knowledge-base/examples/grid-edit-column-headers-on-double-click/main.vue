<template>
  <Grid :style="{ height: '280px' }" :data-items="items" :columns="columns">
    <template #headerTemplate="{ props }">
      <span
        v-if="!getColumnItem(props).headerInEdit"
        @dblclick="(e) => customHandler(e, props)"
      >
        {{ props.title }}
      </span>
      <span v-else>
        <KInput
          @blur="onBlur(props)"
          @input="(e) => onInput(e, props)"
          type="text"
          :value="props.title"
        />
      </span>
    </template>
  </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Input as KInput } from '@progress/kendo-vue-inputs';

const columns = ref([
    {
        field: 'ProductID',
        title: 'Product ID',
        headerCell: 'headerTemplate',
        headerInEdit: false,
    },
    {
        field: 'ProductName',
        title: 'Product Name',
        headerCell: 'headerTemplate',
        headerInEdit: false,
    },
    {
        field: 'UnitPrice',
        title: 'Unit Price',
        headerCell: 'headerTemplate',
        headerInEdit: false,
    },
]);

const items = ref([
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18.0 },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19.0 },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10.0 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22.0 },
]);

function customHandler(e, props) {
    const item = getColumnItem(props);
    item.headerInEdit = true;
}

function onBlur(props) {
    const item = getColumnItem(props);
    item.headerInEdit = false;
}

function onInput(e, props) {
    const item = getColumnItem(props);
    item.title = e.value;
}

function getColumnItem(props) {
    return columns.value.find((el) => el.title === props.title);
}
</script>
