---
title: Restrictions
page_title: Restrictions - Scheduler - Kendo UI for Vue
description: "Handle the events of the Kendo UI Scheduler for Vue and implement custom restrictions."
slug: restriction_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/scheduler"></WrapperBanner></div> 

# Restrictions

You can implement custom restrictions in the Scheduler by handling its events.

The following example demonstrates how to restrict the events and better control the resources. You can prevent the drag and resize capabilities of the appointments, and also control the creation of new events and the modification of existing events.

For example, if you double-click **Call Charlie about the project**, change the attendee to Bob and click **Save**. As a result, the **This person is not available in this time period.** error will be thrown. If you change the start date of the **HR Lecture** to **10:30 AM**, the **This person is not available in this time period.** error will be thrown. The logic which enforces the restrictions in the following example resides in the `resize`, `move`, `add`, and `save` event handlers of the scheduler.

{% meta height:665 %}
{% embed_file restrictions/main.vue preview %}
{% embed_file restrictions/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)
