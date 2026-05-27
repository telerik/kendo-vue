---
title: Month
description: "Display events in the Kendo UI for Vue Native Scheduler Month view."
slug: month_view_scheduler
---

# Month View

The **Month** view displays a high-level schedule overview organized by weeks.

## Getting Started

The following example demonstrates how to set common properties of the **Month** view of the Scheduler. For the full list of configuration options, refer to the API reference of the [`MonthView`]({% slug api_scheduler_monthviewprops %}) properties.

{% meta height:700 %}
{% embed_file views/month/configuration/main.vue preview %}
{% embed_file views/month/configuration/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


## Grouping by Resource

You can configure the **Month** view to display events that are grouped by a resource. The grouping can be `horizontal` and `vertical`.

The below example shows how to configure the **Month** view grouped resources in a `horizontal` orientation.
{% meta height:740 %}
{% embed_file views/month/grouping/main.vue preview %}
{% embed_file views/month/grouping/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


The below example shows how to configure the **Month** view grouped resources in a `vertical` orientation.

{% meta height:740 %}
{% embed_file views/month/grouping-vertical/main.vue preview %}
{% embed_file views/month/grouping-vertical/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

<!-- ## Setting the First Weekday

The first day of the week is determined by the current locale. For an example on how to change the locale, refer to the article about [globalization]({% slug globalization_scheduler %}).

> Future releases will include an option for overriding the first day of the week through the properties of the component. -->

## Suggested Links

* [API Reference of the MonthView]({% slug api_scheduler_monthviewprops %})
