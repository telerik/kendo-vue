---
title: Incremental Steps
description: "Increment or decrement each date value part by one step in the Kendo UI for Vue TimePicker."
slug: incrementalsteps_timepicker
position: 6
---

# Incremental Steps

By default, the TimePicker increments or decrements each part of its time values by one step.

To change the default setup, use the [`steps`]({% slug api_dateinputs_timepickerprops %}#toc-steps) property.

The available options are:
- `hour: Number`&mdash;Controls the incremental step of the hour value.
- `minute: Number`&mdash;Controls the incremental step of the minute value.
- `second: Number`&mdash;Controls the incremental step of the second value.

{% meta height:520 %}
{% embed_file timepicker/incremental/main.vue preview %}
{% embed_file timepicker/incremental/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the TimePicker]({% slug api_dateinputs_timepickerprops %})
