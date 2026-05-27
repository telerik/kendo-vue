<template>
    {{ filter }}
  <Grid
    :data-items="filteredData"
    :filterable="true"
    :filter="filter"
    @filterchange="handleFilter"
    :search="search"
    @searchchange="handleSearch"
    :columns="columns"
  >
      <GridToolbar>
        <span>
          Write in the textbox on the right-hand side to filter all string columns, or use the configurator
          for programmatic control.
        </span>
        <span class="k-toolbar-spacer" />
        <GridSearchBox
          placeholder="Search in all columns..."
        />
      </GridToolbar>
  </Grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Grid, GridToolbar, GridSearchBox } from '@progress/kendo-vue-grid'
import { type CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query'
import { sampleProducts } from './products'

const initialSearch: CompositeFilterDescriptor = {
  logic: 'or',
  filters: [
    {
      field: 'ProductName',
      operator: 'contains',
      value: 'an'
    }
  ]
}

const initialFilter: CompositeFilterDescriptor = {
  logic: 'or',
  filters: [
    {
      field: 'ProductName',
      operator: 'contains',
      value: 'Cha'
    }
  ]
}

const search = ref<CompositeFilterDescriptor>(initialSearch)
const filter = ref<CompositeFilterDescriptor>(initialFilter)

const filteredData = computed(() => {
  return filterBy(filterBy(sampleProducts, filter.value), search.value)
})

const columns = [
  {
    field: 'ProductID',
    title: 'ID',
    filterable: false,
    width: '160px'
  },
  {
    field: 'ProductName',
    title: 'Product Name',
    width: '340px'
  },
  {
    field: 'AddDate',
    width: '240px',
    filter: 'date' as const,
    format: '{0:d}'
  },
  {
    field: 'Discontinued',
    width: '190px',
    filter: 'boolean' as const
  },
  {
    field: 'UnitPrice',
    width: '180px',
    filter: 'numeric' as const,
    format: '{0:c}'
  }
]

const handleSearch = (e: any) => {
  search.value = e.search
}

const handleFilter = (e: any) => {
  console.log('handleFilter', e.filter);
  filter.value = e.filter
}

</script>
