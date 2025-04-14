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

export default {
  components: {
    kFilter: Filter,
    Grid,
  },
  data: function () {
    return {
      dropDownListFilterOptions: null,
      comboBoxFilterOptions: null,
      defaultGroupFilter: {
        logic: "and",
        filters: [],
      },
      filter: {
        logic: "and",
        filters: [],
      },
      fields: [
        {
          name: "UnitPrice",
          label: "Unit Price",
          filter: "numeric",
          operators: [
            { ...Operators.numeric[0], text: "Custom IS Equal To" },
            { ...Operators.numeric[1], text: "Custom IS NOT Equal To" },
            { ...Operators.numeric[2] },
          ],
        },
        {
          name: "Discontinued",
          label: "Discontinued",
          filter: "boolean",
          operators: [
            { text: "Custom Equal to", operator: "eq" },
            { text: "Custom NOT Equal to", operator: "neq" },
          ],
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
        { field: "QuantityPerUnit", title: "Quantity Per Unit" },
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
    products() {
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
