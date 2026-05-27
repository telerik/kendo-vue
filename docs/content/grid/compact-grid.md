---
title: Compact Grid
description: "Learn how to control and optimize the size and visibility of the Kendo UI for Vue Native Grid component based on device it is loaded"
slug: compact_grid_grid
position: 270
---

# Compact Sizing of the Native Grid (Compact Grid)

The Kendo UI for Vue Native Grid component allows setting its rendering with smaller paddings between its elements. This configuration is suitable in scenarios where the Grid is displayed on a mobile device or when you want to show more data simultaneously.

To configure the Native Grid as a `Compact` one we need to set its [size property](slug:api_grid_gridprops#toc-size) to `small`.

The following example provides a side-by-side comparison between the `Compact Grid` and a Grid with a `Default` sizing. If you check the example's code, you will see that it uses the same Grid component two times. The only difference between the two Grid configurations is the value of the `size` property passed to each of them.

{% meta height:640 %}
{% embed_file compact-grid/main.vue preview %}
{% embed_file compact-grid/GridComponent.vue %}
{% embed_file compact-grid/ChangeComponent.vue %}
{% embed_file compact-grid/ChangePercentageComponent.vue %}
{% embed_file compact-grid/companyData.json %}
{% embed_file compact-grid/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
