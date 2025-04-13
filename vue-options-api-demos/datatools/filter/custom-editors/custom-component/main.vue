<template>
  <div>
    <kFilter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    >
      <template v-slot:myCustomDropDownListFilter="{ props }">
        <customDropDownListFilter
          :filter="props.filter"
          :filter-options="dropDownListFilterOptions"
          @filterchange="props.onFilterchange"
        />
      </template>

      <template v-slot:myCustomComboBoxFilter="{ props }">
        <customComboBoxFilter
          :filter="props.filter"
          :filter-options="comboBoxFilterOptions"
          @change="props.onFilterchange"
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
import CustomDropDownListFilter from "./CustomDropDownListFilter.vue";
import CustomComboBoxFilter from "./CustomComboBoxFilter.vue";

export default {
  components: {
    kFilter: Filter,
    customDropDownListFilter: CustomDropDownListFilter,
    customComboBoxFilter: CustomComboBoxFilter,
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
          name: "ProductName",
          label: "Product Name",
          filterRender: "myCustomDropDownListFilter",
          operators: Operators.text,
        },
        {
          name: "QuantityPerUnit",
          label: "Quantity Per Unit",
          filterRender: "myCustomComboBoxFilter",
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
  mounted() {
    this.dropDownListFilterOptions = this.products.map((product) => ({
      text: product.ProductName,
      value: product.ProductName,
    }));

    this.comboBoxFilterOptions = this.products.map((product) => ({
      text: product.QuantityPerUnit,
      id: product.ProductID,
    }));
  },
};
</script>
