---
title: Default Value
description: "Set the default value of the Kendo UI for Vue DateTimePicker in Vue projects."
slug: default_value_datetimepicker
position: 4
---

# Default Value

By default, the DateTimePicker value is `null` and the date-time selector popup is hidden.

The DateTimePicker provides options for:

* [Setting its default value](#toc-setting-the-default-value)
* [Setting the default state of its popup](#toc-setting-the-default-popup-state)

## Setting the Default Value

To set the initial value that is rendered by the DateTimePicker, set the [`defaultValue`]({% slug api_dateinputs_datetimepickerprops %}#toc-defaultvalue) property. This approach allows the component to display a value upon its initial render while remaining in an uncontrolled state.

{% meta height:610 %}
{% embed_file datetimepicker/default/value/main.vue preview %}
{% embed_file datetimepicker/default/value/main.js %}
{% endmeta %}

## Setting the Default Popup State

To display a popup for the date-time selector when the DateTimePicker initially renders, set the [`defaultShow`]({% slug api_dateinputs_datetimepickerprops %}#toc-defaultshow) property to `true`. This approach allows the component to show an open popup for the date-time selector while remaining in an uncontrolled state.

{% meta height:610 %}
{% embed_file datetimepicker/default/show/main.vue preview %}
{% embed_file datetimepicker/default/show/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepickerprops %})
