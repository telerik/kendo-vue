<template>
  <div>
    <Filter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    >
      <template #myCustomDropDownListFilter="{ props }">
        <CustomDropDownListFilter
          :filter="props.filter"
          :filter-options="dropDownListFilterOptions"
          @filterchange="props.onFilterchange"
        />
      </template>

      <template #myCustomComboBoxFilter="{ props }">
        <CustomComboBoxFilter
          :filter="props.filter"
          :filter-options="comboBoxFilterOptions"
          @change="props.onFilterchange"
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
import { ref, computed, onMounted } from "vue"
import { Filter, Operators } from "@progress/kendo-vue-data-tools"
import { filterBy } from "@progress/kendo-data-query"
import { Grid } from "@progress/kendo-vue-grid"
import { sampleProducts } from "./products"
import CustomDropDownListFilter from "./CustomDropDownListFilter.vue"
import CustomComboBoxFilter from "./CustomComboBoxFilter.vue"

const dropDownListFilterOptions = ref(null)
const comboBoxFilterOptions = ref(null)
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
        name: "ProductName",
        label: "Product Name",
        filterRender: "myCustomDropDownListFilter",
        operators: Operators.text
    },
    {
        name: "QuantityPerUnit",
        label: "Quantity Per Unit",
        filterRender: "myCustomComboBoxFilter",
        operators: Operators.text
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

onMounted(() => {
    dropDownListFilterOptions.value = products.value.map((product) => ({
        text: product.ProductName,
        value: product.ProductName
    }))

    comboBoxFilterOptions.value = products.value.map((product) => ({
        text: product.QuantityPerUnit,
        id: product.ProductID
    }))
})
</script>
