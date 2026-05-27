---
title: Forms support
description: "Use the native HTML5 forms implementation of the Kendo UI for Vue TextArea component in Vue projects."
slug: forms_support_textarea
position: 75
---

# Forms Support

The TextArea component can be easily integrated with [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) as well as [Kendo UI for Vue Native Form]({% slug overview_form %}) (or other third-party solutions).

The form enables you to validate textarea value and prevent the submission of forms which are in an invalid state.

### Support for Kendo UI for Vue Native Form

The Kendo UI for Vue Native Form component [integrates with all Kendo UI for Vue Form components](https://www.telerik.com/kendo-vue-ui/components/form/guidelines-with-examples/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required TextArea within a Kendo UI for Vue Native Form component.



{% meta height:550 %}
{% embed_file textarea/forms/main.vue preview %}
{% embed_file textarea/forms/FormContent.vue %}
{% embed_file textarea/forms/FormInput.vue %}
{% embed_file textarea/forms/FormTextArea.vue %}
{% embed_file textarea/forms/main.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the TextArea]({% slug api_inputs_textarea %})
* [API Reference of the TextAreaProps]({% slug api_inputs_textareaprops %})

