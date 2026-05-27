---
title: Controlled Mode
description: "Control the value of the Kendo UI for Vue DateTimePicker in Vue projects."
slug: controlled_datetimepicker
position: 3
---

# Controlled Mode

By default, the DateTimePicker is in an uncontrolled state.

The DateTimePicker provides options for:

* [Controlling its value](#toc-controlling-the-value)
* [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Value

To manage the date value of the DateTimePicker:
1. Use its [`value`]({% slug api_dateinputs_datetimepickerprops %}#toc-value) property.
1. Handle the [`change`]({% slug api_dateinputs_datetimepickerprops %}#toc-onchange) event.
1. Pass the new value through the props.

The following example demonstrates how to control the DateTimePicker value.

{% meta height:700 %}
{% embed_file datetimepicker/controlled/value/main.vue preview %}
{% embed_file datetimepicker/controlled/value/main.js %}
{% endmeta %}

## Controlling the Popup State

To manage the popup state of the DateTimePicker, set the displayed state of the component through its [`show`]({% slug api_dateinputs_datetimepickerprops %}#toc-show) property.

The following example demonstrates how to control the state of the date-time selector of the DateTimePicker upon display.

{% meta height:610 %}
{% embed_file datetimepicker/controlled/show/main.vue preview %}
{% embed_file datetimepicker/controlled/show/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepickerprops %})
