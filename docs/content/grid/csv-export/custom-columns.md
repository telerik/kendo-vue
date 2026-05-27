---
title: Customizing Exported Columns
description: "Learn how to customize which columns are exported and their header names in CSV exports from the Kendo UI for Vue Data Grid."
slug: customcolumns_csvexport_grid
position: 10
---

# Customizing Exported Columns

The [`csv`]({% slug api_grid_gridprops %}#toc-csv) property allows you to control which columns are exported and customize their header names using the `keys` and `names` options.

<div data-component="StartFreeTrialSection"></div>

## Selecting Specific Columns

Use the `keys` option to specify which data properties to include in the export. This allows you to export only a subset of columns, even if more columns are visible in the Grid.

The `names` option defines the header row text for each exported column.

<demo metaUrl="grid/csv-export/custom-columns/" height="520"></demo>

In this example, only the Product ID, Product Name, and Unit Price columns are exported, even though the Grid displays additional columns like Category, Units in Stock, and Discontinued.

## Working with Nested Properties

The CSV export supports nested object properties using dot notation. This is useful when your data contains complex nested structures:

```html
<template>
  <Grid :data-items="products" :csv="csvOptions">
    <GridToolbar>
      <GridCsvExportButton />
    </GridToolbar>
    <GridColumn :field="'ProductID'" :title="'ID'" />
    <GridColumn :field="'ProductName'" :title="'Product Name'" />
    <GridColumn :field="'Category.CategoryName'" :title="'Category'" />
    <GridColumn :field="'UnitPrice'" :title="'Unit Price'" />
  </Grid>
</template>

<script setup lang="ts">
const csvOptions = {
    keys: ['ProductID', 'ProductName', 'Category.CategoryName', 'UnitPrice'],
    names: ['ID', 'Product', 'Category', 'Price']
};
</script>
```

## Automatic Column Detection

When `keys` and `names` are not specified, the CSV export automatically:

1. Detects visible Grid columns and their `field` properties
2. Uses column `title` properties as header names
3. Excludes hidden columns from the export
4. Supports nested field paths (e.g., "Category.CategoryName")

Example:

```html
<template>
  <!-- Automatically exports all visible columns with their titles -->
  <Grid :data-items="products" :csv="true">
    <GridColumn :field="'ProductID'" :title="'ID'" />
    <GridColumn :field="'ProductName'" :title="'Product Name'" />
    <GridColumn :field="'UnitPrice'" :title="'Price'" />
    <!-- Hidden columns are automatically excluded -->
    <GridColumn :field="'SecretData'" :title="'Secret'" :hidden="true" />
  </Grid>
</template>
```

## Column Order

The order of properties in the `keys` array determines the column order in the exported CSV file:

```ts
const csvOptions = {
    // Export in this specific order
    keys: ['UnitPrice', 'ProductName', 'ProductID'],
    names: ['Price', 'Product', 'ID']
};
```

## Suggested Links

-   [CSV Export Basics]({% slug overview_csvexport_grid %})
-   [Exporting Custom Data]({% slug customdata_csvexport_grid %})
-   [Data Transformation]({% slug datatransformation_csvexport_grid %})
-   [Vue Data Grid](slug://overview_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
