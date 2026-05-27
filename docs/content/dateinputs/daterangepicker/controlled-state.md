---
title: Controlled Mode
description: "Control the value and popup state of the Kendo UI for Vue DateRangePicker in Vue projects."
slug: controlled_daterangepicker
position: 2
---

# Controlled Mode

By default, the DateRangePicker is in an uncontrolled state.

The DateRangePicker provides options for:
* [Controlling its value](#toc-controlling-the-value)
* [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Value

To manage the date value of the DateRangePicker:
1. Use its [`value`]({% slug api_dateinputs_daterangepickerprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_dateinputs_daterangepickerprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:700 %}
{% embed_file daterangepicker/controlled/main.vue preview %}
{% embed_file daterangepicker/controlled/main.js %}
{% endmeta %}


## Controlling the Popup State

To manage the popup state of the DateRangePicker and define whether the calendar will be displayed, use its [`show`]({% slug api_dateinputs_daterangepickerprops %}#toc-show) property.

{% meta height:950 %}
{% embed_file daterangepicker/controlled/show/main.vue preview %}
{% embed_file daterangepicker/controlled/show/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
