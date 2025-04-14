<template>
  <div>
    <kFilter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    >
    </kFilter>
    <Grid
      :data-items="products"
      :filterable="true"
      :filter="filter"
      @filterchange="onFilterChange"
      :columns="columns"
    >
    </Grid>
  </div>
</template>

<script>
import { Filter, Operators } from "@progress/kendo-vue-data-tools";
import { filterBy } from "@progress/kendo-data-query";
import { Grid } from "@progress/kendo-vue-grid";
import { sampleProducts } from "./products";

const currentDate = new Date();

export default {
  components: {
    kFilter: Filter,
    Grid,
  },
  data: function () {
    return {
      defaultGroupFilter: {
        logic: "and",
        filters: [],
      },
      filter: {
        logic: "and",
        filters: [
          { field: "ProductName", operator: "contains", value: "an" },
          { field: "UnitPrice", operator: "neq", value: 22 },
          {
            logic: "or",
            filters: [
              { field: "ProductName", operator: "startswith", value: "c" },
              { field: "UnitPrice", operator: "eq", value: 19 },
            ],
          },
          { field: "FirstOrderedOn", operator: "lte", value: currentDate },
          { field: "Discontinued", operator: "eq", value: true },
        ],
      },
      fields: [
        {
          name: "ProductName",
          label: "Product Name",
          filter: "text",
          operators: Operators.text,
        },
        {
          name: "UnitPrice",
          label: "Unit Price",
          filter: "numeric",
          operators: Operators.numeric,
        },
        {
          name: "FirstOrderedOn",
          label: "First Ordered On",
          filter: "date",
          operators: Operators.date,
        },
        {
          name: "Discontinued",
          label: "Discontinued",
          filter: "boolean",
          operators: Operators.boolean,
        },
      ],
      columns: [
        {
          field: "ProductID",
          filterable: false,
          title: "Product ID",
          width: "50px",
        },
        { field: "ProductName", title: "Product Name" },
        { field: "FirstOrderedOn", filter: "date", title: "First Ordered On" },
        { field: "UnitPrice", filter: "numeric", title: "Unit Price" },
        { field: "Discontinued", filter: "boolean", title: "Discontinued" },
      ],
    };
  },
  computed: {
    currentFilter() {
      return filterBy([], this.filter);
    },
    products: function () {
      return filterBy(sampleProducts, this.filter);
    },
  },
  methods: {
    onFilterChange(event) {
      if (event.filter !== null) {
        this.filter = event.filter;
      } else {
        this.filter = this.defaultGroupFilter;
      }
    },
  },
};
</script>
