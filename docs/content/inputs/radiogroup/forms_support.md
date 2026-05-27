---
title: Forms support
description: "Use the native HTML5 forms implementation of the Kendo UI for Vue RadioGroup component in Vue projects."
slug: forms_support_radiogroup
position: 5
---

# Forms Support

The RadioGroup component can be easily integrated with our [Kendo UI for Vue Form]({% slug overview_form %}) as well as the [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (or other third-party solutions).

The form enables you to validate the radio group and prevent the submission of forms which are in an invalid state.


### Support for Kendo UI for Vue Form
The Kendo UI for Vue Form component [integrates with all Kendo UI for Vue components]({% slug custom_components_form %}).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required RadioGroup within a Kendo UI for Vue Form component.

{% meta height:420 %}
{% embed_file radiogroup/forms/main.vue preview %}
{% embed_file radiogroup/forms/FormContent.vue %}
{% embed_file radiogroup/forms/FormInput.vue %}
{% embed_file radiogroup/forms/FormRadioGroup.vue %}
{% embed_file radiogroup/forms/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the RadioGroupProps]({% slug api_inputs_radiogroupprops %})
