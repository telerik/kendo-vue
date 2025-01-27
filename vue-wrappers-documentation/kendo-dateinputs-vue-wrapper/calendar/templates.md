---
title: Templates
page_title: Templates - Calendar - Kendo UI for Vue
description: "Customize the content of the Kendo UI Calendar in Vue projects."
slug: templates_calendar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/custom-rendering/"
position: 7
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/calendar/custom-rendering"></WrapperBanner></div>

# Templates

The Calendar enables you to use templates and customize its month view.

To customize the week column cells, use the week number template. By default, the Calendar renders the calculated week of the year.

You can use the following available properties in the data object within the template to make additional calculations:
* `currentDate`&mdash;Returns the first date of the current week.
* `weekNumber`&mdash;The calculated week number.

{% meta height:350 %}
{% embed_file calendar/templates/main.vue preview %}
{% embed_file calendar/templates/main.js %}
{% endmeta %}

The following example demonstrates how to customize the day which the Calendar renders for its `month` view. The template wraps the `value` in a `<div>` HTML element.

```html-no-run
data = {
	date: date, // Date object corresponding to the current cell
	title: kendo.toString(date, "D"),
	value: date.getDate(),
	dateString: "2011/0/1" // formatted date using yyyy/MM/dd format and month is zero-based
};
```

## Suggested Links

* [Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview)
* [API Reference of the Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar)
