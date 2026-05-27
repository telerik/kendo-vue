<template>
  <Grid
    :auto-process-data="true"
    :data-items="sampleProducts"
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
import { Grid, GridToolbar, GridSearchBox } from '@progress/kendo-vue-grid'
import { sampleProducts } from './products'

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
</script>
