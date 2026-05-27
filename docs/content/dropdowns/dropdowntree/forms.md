---
title: Forms Support
description: "Use the native HTML5 forms implementation of the Kendo UI for Vue DropDownTree component in Vue projects."
slug: forms_dropdowntree
position: 40
---

# Forms Support

The DropDownTree supports a native Kendo UI for Vue implementation of [HTML5 form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

The forms support enables you to validate input values and prevent the submission of forms which are in an invalid state.

<div data-component="StartFreeTrialSection"></div>

## Functionality and Features

* [Settings minimum validation requirements](#toc-setting-validation-requirements)
* [Setting custom validation messages](#toc-setting-custom-validation-messages)
* [Overriding the validity state](#toc-enforcing-the-validity-state)
* [Disabling the visual representation of the validity state](#toc-disabling-the-validation-styling)

### Setting Validation Requirements

The DropDownTree supports props for setting basic validation requirements. The [`required`]({% slug api_dropdowns_dropdowntreeprops %}#toc-required) property enables the user to pre-define a selection that is required for a successful form submission.



{% meta height:400 %}
{% embed_file dropdowntree/form/basic/main.vue preview %}
{% embed_file dropdowntree/form/basic/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the DropDownTree is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_dropdowns_dropdowntreeprops %}#toc-validationMessage) prop.



{% meta height:400 %}
{% embed_file dropdowntree/form/custom-message/main.vue preview %}
{% embed_file dropdowntree/form/custom-message/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


### Enforcing the Validity State

The DropDownTree enables you to set its validity state by utilizing its exposed props. Setting the validity state allows for the implementation of complex validation scenarios. To override the current validity state and apply the corresponding styles, use the [`valid`]({% slug api_dropdowns_dropdowntreeprops %}#toc-valid) prop.



{% meta height:400 %}
{% embed_file dropdowntree/form/override/main.vue preview %}
{% embed_file dropdowntree/form/override/main.js preview %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the DropDownTree applies the `k-invalid` class name to the wrapping component. To disable the utilization of `k-invalid`, set the [`validityStyles`]({% slug api_dropdowns_dropdowntreeprops %}#toc-validityStyles) property to `false`.



{% meta height:400 %}
{% embed_file dropdowntree/form/disabled-styles/main.vue preview %}
{% embed_file dropdowntree/form/disabled-styles/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DropDownTree Props]({% slug api_dropdowns_dropdowntreeprops %})
