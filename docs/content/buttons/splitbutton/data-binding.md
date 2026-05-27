---
title: Data Binding
description: "Bind the Kendo UI for Vue SplitButton to data in Vue projects."
slug: binding_splitbutton
position: 5
---

# Data Binding

The SplitButton enables you to bind it to [array of strings](#toc-arrays-of-strings), [an array of objects](#toc-arrays-of-objects), or [`SpllitButtonItem` child components](#toc-child-components).

## Arrays of Strings

The following example demonstrates how to bind the SplitButton to an array of strings.



{% meta height:170 %}
{% embed_file splitbutton/data-binding/strings/main.vue preview %}
{% embed_file splitbutton/data-binding/strings/main.js %}
{% endmeta %}


## Arrays of Objects

When the SplitButton is bound to an array of objects, the component extracts the text value from the data items and, in this way, sets the text of the items in the popup. If the text field in the data objects is named `text`, the component gets its value automatically. However, if the name of the property in the data source is different&mdash;for example, `actionText`&mdash;you have to set it to the [`textField`]({% slug api_buttons_splitbuttonprops %}#toc-textfield) property of the SplitButton.

For a list of all fields the items model uses, refer to the article on the [`ButtonItem`]({% slug api_buttons_buttonitemprops %}) configuration.

{% meta %}
{% embed_file splitbutton/data-binding/objects/main.vue preview %}
{% embed_file splitbutton/data-binding/objects/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the SplitButton]({% slug api_buttons_splitbuttonprops %})
* [API Reference of the SplitButtonItem]({% slug api_buttons_splitbuttonprops %})
