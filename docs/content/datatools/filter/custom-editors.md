---
title: Custom editors
page_title: Kendo UI for Vue Filter Component Custom Editors | Kendo UI for Vue Native
description: 'Get started with the Kendo UI for Vue Native Filter and understand how to use custom filter editors.'
slug: filter_custom_editors
position: 2
---

# Custom Editors

The `Filter` provides an option to define the way each filter parameter will be passed to the component. With this functionality, the value of a text field, for example, can be entered through an Input element or selected from a DropDownList, ComboBox, or other Kendo UI for Vue Native component.

## Built-in Editors

The `@progress/kendo-vue-data-tools` package provides a number of built-in filters that can be used as custom editors for the different `Filter` fields. Here is a list of the built-in filters.

- [`BooleanFilter`]({% slug api_data-tools_booleanfilterprops %})
- [`DateFilter`]({% slug api_data-tools_datefilterprops %})
- [`EnumFilter`]({% slug api_data-tools_enumfilterprops %})
- [`NumericFilter`]({% slug api_data-tools_numericfilterprops %})
- [`TextFilter`]({% slug api_data-tools_textfilterprops %})

{% meta height:860 %}
{% embed_file filter/custom-editors/built-in/main.vue preview %}
{% embed_file filter/custom-editors/built-in/CustomEnumFilter.vue %}
{% embed_file filter/custom-editors/built-in/main.js %}
{% embed_file filter/custom-editors/built-in/products.js %}
{% endmeta %}

## Custom Component Editors

The below example demonstrates how we can use the [ComboBox]({% slug overview_combobox %}) and [DropDownList]({% slug overview_dropdownlist %}) components as custom field editors in the `Filter` component. The example uses the [filterRender](slug:api_data-tools_fieldsettings#toc-filterrender) property of the [FieldSettings](slug:api_data-tools_fieldsettings).

{% meta height:860 %}
{% embed_file filter/custom-editors/custom-component/main.vue preview %}
{% embed_file filter/custom-editors/custom-component/CustomComboBoxFilter.vue %}
{% embed_file filter/custom-editors/custom-component/CustomDropDownListFilter.vue %}
{% embed_file filter/custom-editors/custom-component/main.js %}
{% embed_file filter/custom-editors/custom-component/products.js %}
{% endmeta %}

Add filter expression and see that editor of the `Product Name` field is a DropDownList and the editor of the `Quantity Per Unit` field is a ComboBox.

## Suggested Links

- [API Reference of the Filter Props]({% slug api_data-tools_filterprops %})
