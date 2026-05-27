---
title: Responsive Design
description: "Get started with the Kendo UI for Vue Native Form and use its responsive grid layout support."
slug: responsive_form
position: 10
tag: new
---

# Responsive Design

The Form component and its internal elements support responsive web design by adapting their layout based on the available screen size.

To create a responsive layout, you can pass arrays of values to certain props. Each value in the array corresponds to a specific breakpoint, defined using the [`ResponsiveFormBreakPoint`]({% slug api_form_responsiveformbreakpoint %}) interface.

The following props support responsive arrays:

- **`FormElement` [`cols`]({% slug api_form_formelementprops %}#toc-cols) and [`gutters`]({% slug api_form_formelementprops %}#toc-gutters)**&mdash;Controls the number of columns and spacing of the main form grid at each breakpoint.
- **`FormFieldSet` [`cols`]({% slug api_form_formfieldsetprops %}#toc-cols), [`colSpan`]({% slug api_form_formfieldsetprops %}#toc-colspan), and [`gutters`]({% slug api_form_formfieldsetprops %}#toc-gutters)**&mdash;Controls the internal columns, outer span, and spacing of a fieldset at each breakpoint.
- **`Field` [`colSpan`]({% slug api_form_fieldprops %}#toc-colspan)**&mdash;Controls how many columns each field spans at each breakpoint.

Each breakpoint object has a `minWidth` and an optional `maxWidth` (in pixels) that define when the value applies.

The following example demonstrates how the Form adapts to different screen sizes. Resize the browser window to observe the layout changing.

{% meta height:420 %}
{% embed_file responsive/main.vue preview %}
{% embed_file responsive/FormContent.vue %}
{% embed_file responsive/FormInput.vue %}
{% embed_file responsive/FormMaskedTextBox.vue %}
{% embed_file responsive/FormDropDownList.vue %}
{% embed_file responsive/FormComboBox.vue %}
{% embed_file responsive/FormDatePicker.vue %}
{% embed_file responsive/validators.js %}
{% embed_file responsive/main.js %}
{% endmeta %}

## Suggested Links

* [Layout]({% slug layout_form %})
* [API Reference of the FormElement]({% slug api_form_formelementprops %})
* [API Reference of the FormFieldSet]({% slug api_form_formfieldsetprops %})
* [API Reference of the Field]({% slug api_form_fieldprops %})
