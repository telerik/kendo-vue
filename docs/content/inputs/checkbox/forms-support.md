---
title: Forms support
description: "Use the native HTML5 forms implementation of the Kendo UI for Vue Native Checkbox component in Vue projects."
slug: forms_support_checkbox
position: 7
---

# Forms Support

The Checkbox component can be easily integrated with [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) as well as [Kendo UI for Vue Form]({% slug overview_form %}) (or other third-party solutions).

The form enables you to validate checkbox values and prevent the submission of forms which are in an invalid state.

> In addition to the exposed form support settings, the [Checkbox]({% slug api_inputs_checkboxprops %}) provides the same properties and behaves in the same way as a native HTML [`input[type=checkbox]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) element.

## Functionality and Features

* [Support for Kendo UI for Vue Form and Setting Custom Behavior](#toc-support-for-kendovue-form)
* [Setting Validation Requirements](#toc-setting-validation-requirements)
* [Setting Custom Validation Messages](#toc-setting-custom-validation-messages)
* [Disabling the Validation Styling](#toc-disabling-the-validation-styling)

### Support for Kendo UI for Vue Form and Setting Custom Behavior
The Kendo UI for Vue Form component [integrates with all Kendo UI for Vue components](https://www.telerik.com/kendo-vue-ui/components/form/custom-components/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required custom checkbox a terms agreement.

{% meta height:430 %}
{% embed_file checkbox/form/kendo-vue-form/main.vue preview %}
{% embed_file checkbox/form/kendo-vue-form/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormCheckbox.vue %}
{% embed_file checkbox/form/kendo-vue-form/main.js %}
{% endmeta %}

### Setting Validation Requirements

The Checkbox supports props for setting basic validation. For example, the [`required`]({% slug api_inputs_checkboxprops %}#toc-required) property which prevents form submission when Checkbox is not checked.

{% meta height:380 %}
{% embed_file checkbox/form/basic/main.vue preview %}
{% embed_file checkbox/form/basic/main.js %}
{% endmeta %}


### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the Checkbox is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_inputs_checkboxprops %}#toc-validationmessage) prop.

{% meta height:450 %}
{% embed_file checkbox/form/custom-message/main.vue preview %}
{% embed_file checkbox/form/custom-message/main.js %}
{% endmeta %}


### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the Checkbox applies the `k-invalid` class name to the wrapping component. To disable the utilization of `k-invalid`, set the [`validityStyles`]({% slug api_inputs_checkboxprops %}#toc-validitystyles) property to `false`.

{% meta height:400 %}
{% embed_file checkbox/form/disable-styles/main.vue preview %}
{% embed_file checkbox/form/disable-styles/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Checkbox Props]({% slug api_inputs_checkboxprops %})
