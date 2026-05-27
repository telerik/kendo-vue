---
title: Advanced Scenarios
description: "Get started with the Kendo UI for Vue Native Form component and use its configuration options to implement advanced use-case scenarios."
slug: common_scenarios_form
position: 3
---

# Advanced Scenarios

The Kendo UI for Vue Native Form enables you to implement advanced use-case scenarios by using the [KendoForm Injected Property]({% slug api_form_fieldinjectedprops %}) that must be injected in the custom component.

- [Reading the Field State](#reading-the-field-state)
- [Changing the Field Value](#changing-the-field-value)

## Reading the Field State

You can read the field state without using the Kendo UI for Vue Field component by utilizing the [`valueGetter`]({% slug api_form_fieldinjectedprops %}#toc-valuegetter) function in the [KendoForm Injected Property]({% slug api_form_fieldinjectedprops %}).

{% meta height:350 %}
{% embed_file advanced/reading/main.vue preview %}
{% embed_file advanced/reading/FormContent.vue %}
{% embed_file shared/FormNumericTextBox.vue %}
{% embed_file advanced/reading/main.js %}
{% endmeta %}

## Changing the Field Value

You can emit the field changes without using the Kendo UI for Vue Field component by utilizing the [`onChange`]({% slug api_form_fieldinjectedprops %}#toc-onchange) callback in the [KendoForm Injected Property]({% slug api_form_fieldinjectedprops %}).

{% meta height:280 %}
{% embed_file advanced/changing/main.vue preview %}
{% embed_file advanced/changing/FormContent.vue %}
{% embed_file shared/FormNumericTextBox.vue %}
{% embed_file advanced/changing/main.js %}
{% endmeta %}

## Resetting the Form Initial State

You can dynamically reset (update) the Form initial value, by setting a key to the Form component and updating it.

This is very useful when we have to dynamically populate the Form with a new information.

In the following example we will dynamically load a new user information.

{% meta height:460 %}
{% embed_file advanced/dynamic-reset/main.vue preview %}
{% embed_file advanced/dynamic-reset/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file advanced/dynamic-reset/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Form]({% slug api_form_formprops %})
