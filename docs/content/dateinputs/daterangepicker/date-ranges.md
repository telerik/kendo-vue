---
title: Date Limits
description: "Define the start and end dates when working with the Kendo UI for Vue DateRangePicker in Vue projects."
slug: dateranges_daterangepicker
position: 6
---

# Date Limits

The DateRangePicker can limit the date range it displays between predefined min and max values, allowing the user to select dates only within that predefined range.

To define the start date of the range, use the [`min`]({% slug api_dateinputs_daterangepickerprops %}#toc-min) property. To define the end date of the range, use the [`max`]({% slug api_dateinputs_daterangepickerprops %}#toc-max) property. The `min` date value has to be lower than the `max` date value.

The following example demonstrates how to limit the values of the DateRangePicker to a certain date range.



{% meta height:530 %}
{% embed_file daterangepicker/ranges/main.vue preview %}
{% embed_file daterangepicker/ranges/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
