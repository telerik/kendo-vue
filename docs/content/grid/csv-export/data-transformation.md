---
title: Data Transformation
description: "Learn how to transform and manipulate Grid data before exporting to CSV using the onCsvexport callback."
slug: datatransformation_csvexport_grid
position: 30
---

# Data Transformation with onCsvexport

The [`onCsvexport`]({% slug api_grid_gridprops %}#toc-oncsvexport) callback allows you to transform, filter, or enhance the data before it is exported to CSV. This is useful for formatting values, adding computed fields, filtering records, or applying business logic to the export data.

<div data-component="StartFreeTrialSection"></div>

## Basic Data Transformation

The `onCsvexport` callback receives the data array and must return a modified array:

<demo metaUrl="grid/csv-export/filter-transform/" height="520"></demo>

In this example, the callback filters out discontinued products and formats the price and stock values before export.

## Common Transformation Scenarios

### Adding Computed Fields

Add calculated or derived fields to the exported data:

```html
<template>
  <Grid :data-items="products" :csv="true" :on-csvexport="handleCsvExport">
    <GridToolbar>
      <GridCsvExportButton />
    </GridToolbar>
    <!-- columns -->
  </Grid>
</template>

<script setup lang="ts">
const handleCsvExport = (data) => {
    return data.map((product) => ({
        ...product,
        TotalValue: product.UnitPrice * product.UnitsInStock,
        PriceCategory: product.UnitPrice > 50 ? 'Premium' : 'Standard',
        ExportedAt: new Date().toISOString()
    }));
};
</script>
```

### Formatting Date Values

Format date objects into readable strings:

```ts
const handleCsvExport = (data) => {
    return data.map((order) => ({
        ...order,
        OrderDate: order.OrderDate.toLocaleDateString('en-US'),
        ShippedDate: order.ShippedDate ? order.ShippedDate.toLocaleDateString('en-US') : 'Not Shipped'
    }));
};
```

### Filtering Records

Export only records that meet specific criteria:

```ts
const handleCsvExport = (data) => {
    // Export only active products with stock
    return data.filter((product) => !product.Discontinued && product.UnitsInStock > 0);
};
```

### Flattening Nested Objects

Transform nested objects into flat structure:

```ts
const handleCsvExport = (data) => {
    return data.map((product) => ({
        ProductID: product.ProductID,
        ProductName: product.ProductName,
        CategoryName: product.Category?.CategoryName || 'N/A',
        CategoryDescription: product.Category?.Description || '',
        SupplierName: product.Supplier?.CompanyName || 'N/A',
        UnitPrice: product.UnitPrice,
        UnitsInStock: product.UnitsInStock
    }));
};
```

### Applying Business Rules

Apply complex business logic or calculations:

```ts
const handleCsvExport = (data) => {
    return data.map((product) => {
        const stockStatus =
            product.UnitsInStock === 0 ? 'Out of Stock' : product.UnitsInStock < 10 ? 'Low Stock' : 'In Stock';

        const discount = product.UnitPrice > 100 ? 0.1 : 0;
        const discountedPrice = product.UnitPrice * (1 - discount);

        return {
            ...product,
            StockStatus: stockStatus,
            DiscountedPrice: discountedPrice.toFixed(2),
            HasDiscount: discount > 0 ? 'Yes' : 'No'
        };
    });
};
```

## Combining with Custom Column Selection

You can combine data transformation with custom column selection:

```html
<template>
  <Grid :data-items="products" :csv="csvOptions" :on-csvexport="handleCsvExport">
    <GridToolbar>
      <GridCsvExportButton />
    </GridToolbar>
    <!-- columns -->
  </Grid>
</template>

<script setup lang="ts">
const handleCsvExport = (data) => {
    return data
        .filter((p) => !p.Discontinued)
        .map((p) => ({
            ...p,
            FormattedPrice: `$${p.UnitPrice.toFixed(2)}`
        }));
};

const csvOptions = {
    keys: ['ProductID', 'ProductName', 'FormattedPrice', 'UnitsInStock'],
    names: ['ID', 'Product', 'Price', 'Stock'],
    fileName: 'active-products.csv'
};
</script>
```

## Working with Large Datasets

For large datasets, consider performance optimization:

```ts
const handleCsvExport = (data) => {
    // Limit export size if needed
    const maxRows = 10000;
    const limitedData = data.slice(0, maxRows);

    return limitedData.map((item) => ({
        // Only include necessary fields
        id: item.id,
        name: item.name,
        value: item.value
    }));
};
```

## Suggested Links

-   [CSV Export Basics]({% slug overview_csvexport_grid %})
-   [Customizing Exported Columns]({% slug customcolumns_csvexport_grid %})
-   [Exporting Custom Data]({% slug customdata_csvexport_grid %})
-   [Formula Injection Protection]({% slug formulainjection_csvexport_grid %})
-   [Vue Data Grid](slug://overview_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
