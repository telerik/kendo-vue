---
title: Styling
description: "Get started with the Kendo UI for Vue Native Grid which supports the styling of columns, rows, and cells."
slug: styling_grid
position: 10
---

# Styling

[The Kendo UI for Vue Native Grid]({% slug overview_grid %}) enables you to style its columns, rows, and cells.

<div data-component="StartFreeTrialSection"></div>

## Columns

To style the columns of the Grid, either:
* [Add custom cells for columns](#toc-adding-custom-cells), or
* [Add class names for `td` elements](#toc-adding-class-names).

### Adding Custom Cells

Adding a custom [`cell`]({% slug api_grid_gridcolumnprops %}#toc-cell) for the Grid columns allows you to change the appearance of that cell based on the provided value. By using the custom-cell approach, you can include icons, buttons, links, or any other HTML elements in the cell.

{% meta height:340 %}
{% embed_file styling/styling-cell/main.vue preview %}
{% embed_file styling/styling-cell/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

### Adding Custom Header Cells

Adding a custom [`headerCell`]({% slug api_grid_gridcolumnprops %}#toc-headercell) for the column header of the Grid allows you to change the appearance and to include icons, buttons, links, or any other HTML elements in that header.

{% meta height:330 %}
{% embed_file styling/styling-header-cell/main.vue preview %}
{% embed_file styling/styling-header-cell/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

### Adding Class Names

The [`className`]({% slug api_grid_gridcolumnprops %}#toc-className) property applies additional class to the `td` element and can be used for styling the background, text color, text alignment, and other styling options of the Grid.

```jsx-no-run
    { field: 'ProductName', title: 'Product Name', className: "product-name " },
```

```css
    .product-name {
        color: #F0FFFF;
        background-color: #888888;
    }
```

{% meta height:330 %}
{% embed_file styling/styling-class-name/main.vue preview %}
{% embed_file styling/styling-class-name/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

## Rows

To style the rows of the Grid, use the [`rowRender`]({% slug api_grid_gridprops %}#toc-rowrender) function. `rowRender` allows you to modify the appearance of the rows based on the provided values.

{% meta height:500 %}
{% embed_file styling/styling-row/main.vue preview %}
{% embed_file styling/styling-row/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

## Individual Elements

You can individually style the elements of the Grid by using CSS.

> The Grid provides multiple elements that can be individually styled. Before you apply the styling options to the desired elements, inspect the element and use selectors of higher priority.

### Filter Icons

The following example demonstrates how to style the appearance of the filter icon in the Grid.

```css-no-run
    .k-dropdown-wrap>.k-select>.k-i-filter {
        color: white
    }
```

### Sort Icons

The following example demonstrates how to style the appearance of the sort ascending-order icon in the Grid.

```css-no-run
    .k-header>.k-link>.k-i-sort-asc-sm {
        color: red
    }
```

### Page Numbers

The following example demonstrates how to style the appearance of the page numbers in the Grid.

```css-no-run
    .k-pager-numbers .k-link, .k-pager-numbers .k-link:link {
        color: black;
    }
```

## Conditional Styling

You can use the custom-cell approach of the Grid to change the appearance of the cells on condition and based on the provided value.

{% meta height:270 %}
{% embed_file styling/styling-dynamic/main.vue preview %}
{% embed_file styling/styling-dynamic/main.js %}
{% endmeta %}

## Suggested Links

* [GridProps]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
