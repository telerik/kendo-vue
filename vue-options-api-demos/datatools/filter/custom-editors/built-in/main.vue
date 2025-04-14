<template>
  <div>
    <kFilter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    >
      <template v-slot:myCustomFilter="{ props }">
        <custom
          :filter="props.filter"
          @filterchange="props.onFilterchange"
        />
      </template>
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
import CustomEnumFilter from "./CustomEnumFilter.vue";

export default {
  components: {
    kFilter: Filter,
    custom: CustomEnumFilter,
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
        filters: [],
      },
      fields: [
        {
          name: "ProductName",
          label: "Product Name",
          filterRender: "myCustomFilter",
          operators: Operators.text,
        },
        {
          name: "QuantityPerUnit",
          label: "Quantity Per Unit",
          filter: "text",
          operators: Operators.text,
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
