---
title: Forms Support
description: "Integrate the Kendo UI for Vue Form with the Vue Rating."
slug: forms_support_rating
position: 9
---

# Forms Support

The Rating component can be easily integrated with our [Kendo UI for Vue Form]({% slug overview_form %}) as well as the [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (or other third-party solutions).

The form enables you to validate the rating and prevent the submission of forms which are in an invalid state.


### Support for Kendo UI for Vue Form
The Kendo UI for Vue Form component [integrates with all Kendo UI for Vue components](https://www.telerik.com/kendo-vue-ui/components/form/custom-components/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required Rating within a Kendo UI for Vue Form component.



{% meta height:560 %}
{% embed_file rating/form-support/main.vue preview %}
{% embed_file rating/form-support/FormContent.vue %}
{% embed_file rating/form-support/FormInput.vue %}
{% embed_file rating/form-support/FormRating.vue %}
{% embed_file rating/form-support/main.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the Rating props]({% slug api_inputs_ratingprops %})
* [Keyboard Navigation]({% slug keyboard_navigation_rating %})
