---
title: Toolbar
description: "Get started with the Kendo UI for Vue Native TreeList and learn how to define and configure its Toolbar."
slug: toolbar_treelist
position: 105
---

# Native TreeList Toolbar

The `Native TreeList` component has the option to visualize a `toolbar` which can be used in custom scenarios like data export, localization changes or something that fits your scenario.

## Getting started

By default, the `toolbar` is not visible. To display it, we have to pass a slot template name to the [toolbar]({% slug api_treelist_treelistprops %}#toc-toolbar) property of the **TreeList**.


## Basic usage

The following example shows how to use the [Kendo UI for Vue Native Button]({% slug overview_buttons %}) and [DropDownList]({% slug overview_dropdownlist %}) to export  the `TreeList` data from the component's toolbar.

{% meta height:600 %}
{% embed_file toolbar/main.vue preview %}
{% embed_file toolbar/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Index of the TreeList]({% slug api_treelist %})
