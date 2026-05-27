---
title: Date Limits
description: "Define the start and end dates when working with the Kendo UI for Vue DatePicker in Vue projects."
slug: dateranges_datepicker
position: 6
---

# Date Limits

The DatePicker can display a date range between predefined min and max values, allowing the user to pick a date only from that range.

> To enable the user to select a date range, use the [Kendo UI for Vue DateRangePicker component]({% slug overview_daterangepicker %}).

To define the start date of the range, use the [`min`]({% slug api_dateinputs_datepickerprops %}#toc-min) property. To define the end date of the range, use the [`max`]({% slug api_dateinputs_datepickerprops %}#toc-max) property. The `min` date value has to be lower than the `max` date value.

The following example demonstrates how to limit the value of the DatePicker to a certain date range.

{% meta height:450 %}
{% embed_file datepicker/datelimits/main.vue preview %}
{% embed_file datepicker/datelimits/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
