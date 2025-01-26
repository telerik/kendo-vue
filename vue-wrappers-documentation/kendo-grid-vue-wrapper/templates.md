---
title: Templates
page_title: Vue Grid Wrapper - Templates - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to define its templates options."
slug: templates_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/custom-rendering/custom-cells/"
position: 11
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/custom-rendering/custom-cells"></WrapperBanner></div>

# Templates

The Kendo UI Grid wrapper for Vue allows you to use templates for flexible customization of row and toolbar layout and appearance.

> To use the custom templates which the native Vue Grid by Kendo UI supports, refer to the [native Vue Grid by Kendo UI documentation]({% slug custom_cells_grid %}).

## Toolbar Template

You can define a template for the content of the toolbar of the Grid which can vary based on specific requirements.

The following example demonstrates how to implement a toolbar template which incorporates a DropDownList for the records that are sorted by category. The drop-down list is populated with the list of categories and the filter is applied on its `change` event by invoking the `grid.dataSource.filter(params)` method from the API.

{% meta height:660 %}
{% embed_file grid/templates/toolbar/main.vue preview %}
{% embed_file grid/templates/toolbar/main.js %}
{% endmeta %}

## Row Template

The following example demonstrates how to specify custom layout for the rows of the Kendo UI Data Grid wrapper for Vue by using property bindings from its underlying data source. The row templates are defined through script tags with ids which are associated with the rendered `table` HTML row elements. The example instantiates the `row` and `altrow` templates by calling the `kendo.template` method and assigning the returned value to the `rowTemplate` and `altRowTemplate` properties of the Grid instance.

{% meta height:660 %}
{% embed_file grid/templates/row/main.vue preview %}
{% embed_file grid/templates/row/main.js %}
{% embed_file grid/templates/row/styles.css %}
{% endmeta %}

## Master-Detail Template

The Kendo UI Grid wrapper for Vue provides options for visualizing the relations between its parent and child records by displaying the table data in a hierarchical order.

{% meta height:660 %}
{% embed_file grid/templates/master/main.vue preview %}
{% embed_file grid/templates/master/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Custom Templates in the Native Vue Grid by Kendo UI]({% slug custom_cells_grid %})
