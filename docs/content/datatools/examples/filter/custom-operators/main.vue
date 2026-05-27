<template>
  <div>
    <Filter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    />
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
import { ref, computed } from "vue"
import { Filter, Operators } from "@progress/kendo-vue-data-tools"
import { filterBy } from "@progress/kendo-data-query"
import { Grid } from "@progress/kendo-vue-grid"
import { sampleProducts } from "./products"

const defaultGroupFilter = {
    logic: "and",
    filters: []
}

const filter = ref({
    logic: "and",
    filters: []
})

const fields = [
    {
        name: "UnitPrice",
        label: "Unit Price",
        filter: "numeric",
        operators: [
            { ...Operators.numeric[0], text: "Custom IS Equal To" },
            { ...Operators.numeric[1], text: "Custom IS NOT Equal To" },
            { ...Operators.numeric[2] }
        ]
    },
    {
        name: "Discontinued",
        label: "Discontinued",
        filter: "boolean",
        operators: [
            { text: "Custom Equal to", operator: "eq" },
            { text: "Custom NOT Equal to", operator: "neq" }
        ]
    }
]

const columns = [
    {
        field: "ProductID",
        filterable: false,
        title: "Product ID",
        width: "50px"
    },
    { field: "ProductName", title: "Product Name" },
    { field: "QuantityPerUnit", title: "Quantity Per Unit" },
    { field: "FirstOrderedOn", filter: "date", title: "First Ordered On" },
    { field: "UnitPrice", filter: "numeric", title: "Unit Price" },
    { field: "Discontinued", filter: "boolean", title: "Discontinued" }
]

const products = computed(() => filterBy(sampleProducts, filter.value))

const onFilterChange = (event) => {
    filter.value = event.filter !== null ? event.filter : defaultGroupFilter
}
</script>
