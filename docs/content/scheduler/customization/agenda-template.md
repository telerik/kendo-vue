---
title: Agenda Templates
description: "Get started with the Kendo UI for Vue Native Scheduler and learn how to customize the Agenda view of the component."
slug: overview_agenda_view_scheduler
position: 25
---

# Agenda Templates

The Kendo UI for Vue Native Scheduler allows us to customize the look of its `Agenda` view. 

To redefine the `task` templates in the Agenda View, we have to use the `task property` of the Native Scheduler. The property accepts `slot` templates inside which we define the custom content we want to display.


## Customize the Agenda Event

The following example demonstrates how to conditionally show different icons for the different event types in the `Agenda View`. Based on the event type(all day, recurrence or one time), we are displaying three different icons before the event title. 


{% meta height:770 %}
{% embed_file custom-templates/agenda/task/main.vue preview %}
{% embed_file custom-templates/agenda/task/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}



## Suggested Links

* [API Reference of the Scheduler]({% slug api_scheduler_schedulerprops %})
