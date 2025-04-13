<template>
  <Grid
    :data-items="result"
    :take="dataState.take"
    :skip="dataState.skip"
    :sort="dataState.sort"
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
        :sortable="props.sortable"
        :sort="props.sort"
        :columns="columns"
        @sortchange="(e) => props.onSortchange(e)"
        @filterchange="(e) => props.onFilterchange(e)"
        @closemenu="(e) => props.onClosemenu(e)"
        @contentfocus="(e) => props.onContentfocus(e)"
        @columnssubmit="onColumnsSubmit"
      />
    </template>
  </Grid>
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
        take: 0,
        skip: 0,
      },
      columns: [
        {
          title: "Product Id",
          field: "ProductID",
          filter: "numeric",
          columnMenu: "myTemplate",
        },
        {
          title: "Product Name",
          field: "ProductName",
          filter: "text",
          columnMenu: "myTemplate",
        },
        {
          title: "Quantity Per Unit",
          field: "QuantityPerUnit",
          filter: "numeric",
          columnMenu: "myTemplate",
        },
        {
          title: "Unit Price",
          field: "UnitPrice",
          filter: "numeric",
          columnMenu: "myTemplate",
        },
        {
          title: "Units In Stock",
          field: "UnitsInStock",
          filter: "numeric",
          columnMenu: "myTemplate",
        },
        {
          title: "Discontinued",
          field: "Discontinued",
          filter: "boolean",
          columnMenu: "myTemplate",
        },
      ],
    };
  },
  created: function () {
    this.createDataState({
      take: 8,
      skip: 0,
    });
  },
  methods: {
    handleFilterChange: function (filter) {
      this.result = process(products.slice(0), { filter: filter });
    },
    createDataState(dataState) {
      this.result = process(products.slice(0), dataState);
      this.dataState = dataState;
    },
    dataStateChange(event) {
      this.createDataState(event.data);
    },
    onColumnsSubmit(columnsState) {
      this.columns = columnsState;
    },
  },
};
</script>
