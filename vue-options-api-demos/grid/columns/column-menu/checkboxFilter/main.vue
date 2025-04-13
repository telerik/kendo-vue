<template>
  <div>
    <Grid
      :data-items="result"
      :take="dataState.take"
      :skip="dataState.skip"
      :filter="dataState.filter"
      @datastatechange="dataStateChange"
      :columns="columns"
      :sortable="true"
      :pageable="true"
      :page-size="8"
    >
      <template v-slot:myTemplate="{ props }">
        <custom
          :column="props.column"
          :filterable="props.filterable"
          :filter="props.filter"
          :unique-data="false"
          @filterchange="handleFilterChange"
          @closemenu="
            () => {
              props.onClosemenu();
            }
          "
        />
      </template>
    </Grid>
  </div>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";
import { process } from "@progress/kendo-data-query";
import ColumnMenu from "./ColumnMenu.vue";
import { products } from "./products";

export default {
  components: {
    Grid: Grid,
    custom: ColumnMenu,
  },
  data: function () {
    return {
      result: [],
      dataState: {
        take: 8,
        skip: 0,
        filter: null,
      },
      columns: [
        {
          field: "ProductID",
          title: "Product Id",
          filter: "numeric",
          columnMenu: "myTemplate",
        },
        { field: "ProductName", columnMenu: "myTemplate" },
        { field: "Category.CategoryName", columnMenu: "myTemplate" },
        { field: "UnitPrice", filter: "numeric", columnMenu: "myTemplate" },
        { field: "Discontinued", filter: "boolean", columnMenu: "myTemplate" },
      ],
    };
  },
  created: function () {
    this.createDataState({
      take: 8,
      skip: 0,
      filter: null,
    });
  },
  methods: {
    handleFilterChange: function (filter) {
      this.dataState = {
        ...this.dataState,
        filter: filter,
      };
      this.result = process(products.slice(0), this.dataState);
    },
    createDataState(dataState) {
      this.dataState = {
        ...this.dataState,
      };
      this.result = process(products.slice(0), this.dataState);
    },
    dataStateChange(event) {
      this.createDataState(event.dataState);
    },
  },
};
</script>
