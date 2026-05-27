---
title: Data and Value Binding
description: "Bind the Kendo UI for Vue Native ComboBox to data and render the selected option in Vue projects."
slug: binding_combobox
position: 20
---

# Data and Value Binding

The Kendo UI for Vue Native ComboBox enables you to configure its predefined list of options and selected value.

To set the predefined option list, use the [`data-items`]({% slug api_dropdowns_comboboxprops %}#toc-dataitems) property. To set the selected value, use the [`value`]({% slug api_dropdowns_comboboxprops %}#toc-value) property.

## Data Binding

To bind the ComboBox to data, use the [`data-items`]({% slug api_dropdowns_comboboxprops %}#toc-dataitems) property of the component.

The `data-items` property accepts both:
* [Arrays of primitive values](#toc-arrays-of-primitive-values) and
* [Datasets of objects](#toc-datasets-of-objects).

### Arrays of Primitive Values

The following example demonstrates how to bind the ComboBox to an array of primitive values.

{% meta height:350 %}
{% embed_file combobox/bindings/arrays/main.vue preview %}
{% embed_file combobox/bindings/arrays/main.js %}
{% endmeta %}

### Datasets of Objects

When you bind the ComboBox to a dataset of objects, the component's value corresponds to the selected object. To implement this approach, set the [textField]({% slug api_dropdowns_comboboxprops %}#toc-textfield) property.

By default, the ComboBox compares the items by reference. To specify a field from the data object which will be used for the comparison, set the [`dataItemKey`]({% slug api_dropdowns_comboboxprops %}#toc-dataitemkey) property. The `dataItemKey` property is useful when the reference to the selected item which is configured in the `value` or `defaultValue` property do not match its corresponding item from the `data` collection. If `dataItemKey` is not set and the references in `data` and `value` do not correspond, the selected item will not be highlighted in the drop-down list.

{% meta height:350 %}
{% embed_file combobox/bindings/datasets/main.vue preview %}
{% embed_file combobox/bindings/datasets/main.js %}
{% endmeta %}

## Value Binding

### Binding to Object Value

If you want to render the selected value you can use `v-model` or to use the [`value`]({% slug api_dropdowns_comboboxprops %}#toc-value) property of the ComboBox. If you set the value through the `value` property, hook up to the [`change`]({% slug api_dropdowns_comboboxprops %}#toc-onchange) event and manually update the value of the `value` property.

In the following example, the `value` of the `ComboBox` is a whole object(`{ text: 'Football', id: 2 }`) that holds the selected data item.

{% meta height:350 %}
{% embed_file combobox/bindings/value/main.vue preview %}
{% embed_file combobox/bindings/value/main.js %}
{% endmeta %}


### Binding to Primitive Values from Object Fields

If the `ComboBox` is bound to a dataset of objects and the [valuePrimitive]({% slug api_dropdowns_comboboxprops %}#toc-valueprimitive) property is set to true, the value of the component will be extracted from the [valueField]({% slug api_dropdowns_comboboxprops %}#toc-valuefield) of the objects.

In the following example, the `value` of the component is "**2**" because its `valueField` prop is set to **id**. In this scenario, the value of the **ComboBox** is associated with this data item: `{ text: 'Football', id: 2 }`.


{% meta height:350 %}
{% embed_file combobox/bindings/value-primitive/main.vue preview %}
{% embed_file combobox/bindings/value-primitive/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
