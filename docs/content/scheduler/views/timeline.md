---
title: Timeline
description: "Display events in the Kendo UI for Vue Native Scheduler Timeline view and take advantage of the detailed hour-by-our rendering."
slug: timeline_view_scheduler
---

# Timeline View

The **Timeline** view displays events on a continuous time-scale.

## Getting Started

The following example demonstrates how to set common properties of the **Timeline** view of the Scheduler. For the full list of configuration options, refer to the API reference of the [`TimelineView`]({% slug api_scheduler_timelineviewprops %}) properties.


{% meta height:770 %}
{% embed_file views/timeline/configuration/main.vue preview %}
{% embed_file views/timeline/configuration/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


## Grouping by Resource

You can configure the **Timeline** view to display events that are grouped by a resource. The grouping can be `horizontal` and `vertical`.

The below example shows how to configure the **Timeline** view grouped resources in a `horizontal` orientation.

{% meta height:730 %}
{% embed_file views/timeline/grouping/main.vue preview %}
{% embed_file views/timeline/grouping/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

The below example shows how to configure the **Timeline** view grouped resources in a `vertical` orientation.

{% meta height:730 %}
{% embed_file views/timeline/grouping-vertical/main.vue preview %}
{% embed_file views/timeline/grouping-vertical/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

<!-- ## Current Time Marker

By default, the current time marker is enabled if the current `date` and `time` is visible in the view-range.



{% meta height:860 %}
{% embed_file views/timeline/current-time/func/main.tsx preview %}
{% embed_file views/timeline/current-time/class/main.tsx preview %}
{% endmeta %}


## Setting the First Weekday

The first day of the week is determined by the current locale. For an example on how to change the locale, refer to the article about [globalization]({% slug globalization_scheduler %}).

> Future releases will include an option for overriding the first day of the week through the properties of the component. -->

## Suggested Links

* [API Reference of the TimelineView]({% slug api_scheduler_timelineviewprops %})
