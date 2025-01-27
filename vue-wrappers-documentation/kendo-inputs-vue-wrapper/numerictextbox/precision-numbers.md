---
title: Precision of Numbers
page_title: Precision of Numbers - NumericTextBox - Kendo UI for Vue
description: "Change the precision of the numbers when working with the Kendo UI NumericTextBox wrapper for Vue."
slug: precision_of_numbers_numerictextbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/numerictextbox/predefined-step/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/numerictextbox/predefined-step"></WrapperBanner></div>    

# Precision of Numbers

The NumericTextBox controls the precision of the entered number by using the value of the [`decimals`](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox#configuration-decimals) option.

The number is limited to the `decimals` length. By default, the component does not restrict the length of the typed value. To enforce a specific fraction length during editing, set the [`restrictDecimals`](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox#configuration-restrictDecimals) option to `true`.

{% meta height:100 %}
{% embed_file numerictextbox/precision/main.vue preview %}
{% embed_file numerictextbox/precision/main.js %}
{% endmeta %}

## Known Limitations

The NumericTextBox uses a JavaScript [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) object to keep its value which has a certain precision limitation. In general, the `Number` object persists its precision up to 16 digits. Numbers longer than 16 digits get converted to exponential numbers and lose their precision. Because the component relies on a `Number` object, it gets the same precision limitation.

This limitation comes from JavaScript itself and you cannot work around it in a feasible way. You are recommended to use an `<input>` element with server validation because some server languages can parse long numbers.

On the other hand, if the user enters a number with a greater precision than is currently configured through the `decimals` property, the component value will be rounded. For more details and examples, refer to the [API documentation on `decimals`](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox#configuration-decimals).

## Suggested Links

* [Kendo UI NumericTextBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/numerictextbox/overview)
* [API Reference of the NumericTextBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox)
