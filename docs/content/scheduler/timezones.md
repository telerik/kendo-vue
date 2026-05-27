---
title: Timezones
description: "Get started with the Kendo UI for Vue Scheduler component and set its timezones."
slug: timezones_scheduler
position: 13
---

# Timezones

The Scheduler provides built-in support for displaying events in different timezones.

## Default Timezones

If no timezone is set, the Scheduler defaults to the local timezone of the browser. The user will be able to see the start and end time of the events as they appear in their local timezone.

For example, an event that is set up to occur at 09:00 AM in London (GMT+0000) will appear as 10:00 AM to a user in Berlin (GMT+0100). The following example demonstrates the resulting time for your local timezone.



{% meta height:770 %}
{% embed_file timezones/default/main.vue preview %}
{% embed_file timezones/default/main.js %}
{% endmeta %}


## Fixed Timezones

Some scenarios require you to set a timezone to a fixed value. For example, a conference schedule has to be always displayed in the timezone of the organizer regardless of the timezone in which the attendees are located and from which they are viewing the schedule. For more information, refer to the [timezones documentation of the Date Math library]({% slug timezones_datemath %}).

1. Load the required timezone data.

    > The `Etc/UTC` timezone is loaded by default.

    ```jsx-no-run
      // Load the timezone data for the specific time zone.
      import '@progress/kendo-date-math/tz/America/New_York';
    ```

2. Set the [`timezone`]({% slug api_scheduler_schedulerprops %}#toc-timezone) attribute of the Scheduler to the desired timezone ID.

```jsx-no-run
    import '@progress/kendo-date-math/tz/America/New_York';

    <Scheduler
        :style="{ height: '700px' }"
        :data-items="data"
        :default-date="defaultDate"
        :views="views"
        :timezone="'America/New_York'"
    ></Scheduler>
```

{% meta height:770 %}
{% embed_file timezones/fixed/main.vue preview %}
{% embed_file timezones/fixed/main.js %}
{% endmeta %}

## Event Timezones

Depending on their specified [`startTimezone`]({% slug api_scheduler_schedulermodelfields %}#toc-starttimezone) and [`endTimezone`]({% slug api_scheduler_schedulermodelfields %}#toc-endtimezone) fields, events can occur in different timezones. Upon display, the Scheduler will convert the event times to its configured timezone and the event editor will still display the original time in the event timezone.

## Suggested Links

* [`timezone`]({% slug api_scheduler_schedulerprops %}#toc-timezone)
* [`startTimezone`]({% slug api_scheduler_schedulermodelfields %}#toc-starttimezone)
* [`endTimezone`]({% slug api_scheduler_schedulermodelfields %}#toc-endtimezone)
* [API Reference of the Scheduler]({% slug api_scheduler %})
