---
title: Day
description: "Display events in the Kendo UI for Vue Scheduler Day view and take advantage of hybrid day and time slots rendering"
slug: day_view_scheduler
---

# Day View

The **Day** view displays events in a familiar calendar layout.

## Getting Started

The **Day** view provides the following common settings:

* `startTime`&mdash;The first visible hour of the day.
* `endTime`&mdash;The last visible hour of the day.
* `showWorkHours`&mdash;Determines whether to show only working hours or the interval that is defined by the `startTime` and `endTime` options.

The following example demonstrates how to set common properties of the **Day** view of the Scheduler. For the full list of configuration options, refer to the API reference of the [`DayView`]({% slug api_scheduler_dayviewprops %}) properties.



{% meta height:700 %}
{% embed_file views/day/configuration/main.vue preview %}
{% embed_file views/day/configuration/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


## Grouping by Resource

You can configure the **Day** view to display events that are grouped by a resource. The grouping can be `horizontal` and `vertical`.

The below example shows how to configure the **Day** view grouped resources in a `horizontal` orientation.

{% meta height:720 %}
{% embed_file views/day/grouping/main.vue preview %}
{% embed_file views/day/grouping/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

The below example shows how to configure the **Day** view grouped resources in a `vertical` orientation.

{% meta height:720 %}
{% embed_file views/day/grouping-vertical/main.vue preview %}
{% embed_file views/day/grouping-vertical/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

<!-- ## Current Time Marker

By default, the current time marker is enabled if the current `date` and `time` is visible in the view-range.



{% meta height:860 %}
{% embed_file views/day/current-time/main.vue preview %}
{% embed_file views/day/current-time/main.js %}
{% endmeta %} -->


<!-- ## Setting the First Weekday

The first day of the week is determined by the current locale. For an example on how to change the locale, refer to the article about [globalization]({% slug globalization_scheduler %}).

> Future releases will include an option for overriding the first day of the week through the properties of the component. -->

## Suggested Links

* [API Reference of the DayView]({% slug api_scheduler_dayviewprops %})
