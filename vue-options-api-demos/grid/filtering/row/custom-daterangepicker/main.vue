<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :loader="loader"
  >
    <template v-slot:filterSlotTemplate="{ props, methods }">
      <div>
        <DateRangePicker @change="onDateRangePickerChange" />
      </div>
    </template>
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { DateRangePicker } from '@progress/kendo-vue-dateinputs';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

export default {
  components: {
    Grid,
    DateRangePicker,
  },
  data: function () {
    return {
      loader: false,
      uniqueData: null,
      filter: {
        logic: 'and',
        filters: [],
      },
    };
  },
  computed: {
    products: function () {
      return filterBy(sampleProducts, this.filter);
    },
    columns: function () {
      return [
        {
          field: 'ProductID',
          filterable: false,
          title: 'ID',
          width: '50px',
        },
        { field: 'ProductName', title: 'Product Name' },
        {
          field: 'FirstOrderedOn',
          title: 'First Ordered On',
          format: '{0:d}',
          filterCell: 'filterSlotTemplate',
        },
      ];
    },
  },
  methods: {
    filterChange: function (ev) {
      this.loader = true;
      // The idea behind using the following setTimeout method is to
      // demonstrate how we can show a loader while fetching data.
      // In real-life scenarios with remote data binding, the 'loader'
      // property should be updated before making a server request
      // and after the request completes.
      setTimeout(() => {
        this.filter = ev.filter;
        this.loader = false;
      }, 300);
    },
    onDateRangePickerChange(e) {
      const currentFilters = this.filter.filters;

      const isDateRangeFilterApplied =
        currentFilters.filter((el) => el.customOperator).length !== 0;

      if (isDateRangeFilterApplied) {
        const index = currentFilters.map((e) => e.customOperator).indexOf(true);
        currentFilters.splice(index, 1);
      }
      if (e.value.start && e.value.end) {
        this.filter.filters.push({
          customOperator: true,
          logic: 'and',
          filters: [
            {
              field: 'FirstOrderedOn',
              operator: 'gte',
              value: e.value.start,
            },
            {
              field: 'FirstOrderedOn',
              operator: 'lte',
              value: e.value.end,
            },
          ],
        });
      }
    },
  },
};
</script>
