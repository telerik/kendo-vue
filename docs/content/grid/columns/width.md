---
title: Widths
page_title: Vue Grid - Columns Widths - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI and set up the widths of its columns."
slug: columns_width_grid
position: 0
---

# Widths

By default, the Kendo UI for Vue Native Grid is responsive and has no fix width&mdash;the component behaves like a block-level element and expands to a 100% width (the width of the parent element).

As a result, the Grid will resize based on the available space.

## Getting Started

By default, the Grid will equally divide its width between its columns and it will responsively expand or shrink them when the width of its parent container is changed.

Depending on the requirements of your scenario, you can set the widths of the Grid columns by using either of the following specifics in the Grid:

* If all columns have set widths and the sum of these set widths is larger than the width of the Grid, the Grid will display a scrollbar at the bottom of the table. If the sum of all column widths is less than the width of the Grid, the Grid will render a whitespace for the remaining space after the last column.
* If you leave a column that has no fixed width after the columns that have set widths, that column will shrink or expand when the Grid is resized to fill in the remaining space. If the Grid is resized so that it becomes smaller than the sum of all other column widths, the width of the buffer column will become zero and will visually disappear.

## Setting a Minimum Column Width

You can dynamically change the width of the Grid columns and set a minimum width value by subscribing to the `window.resize` event. When the width of the Grid is smaller that the combined minimum width of all columns, a horizontal scrollbar will appear. If the width of the Grid is bigger than the combined minimum width of the Grid columns, the columns will proportionally expand to fill the remaining space.

> The `resize` event does not include debouncing to highlight the main logic. You can debounce it based on the application requirements.

{% meta height:500 %}
{% embed_file columns/widths/minimum-width/main.vue preview %}
{% embed_file columns/widths/minimum-width/main.js %}
{% embed_file columns/widths/minimum-width/products.json %}
{% endmeta %}

## Setting Column Widths in Percentage

### Grid With Fixed Width

The Grid enables you to set its column widths in percentage by using a function that will programmatically calculate the real width based on the passed percentage value.

{% meta height:500 %}
{% embed_file columns/widths/percentage-width/main.vue preview %}
{% embed_file columns/widths/percentage-width/main.js %}
{% embed_file columns/widths/percentage-width/products.json %}
{% endmeta %}

### Grid With No Fixed Width

When the Grid has no width specified and it resizes based on the available space, the width of the column can be set in percentage using CSS.

```css-no-run
    .k-grid-header col:nth-of-type(1){
        width: 20%
    }
    .k-grid-table col:nth-of-type(1){
        width: 20%
    }
```
{% meta height:500 %}
{% embed_file columns/widths/percentage-no-fixed-width/main.vue preview %}
{% embed_file columns/widths/percentage-no-fixed-width/main.js %}
{% embed_file columns/widths/percentage-no-fixed-width/products.json %}
{% endmeta %}

## Fitting Grids on Smaller Screens

To accommodate the Grid on smaller screens, you can programmatically hide columns based on the width of the Grid. To achieve this scenario, subscribe to the `resize` event of the Window and hide a column under a specific width of the Grid.

{% meta height:500 %}
{% embed_file columns/widths/fit-smaller-screens/main.vue preview %}
{% embed_file columns/widths/fit-smaller-screens/main.js %}
{% embed_file columns/widths/fit-smaller-screens/products.json %}
{% endmeta %}

## Suggested Links

* [ColumnComponent]({% slug api_grid_gridcolumnprops %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
