---
title: Selection
page_title: Vue Grid Wrapper - Selection - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to enable selection to be able to select single or multiple rows."
slug: selection_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/selection/"
position: 7
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/selection"></WrapperBanner></div>

# Selection

The Kendo UI Grid wrapper for Vue allows the user to select single or multiple rows, and multiple cells, as well as use the checkbox row selection.

For more information on selection, refer to the documentation of the [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/selection).

> To enable selection in the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug selection_grid %}).

## Single-Row Selection

By default, the single-row selection option of the Kendo UI Data Grid wrapper for Vue is disabled. To enable the single-row selection functionality, set the [`:selectable`](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/selectable) option of the Grid to `true`.

The `:selectable` option also accepts the following values:
* `row`
* `cell`
* `multiple row`
* `multiple cell`

{% meta height:360 %}
{% embed_file grid/selection/single/main.vue preview %}
{% embed_file grid/selection/single/main.js %}
{% endmeta %}

## Multiple-Row Selection

The following example demonstrates how to implement the multiple-row selection of the Kendo UI Grid wrapper for Vue.

{% meta height:360 %}
{% embed_file grid/selection/multiple/main.vue preview %}
{% embed_file grid/selection/multiple/main.js %}
{% endmeta %}

## Multiple-Cell Selection

The following example demonstrates how to implement the multiple-cell selection of the Kendo UI Grid wrapper for Vue.

{% meta height:360 %}
{% embed_file grid/selection/cells/main.vue preview %}
{% embed_file grid/selection/cells/main.js %}
{% endmeta %}

## Checkbox Selection

The Kendo UI Data Grid wrapper for Vue provides the [`columns.selectable`](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/columns.selectable) property which enables multiple-row selection through a checkbox column. When enabled, the `selectable` property of a column also renders a checkbox in its header and allows the selection and deselection of all rows on the current page.

{% meta height:360 %}
{% embed_file grid/selection/checkboxes/main.vue preview %}
{% embed_file grid/selection/checkboxes/main.js %}
{% endmeta %}

## Known Limitations

* The built-in checkbox selection, which is enabled through the [`selectable`](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/columns.selectable) option of the column, is not integrated with the selection functionality of the Grid. The features are mutually exclusive and to enable the selection, use either of the two approaches.
* When the Grid is rebound (when paging, filtering, sorting, editing, or virtual scrolling occurs) and if the [`persistSelection`](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/persistselection) property is not enabled, the selection is not persisted. The `persistSelection` option is applicable for row selection only.
* The performance of a selectable Grid which renders hundreds or thousands of items decreases if the page size is large or if paging is not used. This behavior most commonly occurs in Internet Explorer. Grouping, hierarchy, and frozen columns also have a negative impact on the selection performance because grouping, hierarchy, and frozen columns make the HTML output of the Grid more complex. To work around such issues, use paging with a reasonable page size.

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Selection in the Native Vue Grid by Kendo UI]({% slug selection_grid %})
