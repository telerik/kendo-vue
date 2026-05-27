---
title: Selection
description: "Get started with the Vue TreeList by Kendo UI for Vue supporting selection of a single row or multiple rows."
slug: selection_treelist
position: 91
---

# Selection

The TreeList enables the user to select single or multiple cells and rows. It also provides default selection implementation from the `getSelectedState` utility function.

## Getting Started

The TreeList selection can be enabled by:
1. Set the [`selectable`]({% slug api_treelist_treelistprops %}#toc-selectable) option.
1. Set the[`selectedField`]({% slug api_treelist_treelistprops %}#toc-selectedfield) option.
1. Use the [`onSelectionChange`]({% slug api_treelist_treelistselectionchangeevent %}) event.
1. Optionally use the [`getSelectedState`]({% slug api_data-tools_getselectedstate %}) utility function for default selection behavior.

As a result, the TreeList allows you to:
* Select single cell or row
* Select multiple cells or rows
* Select range of cells or rows by dragging

The `selectedField` option represents a field inside the data collection which determines the rows that will render as selected.

{% meta height:570 %}
{% embed_file selection-basic/main.vue preview %}
{% embed_file selection-basic/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
