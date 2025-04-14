<template>
    <Grid
      ref="grid"
      :cell-render="cellTemplate"
      :style="{ height: '580px' }"
      :data-items="gridData"
      :resizable="true"
      :reorderable="true"
      :sortable="true"
      :pageable="gridPageable"
      :groupable="{ footer: 'visible' }"
      :group="group"
      :take="take"
      :skip="skip"
      :expand-field="'expanded'"
      :columns="columns"
      @datastatechange="dataStateChange"
      @expandchange="expandChange"
    >
      <template v-slot:myTemplate="{ props }">
        <custom
          :field="props.field"
          :expanded="props.expanded"
          :row-type="props.rowType"
          :level="props.level"
          :column-index="props.columnIndex"
          :columns-count="props.columnsCount"
          :data-item="props.dataItem"
          :class-name="props.className"
          @click="clickHandler(props.dataItem)"
        />
      </template>
    </Grid>
  </template>
  <script>
  import { Grid } from '@progress/kendo-vue-grid';
  import { process } from '@progress/kendo-data-query';
  import CustomCell from './CellComponent.vue';

  export default {
    components: {
      Grid: Grid,
      custom: CustomCell,
    },
    data: function () {
      return {
        aggregates: [
          { field: 'UnitsInStock', aggregate: 'sum' },
          { field: 'UnitPrice', aggregate: 'average' },
        ],
        cellTemplate: 'myTemplate',
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
      };
    },
    created: function () {
      if (this.group) {
        this.group.map((group) => (group.aggregates = this.aggregates));
      }
      this.group = this.group;
      this.getData();
    },
    methods: {
      clickHandler(dataItem) {
        dataItem.expanded =
          dataItem.expanded === undefined ? false : !dataItem.expanded;
      },
      getData: function () {
        this.gridData = process(this.products, {
          take: this.take,
          skip: this.skip,
          group: this.group,
        });
      },
      createAppState: function (dataState) {
        if (dataState.group) {
          dataState.group.map((group) => (group.aggregates = this.aggregates));
        }
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
