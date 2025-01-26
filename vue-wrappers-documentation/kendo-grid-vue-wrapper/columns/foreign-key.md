---
title: Foreign-Key Columns
page_title: Vue Grid Wrapper - Foreign-Key Columns - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to implement a foreign-key column."
slug: foreignkeycolumns_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/"
position: 6
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid"></WrapperBanner></div>

# Foreign-Key Columns

You can implement a foreign-key column in the Kendo UI Grid wrapper for Vue.

The following example demonstrates how to define a foreign-key column through the `CategoryID` key field which hosts a custom DropDownList editor for data editing. Use the column definition to set the key field as `field` property. The `values` property points to the source data for the items displayed in the drop-down list editor of that column. The values of the editor items have to be of the same type as the key field.

{% meta height:360 %}
{% embed_file grid/columns/foreign/main.vue preview %}
{% embed_file grid/columns/foreign/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
