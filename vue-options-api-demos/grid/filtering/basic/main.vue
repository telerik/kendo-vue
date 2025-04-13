<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :loader="loader"
  >
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

export default {
  components: {
    Grid: Grid,
  },
  data: function () {
    return {
      loader: false,
      filter: {
        logic: 'and',
        filters: [
          { field: 'UnitPrice', operator: 'neq', value: 18 },
          {
            field: 'FirstOrderedOn',
            operator: 'gte',
            value: new Date('1996-10-10'),
          },
        ],
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
          title: 'Product ID',
          width: '50px',
        },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
        { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
        { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
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
  },
};
</script>
