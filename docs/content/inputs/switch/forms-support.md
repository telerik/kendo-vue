---
title: Forms support
description: "Use the native HTML5 forms implementation of the Kendo UI for Vue Switch component in Vue projects."
slug: forms_support_switch
position: 8
---

# Forms Support

The Switch component can be easily integrated with [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) as well as [Kendo UI for Vue Native Form]({% slug overview_form %}) (or other third-party solutions).

The forms supports enables you to validate switch values and prevent the submission of forms which are in an invalid state.

> In addition to the exposed form support settings, the [Switch]({% slug api_inputs_switchprops %}) provides the same properties and behaves in the same way as a native HTML [`input[type=checkbox]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) element.

## Functionality and Features

* [Support for Kendo UI for Vue Native Form and Setting Custom Behavior](#toc-support-for-kendovue-form)
* [Setting Validation Requirements](#toc-setting-validation-requirements)
* [Setting Custom Validation Messages](#toc-setting-custom-validation-messages)

### Support for Kendo UI for Vue Form and Setting Custom Behavior
The Kendo UI for Vue Native Form component [integrates with all Kendo UI for Vue Native components](https://www.telerik.com/kendo-vue-ui/components/form/custom-components/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required custom switch.



{% meta height:500 %}
{% embed_file switch/forms-support/overview/main.vue preview %}
{% embed_file switch/forms-support/overview/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormSwitch.vue %}
{% embed_file switch/forms-support/overview/main.js %}
{% endmeta %}



### Setting Validation Requirements

The Switch supports props for setting basic validation requirements. For example, the [`required`]({% slug api_inputs_switchprops %}#toc-required) property which enables the successful form submission.



{% meta height:400 %}
{% embed_file switch/forms-support/form-required/main.vue preview %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormSwitch.vue %}
{% embed_file switch/forms-support/form-required/FormContent.vue %}
{% embed_file switch/forms-support/form-required/main.js %}
{% endmeta %}



### Setting Custom Validation Messages

You can implement custom error messages which will be displayed if the Switch is not turned on and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_inputs_switchprops %}#toc-validationmessage) prop.



{% meta height:530 %}
{% embed_file switch/forms-support/custom-message/main.vue preview %}
{% embed_file switch/forms-support/custom-message/FormContent.vue %}
{% embed_file switch/forms-support/custom-message/FormInput.vue %}
{% embed_file switch/forms-support/custom-message/FormSwitch.vue %}
{% embed_file switch/forms-support/custom-message/main.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the Switch Props]({% slug api_inputs_switchprops %})
