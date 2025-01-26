---
title: Grouping
page_title: Grouping of Resources - Scheduler - Kendo UI for Vue
description: "Group resources when working with the Kendo UI Scheduler wrapper for Vue."
slug: resources_grouping_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/grouping/"
position: 2
---

# Grouping of Resources

The Scheduler enables you to group its resources by using its `orientation` configuration.

The available options are:
* [Horizontal grouping](#toc-horizontal-grouping)
* [Vertical grouping](#toc-vertical-grouping)
* [Grouping by dates](#toc-date-grouping)

> The `agenda` view is always in vertical orientation.

## Horizontal Grouping

The following example demonstrates how to group the resources horizontally. To control the direction of the grouping, set the `orientation` property. By default, `orientation` is set to `horizontal`.

{% meta height:665 %}
{% embed_file resources/horizontal/main.vue preview %}
{% embed_file resources/horizontal/main.js %}
{% endmeta %}

## Vertical Grouping

The following example demonstrates how to group the resources vertically. To control the direction of the grouping, set the `orientation` property to `vertical`.

{% meta height:665 %}
{% embed_file resources/vertical/main.vue preview %}
{% embed_file resources/vertical/main.js %}
{% endmeta %}

## Grouping by Dates

The following example demonstrates how to group the resources both vertically and by date. To control the direction of the grouping, set the `orientation` property. To control the grouping by dates, set the `date` option to `true`.

{% meta height:665 %}
{% embed_file resources/date/main.vue preview %}
{% embed_file resources/date/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)
