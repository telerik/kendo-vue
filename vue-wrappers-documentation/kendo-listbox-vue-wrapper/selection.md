---
title: Selection
page_title: Selection - ListBox - Kendo UI for Vue
description: "Get started with the selection functionality of the Kendo UI ListBox wrapper in Vue projects."
slug: selection_listbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/listbox/selection"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/listbox/selection"></WrapperBanner></div>    

# Selection

The ListBox allows the user to select single or multiple items.

## Basic Configuration

By default, the single selection option of the ListBox is enabled. To configure the multiple selection mode, add `selectable: "multiple"` to its settings. When selected, multiple items move together so that the selected items are transferred to another Kendo UI ListBox together or reordered as a set among other items.

{% meta height:550 %}
{% embed_file selection/basic/main.vue preview %}
{% embed_file selection/basic/main.js %}
{% endmeta %}

## Reordering of Selected Items

You can reorder selected items by using any of the following approaches:

* The `moveUp` and `moveDown` command buttons of the toolbar.
* The drag-and-drop functionality if the widget is `draggable`.
* The `Ctrl` & `Shift` with &darr;, or the `Ctrl` & `Shift` with &uarr; keyboard combination.

> Currently, multiple selected items cannot be dragged and dropped.

{% meta height:550 %}
{% embed_file selection/reordering/main.vue preview %}
{% embed_file selection/reordering/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI ListBox for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox)
* [API Reference of the ListBox](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox)
