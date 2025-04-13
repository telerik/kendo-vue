<template>
  <Grid
    ref="grid"
    :style="{ height: '520px' }"
    :data-items="gridData"
    :resizable="true"
    :reorderable="true"
    :sortable="true"
    :pageable="gridPageable"
    :groupable="true"
    :group="group"
    :take="take"
    :skip="skip"
    :expand-field="'expanded'"
    :columns="columns"
    :loader="loader"
    @datastatechange="dataStateChange"
    @expandchange="expandChange"
  >
  </Grid>
</template>
<script>
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';

export default {
  components: {
    Grid: Grid,
  },
  data: function () {
    return {
      gridPageable: { pageSizes: true },
      products: this.createRandomData(1000),
      gridData: [],
      skip: 0,
      take: 10,
      group: [{ field: 'UnitsInStock' }],
      expandedItems: [],
      columns: [
        { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
        { field: 'UnitsInStock', title: 'Units In Stock' },
      ],
      loader: false,
    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      this.loader = true;
      // The idea behind using the following setTimeout method is to
      // demonstrate how we can show a loader while fetching data.
      // In a real-life scenarios with remote data binding, the 'loader'
      // property should be updated before making a server request
      // and after the request completes.
      setTimeout(() => {
        this.loader = false;
        this.gridData = process(this.products, {
          take: this.take,
          skip: this.skip,
          group: this.group,
        });
      }, 300);
    },
    createAppState: function (dataState) {
      this.group = dataState.group;
      this.take = dataState.take;
      this.skip = dataState.skip;
      this.getData();
    },
    dataStateChange: function (event) {
      this.createAppState(event.data);
    },
    expandChange: function (event) {
      event.dataItem[event.target.$props.expandField] = event.value;
      //
      // In Vue 2 context, instead of the above line, inside the expandChange method we should have the following:
      //
      //   Vue.set(
      //     event.dataItem,
      //     event.target.$props.expandField,
      //     event.dataItem.expanded === undefined ? false : !event.dataItem.expanded
      //   );
      //
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
