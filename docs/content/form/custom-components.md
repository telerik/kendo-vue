---
title: Custom Components
description: "Get started with the Kendo UI for Vue Native Form and set its custom behavior."
slug: custom_components_form
position: 2
---

# Custom Components

You can render custom components in the [Kendo UI for Vue Field component]({% slug api_form_fieldprops %}) by using the built-in properties of the [KendoForm Injected Property]({% slug api_form_fieldinjectedprops %}) and any custom properties.

## Using Basic Properties

You can pass the props and the `onChange` event to the custom field component by using the props of the v-slot.

{% meta height:180 %}
{% embed_file custom-components/basic/main.vue preview %}
{% embed_file custom-components/basic/FormContent.vue %}
{% embed_file custom-components/basic/FormInput.vue %}
{% embed_file custom-components/basic/main.js %}
{% endmeta %}

## Setting Custom Behavior

You can display error messages and customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required custom input.

{% meta height:220 %}
{% embed_file custom-components/advanced/main.vue preview %}
{% embed_file custom-components/advanced/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file custom-components/advanced/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Form]({% slug api_form_formprops %})
