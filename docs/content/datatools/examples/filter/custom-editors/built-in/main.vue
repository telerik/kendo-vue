<template>
  <div>
    <Filter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    >
      <template #myCustomFilter="{ props }">
        <CustomEnumFilter
          :filter="props.filter"
          @filterchange="props.onFilterchange"
        />
      </template>
    </Filter>
    <Grid
      :data-items="products"
      :filterable="true"
      :filter="filter"
      @filterchange="onFilterChange"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Filter, Operators } from "@progress/kendo-vue-data-tools";
import { filterBy } from "@progress/kendo-data-query";
import { Grid } from "@progress/kendo-vue-grid";
import { sampleProducts } from "./products";
import CustomEnumFilter from "./CustomEnumFilter.vue";

const defaultGroupFilter = ref({
    logic: "and",
    filters: [],
});

const filter = ref({
    logic: "and",
    filters: [],
});

const fields = ref([
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
]);

const columns = ref([
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
]);

const products = computed(() => filterBy(sampleProducts, filter.value));

const onFilterChange = (event) => {
    filter.value = event.filter !== null ? event.filter : defaultGroupFilter.value;
};
</script>
