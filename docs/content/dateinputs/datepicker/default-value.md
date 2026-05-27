---
title: Default Value
description: "Set the default value of the Kendo UI for Vue DatePicker in Vue projects."
slug: default_value_datepicker
position: 4
---

# Default Value

By default, the DatePicker value is `null` and the Calendar popup is hidden.

The DatePicker provides options for:

* [Setting its default value](#toc-setting-the-default-value)
* [Setting the default state of its popup](#toc-setting-the-default-popup-state)

<div data-component="StartFreeTrialSection"></div>

## Setting the Default Value

To set the initial value that is rendered by the DatePicker, set the [`defaultValue`]({% slug api_dateinputs_datepickerprops %}#toc-defaultvalue) property. This approach allows the component to display a value upon its initial render while remaining in an uncontrolled state.

{% meta height:480 %}
{% embed_file datepicker/default/main.vue preview %}
{% embed_file datepicker/default/main.js %}
{% endmeta %}

## Setting the Default Popup State

To display the calendar popup when the DatePicker initially renders, set the [`defaultShow`]({% slug api_dateinputs_datepickerprops %}#toc-defaultshow) property to `true`. This approach allows the component to show an open calendar popup while remaining in an uncontrolled state.

{% meta height:480 %}
{% embed_file datepicker/defaultpopup/main.vue preview %}
{% embed_file datepicker/defaultpopup/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
