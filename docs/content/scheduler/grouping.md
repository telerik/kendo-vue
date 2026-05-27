---
title: Grouping
description: "Get started with the Kendo UI for Vue Native Scheduler component, group its resources, and render each resource as a sub-view."
slug: grouping_scheduler
position: 5
---

# Grouping

The Scheduler accepts a [`group`]({% slug api_scheduler_schedulerprops %}#toc-group) property which, in combination with the [`resources`]({% slug api_scheduler_schedulerprops %}#toc-resources) property, renders each resource as a sub-view of the Scheduler.

Except for the **Agenda** view, all available Scheduler views can render both horizontal and vertical grouping.

For more information on grouping by resources in each view, refer to the following sections:

* [**Timeline** view grouping](slug:timeline_view_scheduler#toc-grouping-by-resource)
* [**Day** view grouping](slug:day_view_scheduler#toc-grouping-by-resource)
* [**Week** view and **WorkWeek** view grouping](slug:week_views_scheduler#toc-grouping-by-resource)
* [**Month** view grouping](slug:month_view_scheduler#toc-grouping-by-resource)
* [**Agenda** view grouping](slug:agenda_view_scheduler#toc-grouping-by-resource)

## Getting Started

To configure the group rendering, set the `group` and `resources` properties. The [`resources`]({% slug api_scheduler_schedulergroup %}#toc-resources) field of the `group` property has to be an array of string values that corresponds to the [`name`]({% slug api_scheduler_schedulerresource %}#toc-name) field of the `resource`.

The following example demonstrates how to group events based on their `roomId` and `personIds` and with the corresponding coloring based on the `roomId`.



{% meta height:770 %}
{% embed_file data-operations/grouping/configuration/main.vue preview %}
{% embed_file data-operations/grouping/configuration/main.js %}
{% embed_file data-operations/grouping/configuration/data.js %}
{% endmeta %}


## Setting Multiple Resource Groups

Based on the resource value, a single event can appear in multiple resource groups. In the previous example, both `Peter` and `Alex` can have an appointment for a single event that is happening in `Meeting Room 101`. In this case, the Scheduler must render the event in both groups.

The following example demonstrates how to render an event in two or more groups based on the provided resources.



{% meta height:770 %}
{% embed_file data-operations/grouping/multiple/main.vue preview %}
{% embed_file data-operations/grouping/multiple/main.js %}
{% embed_file data-operations/grouping/multiple/data.js %}
{% endmeta %}


## Suggested Links

* [Data Binding in the Kendo UI for Vue Scheduler]({% slug data_binding_scheduler %})
* [Editing in the Kendo UI for Vue Scheduler]({% slug editing_scheduler %})
* [Handling the Kendo UI for Vue Scheduler Resources]({% slug resources_scheduler %})
* [API Reference of the Kendo UI for Vue SchedulerDataChangeEvent]({% slug api_scheduler_schedulerprops %})
