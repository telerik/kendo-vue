<template>
  <Grid
    :data-items="filteredData"
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
        <GridSearchBox />
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
      value: 'C'
    }
  ]
}

const search = ref<CompositeFilterDescriptor>(initialSearch)

const filteredData = computed(() => {
  return filterBy(sampleProducts, search.value)
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

    console.log('Demo Search change event:', e);
  search.value = e.search
}
</script>
