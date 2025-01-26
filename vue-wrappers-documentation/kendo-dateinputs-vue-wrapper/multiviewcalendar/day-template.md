---
title: Day Template
page_title: Day Template - MultiViewCalendar - Kendo UI for Vue
description: "Customize the content of each cell by using cell templates in the Kendo UI MultiViewCalendar Vue wrapper."
slug: day_template_multiviewcalendar_wrapper
position: 5
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/multiview-calendar/"
---

<div><WrapperBanner></WrapperBanner></div>

# Day Template

The MultiViewCalendar enables you to customize the rendered day for the `month` view.

The following example demonstrates how to create a MultiViewCalendar by using a custom template.

{% meta height:450 %}
{% embed_file multiviewcalendar/day-template/main.vue preview %}
{% embed_file multiviewcalendar/day-template/main.js %}
{% endmeta %}

The template wraps the `value` in a `<div>` HTML element.

The following example demonstrates the structure of the data object that is passed to the template function.

```js-no-run
data = {
    date: date, // Date object corresponding to the current cell
    title: kendo.toString(date, "D"),
    value: date.getDate(),
    dateString: "2011/0/1" // formatted date using yyyy/MM/dd format and month is zero-based
};
```

## Suggested Links

* [Kendo UI MultiViewCalendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/multiviewcalendar/overview)
* [API Reference of the MultiViewCalendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar)
