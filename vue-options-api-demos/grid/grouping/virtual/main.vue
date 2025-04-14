<template>
  <Grid
    style="height: 720px"
    :data-items="gridData"
    :all-grouped-items="allGroupedData"
    :collapsed-groups="collapsedGroups"
    :unique-field="'ProductID'"
    :columns="columns"
    :resizable="true"
    :reorderable="true"
    :filterable="true"
    :sortable="true"
    :groupable="true"
    :group="group"
    :row-height="40"
    :take="take"
    :skip="skip"
    :scrollable="'virtual'"
    @datastatechange="dataStateChange"
    @expandchange="expandChange"
    :expand-field="'expanded'"
  >
  </Grid>
</template>
<script>
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
import { products } from './products';

export default {
  components: {
    Grid: Grid,
  },
  data: function () {
    return {
      gridData: [],
      allGroupedData: [],
      collapsedGroups: [],
      skip: 0,
      take: 15,
      group: [{ field: 'UnitsInStock' }, { field: 'Category.CategoryName' }],
      columns: [
        { field: 'ProductID', title: 'ID', filter: 'numeric' },
        { field: 'ProductName', title: 'Product Name', reorderable: false },
        {
          field: 'QuantityPerUnit',
          title: 'Quantity Per Unit',
          groupable: true,
        },
        {
          field: 'UnitsInStock',
          title: 'Units In Stock',
          filter: 'numeric',
          reorderable: false,
        },
        { field: 'Category.CategoryName', title: 'Category Name' },
      ],
    };
  },
  created: function () {
    this.getData();
  },
  watch: {
    group() {
      this.collapsedGroups = [];
    },
  },
  methods: {
    getData: function () {
      this.gridData = process(this.getProducts(), {
        take: this.take,
        skip: this.skip,
        group: this.group,
      });
      this.allGroupedData = process(this.getProducts(), {
        group: this.group,
      });
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
      const isExpanded =
        event.dataItem.expanded === undefined
          ? event.dataItem.aggregates
          : event.dataItem.expanded;

      event.dataItem.expanded = !isExpanded;

      this.allGroupedData = {
        ...this.allGroupedData,
        data: [...this.allGroupedData.data],
      };

      //
      // In Vue 2 context, instead of the above line, inside the expandChange method we should have the following:
      //
      //   Vue.set(this, 'collapsedGroups', event.collapsedGroups);
      //   Vue.set(
      //     event.dataItem,
      //     event.target.$props.expandField,
      //     event.dataItem.expanded === undefined ? false : !event.dataItem.expanded
      //   );
      //
    },
    getProducts: function () {
      return products;
    },
  },
};
</script>
