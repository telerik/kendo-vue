---
title: Data Binding
description: "Bind the Kendo UI for Vue DropDownButton to data in Vue projects."
slug: binding_dropdownbutton
position: 5
---

# Data Binding

The DropDownButton enables you to bind it to an [array of strings](#toc-arrays-of-strings), [an array of objects](#toc-arrays-of-objects), or [`DropDownButtonItem` child components](#toc-child-components).

## Arrays of Strings

The following example demonstrates how to bind the DropDownButton to an array of strings.

{% meta height:280 %}
{% embed_file dropdownbutton/data-binding/strings/main.vue preview %}
{% embed_file dropdownbutton/data-binding/strings/main.js %}
{% endmeta %}

## Arrays of Objects

When the DropDownButton is bound to an array of objects, the component extracts the `text` value from the data items and, in this way, sets the text of the items in the popup. If the `text` field in the data objects is named `text`, the component gets its value automatically. However, if the name of the property in the data source is different&mdash;for example, `actionText`&mdash;you have to set it to the [`textField`]({% slug api_buttons_dropdownbuttonprops %}#toc-textfield) property of the DropDownButton.

{% meta height:280 %}
{% embed_file dropdownbutton/data-binding/objects/main.vue preview %}
{% embed_file dropdownbutton/data-binding/objects/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DropDownButton]({% slug api_buttons_dropdownbuttonprops %})
