---
title: Date Limits
description: "Set the Kendo UI for Vue DateInput to render a range of dates."
slug: dateranges_dateinput
position: 5
---

# Date Limits

The DateInput enables you to set a predefined min-max date range, allowing the user to input a date value only within that range.

You can control the range of dates in the DateInput by setting the [`min`]({% slug api_dateinputs_dateinputprops %}#toc-min) and [`max`]({% slug api_dateinputs_dateinputprops %}#toc-max) properties to limit the `Date` selection, or [`minTime`]({% slug api_dateinputs_dateinputprops %}#toc-mintime) and [`maxTime`]({% slug api_dateinputs_dateinputprops %}#toc-maxtime) to limit only the `Time` part of the value. When the atleast one of the limiting properties are configured and the selected date value is out of this range, the component displays a visual indication. The `min` date value has to be lower than the `max` date value - The same rule applies to the `time` value of the `minTime` and `maxTime` properties.

## Limiting the Date Range

The following example demonstrates how to limit the value of the DateInput to a certain date range.

{% meta height:250 %}
{% embed_file dateinput/date-ranges/basic/main.vue preview %}
{% embed_file dateinput/date-ranges/basic/main.js %}
{% endmeta %}

## Limiting the Time Range

The following example demonstrates how to limit the value of the DateInput to a certain time range.

{% meta height:270 %}
{% embed_file dateinput/date-ranges/time/main.vue preview %}
{% embed_file dateinput/date-ranges/time/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
