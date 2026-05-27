---
title: Data and Value Binding
description: "Bind the Kendo UI for Vue MultiSelectTree to data and render the selected option in Vue projects."
slug: binding_multiselecttree
position: 5
---

# MultiSelectTree Data and Value Binding

The MultiSelectTree enables you to configure its predefined list of options and selected values.

To set the predefined option list, use the [`dataItems`]({% slug api_dropdowns_multiselecttreeprops %}#toc-dataitems) property. To set the selected values, use the [`value`]({% slug api_dropdowns_multiselecttreeprops %}#toc-value) property or use the [v-model directive](https://vuejs.org/guide/components/v-model.html).

<div data-component="StartFreeTrialSection"></div>

## Data Binding

To bind the MultiSelectTree component to data, use the [`dataItems`]({% slug api_dropdowns_multiselecttreeprops %}#toc-dataitems) property that accepts a dataset of objects.

In addition to the `dataItems`, to make the component fully functional, we need to define the following properties:
* [textField]({% slug api_dropdowns_multiselecttreeprops %}#toc-textfield) - Sets the data item field that represents the item text
* [dataItemKey]({% slug api_dropdowns_multiselecttreeprops %}#toc-dataitemkey) - Sets the key for comparing the data items of the MultiSelectTree. If `dataItemKey` is not set, the MultiSelectTree compares the items by reference.
* [checkField]({% slug api_dropdowns_multiselecttreeprops %}#toc-checkfield) - Specifies the name of the field which will provide a Boolean representation of the checked state of the item.
* [checkIndeterminateField]({% slug api_dropdowns_multiselecttreeprops %}#toc-checkindeterminatefield) - Specifies the name of the field which will provide a Boolean representation of the checked indeterminate state of the item.
* [subItemsField]({% slug api_dropdowns_multiselecttreeprops %}#toc-subitemsfield) - Specifies the name of the field which will provide an array representation of the item subitems. Defaults to 'items'.
* [expandField]({% slug api_dropdowns_multiselecttreeprops %}#toc-expandfield) - Specifies the name of the field which will provide a Boolean representation of the expanded state of the item.
* [expandchange]({% slug api_dropdowns_multiselecttreeprops %}#toc-onexpandchange) - An event that fires when expanding or collapsing an item.


{% meta height:400 %}
{% embed_file multiselecttree/binding/main.vue preview %}
{% embed_file multiselecttree/binding/main.js %}
{% endmeta %}

## Value Binding

You can set the value of the MultiSelectTree through the `v-model` directive or by using the [`value`]({% slug api_dropdowns_multiselecttreeprops %}#toc-value) property of the component in a combination with the [`change`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onchange) event. In this scenario, when the `change` event is triggered you should manually update the value of the `value` property.

{% meta height:550 %}
{% embed_file multiselecttree/controlled/main.vue preview %}
{% embed_file multiselecttree/controlled/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
