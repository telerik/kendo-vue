---
title: Selection
description: "Get started with the Kendo UI for Vue Native ListBox selection feature and learn how to setup single or multiple selection."
slug: selection_listbox
position: 2
---

# Selection

The Kendo UI for Vue Native ListBox enables the user to select a single or multiple items.

## Setup

The selection requires defining the [selectedField prop]({% slug api_listbox_listboxprops %}#toc-selectedfield). The value of the `selectedField` prop will determine if the item will be selected.

The selected information is also used to transfer items between multiple lists.

## Basic Usage

The following example demonstrates how to setup the selection in the ListBox.



{% meta height:580 %}
{% embed_file selection/main.vue preview %}
{% embed_file selection/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the ListBox]({% slug api_listbox_listboxprops %})
