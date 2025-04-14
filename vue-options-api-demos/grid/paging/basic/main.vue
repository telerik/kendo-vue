<template>
  <Grid
    :style="{ height: '450px' }"
    :data-items="result"
    :pageable="true"
    :skip="skip"
    :take="take"
    :total="total"
    :columns="columns"
    @pagechange="pageChangeHandler"
    :loader="loader"
  >
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
  components: {
    Grid: Grid,
  },
  data: function () {
    return {
      loader: false,
      dataItems: [],
      skip: 0,
      take: 10,
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
        return this.dataItems.slice(this.skip, this.take + this.skip);
      },
    },
    total() {
      return this.dataItems ? this.dataItems.length : 0;
    },
  },
  methods: {
    pageChangeHandler: function (event) {
      this.loader = true;
      // The idea behind using the following setTimeout method is to
      // demonstrate how we can show a loader while fetching data.
      // In a real-life scenarios with remote data binding, the 'loader'
      // property should be updated before making a server request
      // and after the request completes.
      setTimeout(() => {
        this.loader = false;
        this.skip = event.page.skip;
        this.take = event.page.take;
      }, 300);
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

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
    },
  },
  mounted() {
    this.dataItems = this.createRandomData(1000);
  },
};
</script>
