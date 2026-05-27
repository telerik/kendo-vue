<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :filter-cell-render="filterRender"
  >
    <template #filterSlotTemplate="{ props }">
      <div>
        Filter Slot:
        <KInput
          :style="{ width: '180px' }"
          :value="props.value"
          @input="
            (ev) => {
              props.onChange({
                operator: 'contains',
                field: props.field,
                value: ev.target.value,
                syntheticEvent: ev,
              });
            }
          "
        />
        <KButton
          :style="{ 'margin-left': '15px' }"
          @click="
            (ev) => {
              props.onChange({ operator: '', field: '', value: '', event: ev });
            }
          "
          >Clear</KButton
        >
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const filter = ref({
    logic: 'and',
    filters: [{ field: 'UnitPrice', operator: 'neq', value: 2 }],
});

const columns = ref([
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    {
        field: 'ProductName',
        title: 'Product Name',
        filterCell: 'filterSlotTemplate',
        width: '350px',
    },
    { field: 'FirstOrderedOn', filter: 'date', title: 'FirstOrderedOn' },
    { field: 'UnitPrice', filter: 'numeric', title: 'UnitPrice' },
    { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
]);

const products = computed(() => filterBy(sampleProducts, filter.value));

function filterChange(ev) {
    filter.value = ev.filter;
}

function filterRender(h, defaultRendering) {
    return defaultRendering;
}
</script>
