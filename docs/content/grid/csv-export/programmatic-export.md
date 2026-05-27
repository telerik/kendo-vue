---
title: Programmatic Export
description: "Learn how to programmatically export CSV data using the Grid ref methods exportAsCsv and getCsvBlob."
slug: programmaticexport_csvexport_grid
position: 35
---

# Programmatic CSV Export

The Kendo UI for Vue Data Grid provides programmatic methods via the Grid ref to export CSV data without using the built-in `GridCsvExportButton` component. This enables custom export workflows such as uploading to a server or previewing the data before download.

<div data-component="StartFreeTrialSection"></div>

## Grid Ref Methods

The Grid exposes two CSV-related methods through its ref:

| Method           | Returns         | Description                                                                            |
| ---------------- | --------------- | -------------------------------------------------------------------------------------- |
| `exportAsCsv()`  | `void`          | Triggers a CSV file download                                                           |
| `getCsvBlob()`   | `Blob \| null`  | Returns the CSV data as a Blob for custom handling                                     |

## Usage Example

The following example demonstrates both methods:

-   **Download CSV** - Uses `exportAsCsv()` to trigger an immediate file download
-   **Upload to Server** - Uses `getCsvBlob()` to get the Blob for custom upload logic
-   **Preview CSV** - Uses `getCsvBlob()` to read and display the CSV content

<demo metaUrl="grid/csv-export/programmatic-export/" height="480"></demo>

## Suggested Links

-   [CSV Export Basics]({% slug overview_csvexport_grid %})
-   [Exporting Grouped Data]({% slug groupeddata_csvexport_grid %})
-   [Data Transformation]({% slug datatransformation_csvexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
