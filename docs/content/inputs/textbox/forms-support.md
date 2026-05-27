---
title: Forms Support
description: "Integrate the Kendo UI for Vue Form with the Kendo UI for Vue TextBox component."
slug: forms_support_textbox
position: 6
---

# Forms Support

The `TextBox` component can be easily integrated with our [Kendo UI for Vue Native Form]({% slug overview_form %}) component.
The form enables you to validate the TextBox and prevent the submission of the forms which are in an invalid state.

By utilizing the Kendo UI for Vue Form component we can take advantage of the [Validation]({% slug validation_form %}) functionality and render additional custom component depending on the form's validity state.

{% meta height:280 %}
{% embed_file textbox/forms-support/main.vue preview %}
{% embed_file textbox/forms-support/main.js %}
{% embed_file textbox/forms-support/FormContent.vue %}
{% embed_file textbox/forms-support/FormTextBox.vue %}
{% embed_file textbox/forms-support/validators.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the TextBox Props]({% slug api_inputs_textboxprops %})
- [API Reference of the Form Component]({% slug api_form_formprops %})
