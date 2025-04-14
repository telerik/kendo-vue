<template>
  <Grid
    :style="{ height: '300px' }"
    :data-items="result"
    :sortable="true"
    :sort="sort"
    :columns="columns"
    @sortchange="sortChangeHandler"
    :loader="loader"
  >
  </Grid>
</template>
<script>
import { orderBy } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';

export default {
  components: {
    Grid: Grid,
  },
  data: function () {
    return {
      loader: false,
      sort: [{ field: 'ProductName', dir: 'asc' }],
      columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Unit Price' },
      ],
    };
  },
  computed: {
    result: {
      get: function () {
        return orderBy(this.createRandomData(500), this.sort);
      },
    },
  },
  methods: {
    sortChangeHandler: function (e) {
      this.loader = true;
      // The idea behind using the following setTimeout method is to
      // demonstrate how we can show a loader while fetching data.
      // In a real-life scenarios with remote data binding, the 'loader'
      // property should be updated before making a server request
      // and after the request completes.
      setTimeout(() => {
        this.loader = false;
        this.sort = e.sort;
      }, 200);
    },
    createRandomData(count) {
      const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk',
      ];
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
      const units = [2, 7, 12, 25, 67, 233, 123, 53, 67, 89];

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
          UnitsInStock: units[Math.floor(Math.random() * units.length)],
        }));
    },
  },
};
</script>
