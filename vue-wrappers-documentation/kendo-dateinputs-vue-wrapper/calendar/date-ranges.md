---
title: Date Ranges
page_title: Date Ranges - Calendar - Kendo UI for Vue
description: "Define the start and end dates when working with the Kendo UI Calendar in Vue projects."
slug: dateranges_calendar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/date-ranges/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/calendar/date-ranges"></WrapperBanner></div>

# Date Ranges

The Calendar provides options for displaying date ranges.

To define the start date of the range, use the `min` property. To define the end date of the range, use the `max` property.

> The `min` date value has to be lower than the `max` date value.

```html-no-run
<kendo-calendar :value="new Date()"
				:min="new Date(2017, 0, 1)"
				:max="new Date(2020, 11, 31)">
</kendo-calendar>
```

## Suggested Links

* [Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview)
* [API Reference of the Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar)
