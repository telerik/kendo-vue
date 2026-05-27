---
title: Data and Value Binding
description: "Bind the KendoVue DropDownList to data and render the selected option in Vue projects."
slug: binding_dropdownlist
position: 20
---

# Data and Value Binding

The DropDownList enables you to configure the predefined list of options by setting its [`dataItems`]({% slug api_dropdowns_dropdownlistprops %}#toc-dataitems) property and the selected value by setting its [`value`]({% slug api_dropdowns_dropdownlistprops %}#toc-value) property.

## Data Binding

To bind the DropDownList to data, use the [`dataItems`]({% slug api_dropdowns_dropdownlistprops %}#toc-dataitems) property of the component.

The `data-items` property accepts both:
* [Datasets of objects](#toc-datasets-of-objects), and
* [Arrays of primitive values](#toc-arrays-of-primitive-values).

### Datasets of Objects

When you bind the DropDownList to a dataset of objects, the component's value corresponds to the selected object. To implement the approach, set the  [`textField`]({% slug api_dropdowns_dropdownlistprops %}#toc-textfield) property.

By default, the DropDownList compares the items by reference. To specify a field from the data object which will be used for the comparison, use the [`dataItemKey`]({% slug api_dropdowns_dropdownlistprops %}#toc-dataitemkey) property. The `dataItemKey` property is useful when the reference to the selected item which is configured in the `value` or `defaultValue` property do not match its corresponding item from the `data` collection. If `dataItemKey` is not set and the references in `data` and `value` do not correspond, the selected item will not be highlighted in the drop-down list.

{% meta height:350 %}
{% embed_file dropdownlist/binding/main.vue preview %}
{% embed_file dropdownlist/binding/main.js %}
{% endmeta %}

### Arrays of Primitive Values

The following example demonstrates how to bind the DropDownList to an array of primitive values.

{% meta height:350 %}
{% embed_file dropdownlist/primitive-value/main.vue preview %}
{% embed_file dropdownlist/primitive-value/main.js %}
{% endmeta %}

## Value Binding

### Binding to Object Value

If you want to render the selected value you can use `v-model` or to use the [`value`]({% slug api_dropdowns_dropdownlistprops %}#toc-value) property of the DropDownList. If you set the value through the `value` property, hook up to the [`change`]({% slug api_dropdowns_dropdownlistprops %}#toc-onchange) event and manually update the value of the `value` property.

In the following example, the `value` of the `DropDownList` is a whole object(`{ text: 'Football', id: 2 }`) that holds the selected data item.

{% meta height:350 %}
{% embed_file dropdownlist/value-binding/main.vue preview %}
{% embed_file dropdownlist/value-binding/main.js %}
{% endmeta %}


### Binding to Primitive Values from Object Fields

If the `DropDownList` is bound to a dataset of objects and the [valuePrimitive]({% slug api_dropdowns_dropdownlistprops %}#toc-valueprimitive) property is set to true, the value of the component will be extracted from the [valueField]({% slug api_dropdowns_dropdownlistprops %}#toc-valuefield) of the objects.

In the following example, the `value` of the component is "**2**" because its `valueField` prop is set to **id**. In this scenario, the value of the **DropDownList** is associated with this data item: `{ text: 'Football', id: 2 }`.


{% meta height:350 %}
{% embed_file dropdownlist/value-primitive/main.vue preview %}
{% embed_file dropdownlist/value-primitive/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
* [Controlled Components in Vue](https://vuejs.org/docs/forms.html#controlled-components)
