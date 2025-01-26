---
title: Filtering
page_title: Vue Grid Wrapper - Filtering - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to configure its filtering functionality."
slug: filtering_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/filtering/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/filtering"></WrapperBanner></div>

# Filtering

The Kendo UI Grid wrapper for Vue provides options for filtering the data it displays.

> To configure the filtering functionality of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug filtering_grid %}).

## Filter Row

You can enable the filter row in the header of the Grid by setting `filterable-mode` property to `row`. As a result and based on the data type of the underlying column data, the Grid renders textboxes for string values or numeric inputs, or date pickers in the column headers for data filtering.

To specify the default filter operator which will be applied when the user enters a value in the filter textbox and presses `Enter` or `Tab` on the keyboard, set the `filterable-cell` attribute of the corresponding column to `operator`.

{% meta height:660 %}
{% embed_file grid/filtering/row/main.vue preview %}
{% embed_file grid/filtering/row/main.js %}
{% endmeta %}

## Filter Checkboxes

You can enable the checkbox filtering in the filter menu by setting `filterable-multi` to `true` for the desired Kendo UI Data Grid wrapper for Vue columns.

You can also combine the checkbox filter with the `itemTemplate` definition as demonstrated with the **Country** column in the second Grid in the following example. In this way, you can customize the items with checkboxes which will be visualized and available for selection to the end user.

The following example demonstrates how to set the client operations.

{% meta height:660 %}
{% embed_file grid/filtering/checkboxes/main.vue preview %}
{% embed_file grid/filtering/checkboxes/main.js %}
{% endmeta %}

The following example demonstrates how to set the server operations.

{% meta height:660 %}
{% embed_file grid/filtering/server/main.vue preview %}
{% embed_file grid/filtering/server/main.js %}
{% endmeta %}

## Filter Menu Customization

The following example demonstrates how to apply common settings to the filter menu of the Kendo UI Grid wrapper for Vue and customize its UI per column by using the exposed API for the column menu.

The implementation:
* Specifies a single-filter criterion by using the `filterable-extra=false` setting.
* Limits the filter operators for string columns to `starts with`, `equal`, and `not equal`.
* Defines the UI of the built-in date picker to filter the **DateTime** column of the Grid.
* Instantiates the Kendo UI DropDownList for the **Category** column. To create the drop-down filter, assign a JavaScript function to the `filterable->ui` property of the corresponding column.

{% meta height:460 %}
{% embed_file grid/filtering/custom/main.vue preview %}
{% embed_file grid/filtering/custom/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Filtering in the Native Vue Grid by Kendo UI]({% slug filtering_grid %})
