---
title: Exporting Custom Data
description: "Learn how to export different data than what is displayed in the Kendo UI for Vue Data Grid."
slug: customdata_csvexport_grid
position: 20
---

# Exporting Custom Data

The [`csv`]({% slug api_grid_gridprops %}#toc-csv) property's `data` option allows you to export a different dataset than what is currently displayed in the Grid. This is useful for scenarios like exporting all data when the Grid shows only a paginated subset.

> **Tip**: If you're using `:auto-process-data="true"` and simply want to control whether to export all pages or just the current page, use the `allPages` option instead. Set `allPages: false` to export only the current page, or `allPages: true` (the default) to export all data. See [CSV Export Basics]({% slug overview_csvexport_grid %}) for details.

<div data-component="StartFreeTrialSection"></div>

## Custom Data Export

You can specify custom data to export using the `data` property in the CSV configuration object:

<demo metaUrl="grid/csv-export/custom-data-export/" height="720"></demo>

In this example, the Grid displays the full product list, but the CSV export only includes the first 5 products.

## Common Use Cases

### Exporting Filtered Data

Export only the data that matches current filter criteria:

```html
<template>
  <Grid
    :data-items="filteredData"
    :csv="csvOptions"
    :filterable="true"
    :filter="filter"
    @filterchange="onFilterChange"
  >
    <GridToolbar>
      <GridCsvExportButton />
    </GridToolbar>
    <!-- columns -->
  </Grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { filterBy } from '@progress/kendo-data-query';

const products = ref(productData);
const filter = ref();

const filteredData = computed(() => filterBy(products.value, filter.value));

const csvOptions = computed(() => ({
    data: filteredData.value,
    fileName: 'filtered-products.csv'
}));

const onFilterChange = (e) => {
    filter.value = e.filter;
};
</script>
```

### Exporting Aggregated or Summary Data

Export summarized data instead of raw records:

```ts
const summaryData = products.map((product) => ({
    Category: product.Category.CategoryName,
    TotalValue: product.UnitPrice * product.UnitsInStock,
    Status: product.Discontinued ? 'Discontinued' : 'Active'
}));

const csvOptions = {
    data: summaryData,
    fileName: 'product-summary.csv'
};
```

## DataResult Support

The CSV export automatically handles both plain arrays and DataResult objects (commonly used with server-side operations):

```ts
// Both formats are supported
const dataResult = {
    data: products.slice(0, 20),
    total: products.length
};

const csvOptions = {
    data: dataResult, // Automatically extracts the 'data' array
    fileName: 'export.csv'
};
```

## Suggested Links

-   [CSV Export Basics]({% slug overview_csvexport_grid %})
-   [Customizing Exported Columns]({% slug customcolumns_csvexport_grid %})
-   [Data Transformation]({% slug datatransformation_csvexport_grid %})
-   [Vue Data Grid](slug://overview_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
