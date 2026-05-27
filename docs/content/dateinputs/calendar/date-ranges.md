---
title: Date Limits
description: "Set the Kendo UI for Vue Calendar to render a range of dates."
slug: dateranges_calendar
position: 7
---

# Date Limits

The Calendar can display a date range between predefined min and max values, allowing the user to select a date only from that range.

To define the start date of the range, use the [`min`]({% slug api_dateinputs_calendarprops %}#toc-min) property. To define the end date of the range, use the [`max`]({% slug api_dateinputs_calendarprops %}#toc-max) property. The `min` date value has to be lower than the `max` date value.

The following example demonstrates how to limit the value of the Calendar to a certain date range.

{% meta height:430 %}
{% embed_file calendar/dateranges/main.vue preview %}
{% embed_file calendar/dateranges/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
