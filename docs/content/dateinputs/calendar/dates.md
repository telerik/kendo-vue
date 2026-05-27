---
title: Dates
description: "Handle the focused or selected dates in the Kendo UI for Vue Calendar."
slug: dates_calendar
position: 3
---

# Dates

The Calendar enables you to set the behavior of its dates.

You can apply either of the following approaches:

* Setting the [focused dates](#toc-setting-the-focused-date), or
* Setting the [selected dates](#toc-setting-the-selected-date).

## Setting the Focused Date

The Calendar always displays a focused date and, by default, the focused date is today's date. To change the focused date, use the [`focusedDate`]({% slug api_dateinputs_calendarprops %}#toc-focuseddate) property by setting it to a specific `Date` value. The `Date` value has to be a valid JavaScript `Date` object.

{% meta height:470 %}
{% embed_file calendar/dates/focused/main.vue preview %}
{% embed_file calendar/dates/focused/main.js %}
{% endmeta %}

## Selected Dates

By default, the selected date is not set and the Calendar displays only the focused date. To define the selected date, use the [`value`]({% slug api_dateinputs_calendarprops %}#toc-value) prop.

The Calendar accepts the following values that you can set as selected:

* [A single date](#toc-single-dates)
* [Multiple dates](#toc-multiple-dates)
* [Range date selections](#toc-range-date-selections)

### Single Dates

To set a single date as selected, pass the JavaScript `Date` object as a value.

{% meta height:470 %}
{% embed_file calendar/dates/selected/main.vue preview %}
{% embed_file calendar/dates/selected/main.js %}
{% endmeta %}

### Multiple Dates

To set multiple dates as selected, pass an array of JavaScript `Date` objects as a value.  In such scenario we need to se the [`mode`]({% slug api_dateinputs_calendarprops %}#toc-mode) prop to 'multiple'.

{% meta height:470 %}
{% embed_file calendar/dates/multiple/main.vue preview %}
{% embed_file calendar/dates/multiple/main.js %}
{% endmeta %}


### Range Date Selections

To set a range of dates as selected, pass an object with `start` and `end` keys which represent the selected range. In such scenario we need to se the [`mode`]({% slug api_dateinputs_calendarprops %}#toc-mode) prop to 'range'.

{% meta height:470 %}
{% embed_file calendar/dates/range/main.vue preview %}
{% embed_file calendar/dates/range/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
