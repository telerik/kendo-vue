---
title: Disabled Dates
page_title: Disabled Dates - MultiViewCalendar - Kendo UI for Vue
description: "Disable certain dates that are rendered by the Kendo UI MultiViewCalendar wrapper for Vue."
slug: disabled_dates_multiviewcalendar_wrapper
position: 6
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/multiview-calendar/"
---

<div><WrapperBanner></WrapperBanner></div>

# Disabled Dates

The MultiViewCalendar allows you to disable certain days which are not intended to be selected by the end user&mdash;for example, weekends, national holidays, and others.

To disable a date, either:

* [Set an array of dates](#toc-setting-arrays), or
* [Add a function](#toc-adding-functions).

## Setting Arrays

When you set an array, list the days that need to be disabled by using the first letters from their names in English.

```html-preview
<kendo-multiviewcalendar :disable-dates='["we", "th"]'></kendo-multiviewcalendar>
```

## Adding Functions

When you add a function, determine its return value as `true` for the date that is disabled.

{% meta height:450 %}
{% embed_file multiviewcalendar/disabled/main.vue preview %}
{% embed_file multiviewcalendar/disabled/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MultiViewCalendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/multiviewcalendar/overview)
* [API Reference of the MultiViewCalendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar)
