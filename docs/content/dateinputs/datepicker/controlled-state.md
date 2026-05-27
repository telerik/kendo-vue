---
title: Controlled Mode
description: "Control the value of the Kendo UI for Vue Native DatePicker in Vue projects."
slug: controlled_datepicker
position: 3
---

# Controlled Mode

By default, the Kendo UI for Vue Native DatePicker is in an uncontrolled state.

The DatePicker provides options for:

* [Controlling its date value](#toc-controlling-the-date-value)
* [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Date Value

To manage the date value of the DatePicker:
1. Use its [`value`]({% slug api_dateinputs_datepickerprops %}#toc-value) property.
1. Handle the [`change`]({% slug api_dateinputs_datepickerprops %}#toc-onchange) event.
1. Pass the new value through the props.

The following example demonstrates how to control the DatePicker value.

{% meta height:580 %}
{% embed_file datepicker/controlled/main.vue preview %}
{% embed_file datepicker/controlled/main.js %}
{% endmeta %}

## Controlling the Popup State

To manage the popup state of the DatePicker, use its [`show`]({% slug api_dateinputs_datepickerprops %}#toc-show) property, to set the shown state of the component.

The following example demonstrates how to control the state of the DatePicker calendar upon display.

{% meta height:510 %}
{% embed_file datepicker/popup-state/main.vue preview %}
{% embed_file datepicker/popup-state/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
