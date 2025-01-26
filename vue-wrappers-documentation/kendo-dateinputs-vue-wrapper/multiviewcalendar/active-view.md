---
title: Active View and View Depth
page_title: Active View and View Depth - MultiViewCalendar - Kendo UI for Vue
description: "Define the first view that the Kendo UI MultiViewCalendar initially renders in Vue projects."
slug: active_view_multiviewcalendar_wrapper
position: 2
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/multiview-calendar/"
---

<div><WrapperBanner></WrapperBanner></div>

# Active View and View Depth

To define the first view which the MultiViewCalendar initially renders, use the `start` option.

## Active View

The MultiViewCalendar supports the following predefined view options:
* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades of the century.

## Selectable Month Calendars

The following example demonstrates how to create a MultiViewCalendar that allows the user to select a month.

{% meta height:450 %}
{% embed_file multiviewcalendar/active/main.vue preview %}
{% embed_file multiviewcalendar/active/main.js %}
{% endmeta %}

## View Navigation Depth

You can define the last view to which the user can navigate (view navigation depth) by setting the `depth` option.

## Suggested Links

* [Kendo UI MultiViewCalendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/multiviewcalendar/overview)
* [API Reference of the MultiViewCalendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar)
