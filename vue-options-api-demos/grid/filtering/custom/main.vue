<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :filter-cell-render="filterRender"
  >
    <template v-slot:filterSlotTemplate="{ props, methods }">
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
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { Input } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

export default {
  components: {
    Grid,
    KInput: Input,
    KButton: Button,
  },
  data: function () {
    return {
      filter: {
        logic: 'and',
        filters: [{ field: 'UnitPrice', operator: 'neq', value: 2 }],
      },
      columns: [
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
      ],
    };
  },
  computed: {
    products: function () {
      return filterBy(sampleProducts, this.filter);
    },
  },
  methods: {
    filterChange: function (ev) {
      this.filter = ev.filter;
    },
    filterRender: function (h, defaultRendering, props, change) {
      return defaultRendering;
    },
  },
};
</script>
