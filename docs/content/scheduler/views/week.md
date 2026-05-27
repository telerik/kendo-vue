---
title: Week and WorkWeek
description: "Display events in the Kendo UI for Vue Scheduler Week and WorkWeek views and take advantage of hybrid day and time slots rendering"
slug: week_views_scheduler
---

# Week View

The **Week** and **WorkWeek** views display events in a familiar calendar layout with a pre-defined number of days and navigation step.

> The `Week` and `WorkWeek` views are rendering a `DayView` component with a pre-configured `date range`, `step` and `numberOfDays` properties.

## Getting Started

The **Week** and **WorkWeek** views provide the following common settings:

* `workWeekStart`&mdash;The first visible day of the week.
* `workWeekEnd`&mdash;The last visible day of the week.

The following example demonstrates how to set common properties of the **Week** view of the Scheduler. For the full list of configuration options, refer to the API reference of the [`WeekView`]({% slug api_scheduler_weekviewprops %}) properties.

{% meta height:700 %}
{% embed_file views/week/configuration/main.vue preview %}
{% embed_file views/week/configuration/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


## Grouping by Resource

You can configure the **Week** and **WorkWeek** views to display events that are grouped by a resource. The grouping can be `horizontal` and `vertical`.

The below example shows how to configure the **Week** and **WorkWeek** views grouped resources in a `horizontal` orientation.

{% meta height:760 %}
{% embed_file views/week/grouping/main.vue preview %}
{% embed_file views/week/grouping/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


The below example shows how to configure the **Week** and **WorkWeek** views grouped resources in a `vertical` orientation.

{% meta height:760 %}
{% embed_file views/week/grouping-vertical/main.vue preview %}
{% embed_file views/week/grouping-vertical/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

<!-- ## Setting the First Weekday

The first day of the week is determined by the current locale. For an example on how to change the locale, refer to the article about [globalization]({% slug globalization_scheduler %}).

> Future releases will include an option for overriding the first day of the week through the properties of the component. -->

## Suggested Links

* [API Reference of the WeekView]({% slug api_scheduler_weekviewprops %})
* [API Reference of the WorkWeekView]({% slug api_scheduler_workweekviewprops %})
