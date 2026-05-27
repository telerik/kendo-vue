---
title: Forms Support
description: "Use the native HTML5 forms implementation of the Kendo UI for Vue Native Input component in Vue projects."
slug: forms_input
position: 2
---

# Forms Support

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

> In addition to the exposed form support settings, the [Input]({% slug api_inputs %}) provides the same properties and behaves in the same way as a native HTML [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element.

## Functionality and Features

* [Settings minimum validation requirements](#toc-setting-validation-requirements)
* [Setting custom validation messages](#toc-setting-custom-validation-messages)
* [Overriding the validity state](#toc-enforcing-the-validity-state)
* [Disabling the visual representation of the validity state](#toc-disabling-the-validation-styling)

### Setting Validation Requirements

The Input supports props for setting basic validation requirements&mdash;for example, the minimum and maximum length. The [`minlength`]({% slug api_inputs_inputprops %}#toc-minlength), [`maxlength`]({% slug api_inputs_inputprops %}#toc-maxlength), and [`required`]({% slug api_inputs_inputprops %}#toc-required) properties enable the user to pre-define minimum requirements which define the validity state of the component and allow a successful form submission.

{% meta height:450 %}
{% embed_file input/forms/basic/main.vue preview %}
{% embed_file input/forms/basic/main.js %}
{% endmeta %}

### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the Input is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_inputs_inputprops %}#toc-validationmessage) prop.

{% meta height:450 %}
{% embed_file input/forms/custom-message/main.vue preview  %}
{% embed_file input/forms/custom-message/main.js %}
{% endmeta %}

### Enforcing the Validity State

The Input enables you to set its validity state by utilizing its props. Setting the validity state allows for the implementation of complex validation scenarios that are based on multiple sources. To override the current validity state and apply the corresponding styles, use the [`valid`]({% slug api_inputs_inputprops %}#toc-valid) prop.

{% meta height:450 %}
{% embed_file input/forms/override/main.vue preview %}
{% embed_file input/forms/override/main.js %}
{% endmeta %}

### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the Input applies the `k-invalid` class name to the wrapping component. To disable the `k-invalid`, set the [`validity-styles`]({% slug api_inputs_inputprops %}#toc-validitystyles) property to `false`.

{% meta height:450 %}
{% embed_file input/forms/disable-styles/main.vue preview %}
{% embed_file input/forms/disable-styles/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Input Props]({% slug api_inputs_inputprops %})
