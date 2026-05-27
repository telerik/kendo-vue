---
title: Incremental Steps
description: "Override the default incremental steps in the Kendo UI for Vue DateInput."
slug: incrementalsteps_dateinput
position: 4
---

# Incremental Steps

By default, the DateInput increments or decrements each part of its date values by one step.

To change the default setup, use the [`steps`]({% slug api_dateinputs_dateinputprops %}#toc-steps) property.

The available options are:
- `year: Number`&mdash;Controls the incremental step of the year value.
- `month: Number`&mdash;Controls the incremental step of the month value.
- `day: Number`&mdash;Controls the incremental step of the day value.
- `hour: Number`&mdash;Controls the incremental step of the hour value.
- `minute: Number`&mdash;Controls the incremental step of the minute value.
- `second: Number`&mdash;Controls the incremental step of the second value.

{% meta height:330 %}
{% embed_file dateinput/incremental-steps/main.vue preview %}
{% embed_file dateinput/incremental-steps/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
