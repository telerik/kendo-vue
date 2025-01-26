---
title: Disabled Dates
page_title: Disabled Dates - Calendar - Kendo UI for Vue
description: "Disable certain dates that are rendered by the Kendo UI Calendar wrapper for Vue."
slug: disableddates_calendar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/date-ranges/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/calendar/date-ranges"></WrapperBanner></div>

# Disabled Dates

The Calendar allows you to disable certain days which are not intended to be selected by the end user&mdash;for example, weekends, national holidays, and others.

To disable a date, either:

* [Set an array of dates](#toc-setting-arrays), or
* [Add a function](#toc-adding-functions).

## Setting Arrays

When you set an array, list the days that need to be disabled by using the first letters from their names in English.

```html-no-run
<kendo-calendar :disable-dates='["we", "th"]'></kendo-calendar>
```

## Adding Functions

When you add a function, determine its return value as `true` for the date that is disabled.

{% meta height:350 %}
{% embed_file calendar/disabled/main.vue preview %}
{% embed_file calendar/disabled/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview)
* [API Reference of the Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar)
