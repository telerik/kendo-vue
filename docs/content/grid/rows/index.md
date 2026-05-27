---
title: Sticky Rows
page_title: Kendo UI for Vue Native Grid - Sticky Rows
description: "Learn how to implement the sticky rows functionality in the Kendo UI for Vue Native Grid. Make selected rows constantly visible when scrolling the Grid records."
slug: sticky_rows_grid
position: 10
---

# Sticky Rows

The sticky rows are constantly visible while the users scroll the Kendo UI for Vue Native Grid vertically. These rows are scrollable like the regular rows but based on the users' interaction with the Grid they are stacked on at the top or bottom of the component, without leaving the viewport. 

## Basic usage

The following example shows how we can implement the sticky rows in the Kendo UI for Vue Native Grid. 

{% meta height:500 %}
{% embed_file rows/sticky/main.vue preview %}
{% embed_file rows/sticky/main.js %}
{% embed_file rows/sticky/products.json %}
{% endmeta %}


## Known Limitations

* The usage of sticky rows is not supported in master-detail Grids.
* Using sticky rows with grouped data is not supported.
* Using sticky rows with Grid's virtual scrolling functionality is not supported.
* The sticky rows functionality is not supported in Internet Explorer. The functionality relies on the setting of the [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property of the internal table elements to `sticky`. [Internet Explorer does not provide support for this feature](https://developer.mozilla.org/en-US/docs/Web/CSS/position#browser_compatibility).

## Suggested Links

* [Grid Locked Columns]({% slug locked_columns_grid %})
* [API Index of the Grid]({% slug api_grid %})
