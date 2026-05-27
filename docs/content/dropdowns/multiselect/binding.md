---
title: Data and Value Binding
description: "Bind the Kendo UI for Vue Native MultiSelect to data and render the selected option in Vue projects."
slug: binding_multiselect
position: 20
---

# Data and Value Binding

The Kendo UI for Vue Native MultiSelect enables you to configure its predefined list of options and selected values.

To set the predefined option list, use the [`data-items`]({% slug api_dropdowns_multiselectprops %}#toc-dataitems) property. To set the selected values, use the [`value`]({% slug api_dropdowns_multiselectprops %}#toc-value) property.

<div data-component="StartFreeTrialSection"></div>

## Data Binding

To bind the MultiSelect to data, use the [`data-items`]({% slug api_dropdowns_multiselectprops %}#toc-dataitems) property of the component.

The `data-items` property accepts both:
* [Arrays of primitive values](#toc-arrays-of-primitive-values) and
* [Datasets of objects](#toc-datasets-of-objects).

### Arrays of Primitive Values

The following example demonstrates how to bind the MultiSelect to an array of primitive values.

{% meta height:350 %}
{% embed_file multiselect/binding/main.vue preview %}
{% embed_file multiselect/binding/main.js %}
{% endmeta %}

### Datasets of Objects

When you bind the MultiSelect to a dataset of objects, set the [textField]({% slug api_dropdowns_multiselectprops %}#toc-textfield) property, and the component's value will be an array of the selected objects.

By default, the MultiSelect compares the items by reference. To specify a field from the data object which will be used for the comparison, set the [`dataItemKey`]({% slug api_dropdowns_multiselectprops %}#toc-dataitemkey) property. The `dataItemKey` property is useful when the references to the selected items which are configured in the `value` or `defaultValue` property do not match their corresponding items from the `data` collection. If `dataItemKey` is not set and the references in `data` and `value` do not correspond, the selected items will not be highlighted in the drop-down list.

{% meta height:350 %}
{% embed_file multiselect/complex-value/main.vue preview %}
{% embed_file multiselect/complex-value/main.js %}
{% endmeta %}

## Value Binding

### Binding to Object Value

If you want to render the selected value you can use `v-model` or to use the [`value`]({% slug api_dropdowns_multiselectprops %}#toc-value) property of the MultiSelect. If you set the value through the `value` property, hook up to the [`change`]({% slug api_dropdowns_multiselectprops %}#toc-onchange) event and manually update the value of the `value` property.

In the following example, the `value` of the `MultiSelect` is an array of objects(`for example [{ text: 'Football', id: 2 }]`) that holds the selected data item/s.

{% meta height:350 %}
{% embed_file multiselect/controlled/main.vue preview %}
{% embed_file multiselect/controlled/main.js %}
{% endmeta %}


### Binding to Primitive Values from Object Fields

When you bind the MultiSelect to a dataset of objects and set the [valuePrimitive]({% slug api_dropdowns_multiselectprops %}#toc-valueprimitive) property to true, the component will extract its value from the [valueField]({% slug api_dropdowns_multiselectprops %}#toc-valuefield) of the objects.

In the following example, the `value` of the component is "**[2]**" because its `valueField` prop is set to **id**. In this scenario, the value of the **MultiSelect** is associated with this data item: `{ text: 'Football', id: 2 }`.

In the following example, because the valueField prop is set to **id**, the component's value is "**[2]**". This setting associates the **MultiSelect** value with the data item: `{ text: 'Football', id: 2 }`.


{% meta height:350 %}
{% embed_file multiselect/value-primitive/main.vue preview %}
{% embed_file multiselect/value-primitive/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
