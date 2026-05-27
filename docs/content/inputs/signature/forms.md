---
title: Forms Support
description: "Use the native HTML5 forms implementation of the Kendo UI for Vue Native Signature component in Vue projects."
slug: forms_signature
position: 3
---

# Forms Support

The Signature component can be easily integrated with our [Native Form]({% slug overview_form %}) as well as the [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (or other third-party solutions).

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

## Using with Kendo UI for Vue Native Form

The [Native Form component](https://www.telerik.com/kendo-vue-ui/components/form/custom-components/) integrates with all Kendo UI for Vue Native components.

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required Signature within a Kendo UI for Vue Native Form component.

{% meta height:450 %}
{% embed_file signature/forms/kendo/main.vue preview %}
{% embed_file signature/forms/kendo/FormContent.vue %}
{% embed_file signature/forms/kendo/FormInput.vue %}
{% embed_file signature/forms/kendo/FormSignature.vue %}
{% embed_file signature/forms/kendo/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Signature Props]({% slug api_inputs_signatureprops %})
