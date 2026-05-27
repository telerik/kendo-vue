---
title: Layout
description: "Get started with the Kendo UI for Vue Native Form and set its layout."
slug: layout_form
position: 7
tag: updated
---

# Layout

The Form component provides comprehensive layout control to create professional, user-friendly forms. You can arrange form fields using a flexible grid system, control spacing, choose label orientations, and organize content with groupings.

## Multi-Column Layout

The column system uses [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) and involves two key properties working together:

- `cols`&mdash;Sets the number of columns in a container (FormElement or FormFieldSet)
- `colSpan`&mdash;Controls how many columns an element spans (FormFieldSet or Field)

The following example demonstrates the column system with Form, FormFieldSet, and Field components working together.

{% meta height:620 %}
{% embed_file layout/multi-col/main.vue preview %}
{% embed_file layout/multi-col/FormContent.vue %}
{% embed_file layout/multi-col/FormInput.vue %}
{% embed_file layout/multi-col/FormMaskedTextBox.vue %}
{% embed_file layout/multi-col/FormDatePicker.vue %}
{% embed_file layout/multi-col/FormNumericTextBox.vue %}
{% embed_file layout/multi-col/FormCheckbox.vue %}
{% embed_file layout/multi-col/FormTextArea.vue %}
{% embed_file layout/multi-col/validators.js %}
{% embed_file layout/multi-col/main.js %}
{% endmeta %}

The column system works hierarchically:

1. [`FormElement`]({% slug api_form_formelementprops %}) level&mdash;The `cols` property defines the main grid structure.
2. [`FormFieldSet`]({% slug api_form_formfieldsetprops %}) level&mdash;Can define its own `cols` (internal columns) and `colSpan` (how many FormElement columns it spans).
3. [`Field`]({% slug api_form_fieldprops %}) level&mdash;Uses `colSpan` to span across columns within its container.

All column-related properties support responsive behavior. For detailed information, see the [Responsive Design]({% slug responsive_form %}) article.

## Setting the Gutters

You can control the space between the form fields using the `gutters` property of [`FormElement`]({% slug api_form_formelementprops %}#toc-gutters) and [`FormFieldSet`]({% slug api_form_formfieldsetprops %}#toc-gutters).

The `gutters` prop accepts:

- A `Gutters` object with `rows` and `cols` keys (e.g. `{ rows: 5, cols: 10 }`)
- A number — applies to both row and column gaps (in pixels)
- A `ResponsiveFormBreakPoint` array for responsive gutters

The following example demonstrates custom gutter configurations.

{% meta height:620 %}
{% embed_file layout/gutters/main.vue preview %}
{% embed_file layout/gutters/FormContent.vue %}
{% embed_file layout/gutters/FormInput.vue %}
{% embed_file layout/gutters/FormMaskedTextBox.vue %}
{% embed_file layout/gutters/FormDatePicker.vue %}
{% embed_file layout/gutters/FormNumericTextBox.vue %}
{% embed_file layout/gutters/FormCheckbox.vue %}
{% embed_file layout/gutters/FormTextArea.vue %}
{% embed_file layout/gutters/validators.js %}
{% embed_file layout/gutters/main.js %}
{% endmeta %}

## Vertical Layout

Vertical layout can be enabled by wrapping the form content inside the `FormElement` component, and each of the editors inside the `FieldWrapper` component. The following example uses the components from the Labels package to enhance the editor with label, error and hint texts.

{% meta height:400 %}
{% embed_file layout/vertical/main.vue preview %}
{% embed_file layout/vertical/FormContent.vue %}
{% embed_file layout/vertical/LabelFormInput.vue %}
{% embed_file layout/vertical/FloatingLabelFormInput.vue %}
{% embed_file layout/vertical/main.js %}
{% endmeta %}

## Horizontal Layout

Horizontal layout can be enabled by using the setup from the vertical layout and setting the [`horizontal`]({% slug api_form_formelementprops %}#toc-horizontal) option of the `FormElement` component to `true`. Additionally, if you use the Label component to label the editor, you need to wrap the editor and error messages in `div` element with `k-form-field-wrap` CSS class.

{% meta height:400 %}
{% embed_file layout/horizontal/main.vue preview %}
{% embed_file layout/horizontal/FormContent.vue %}
{% embed_file layout/horizontal/LabelFormInput.vue %}
{% embed_file layout/horizontal/FloatingLabelFormInput.vue %}
{% embed_file layout/horizontal/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the FormElement]({% slug api_form_formelementprops %})
* [API Reference of the FormFieldSet]({% slug api_form_formfieldsetprops %})
* [Responsive Design]({% slug responsive_form %})
* [Labels package]({% slug overview_labels %})
