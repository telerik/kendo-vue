<template>
  <Grid
    :style="{ width: '370px' }"
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
    Grid,
  },
  data: function () {
    return {
      loader: false,
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
        { field: 'Discontinued', title: 'Discontinued', filter: 'boolean' },
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
