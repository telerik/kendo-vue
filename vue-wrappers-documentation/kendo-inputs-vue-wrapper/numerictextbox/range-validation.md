---
title: Range Validation
page_title: Range Validation - NumericTextBox - Kendo UI for Vue
description: "Configure the built-in range validation feature of the Kendo UI NumericTextBox wrapper for Vue."
slug: range_validation_numerictextbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/numerictextbox/"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/numerictextbox"></WrapperBanner></div>    

# Range Validation

The NumericTextBox allows you to restrict its value to a specific range.

To implement the range-validation feature, use either of the following approaches:
* Restrict the input value between a specific [`min`](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox#configuration-min) and [`max`](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox#configuration-max) range. The typed value gets modified to fit the range on `blur`.

{% meta height:100 %}
{% embed_file numerictextbox/range/main.vue preview %}
{% embed_file numerictextbox/range/main.js %}
{% endmeta %}

* Use a custom [Kendo UI Validator](https://docs.telerik.com/kendo-ui/controls/editors/validator/overview) rule to restrict the input value. The invalid value keeps unchanged and the user is notified for the incorrect input over an error message.

For more information, refer to the article on the [custom validation rules](https://docs.telerik.com/kendo-ui/controls/editors/validator/overview#custom-rules-for-validation) of the Validator.

For a sample implementation of the range validation functionality, refer to [this online demo](https://demos.telerik.com/kendo-ui/numerictextbox/validation).

## Suggested Links

* [Kendo UI NumericTextBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/numerictextbox/overview)
* [API Reference of the NumericTextBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox)
