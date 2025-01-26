---
title: Basics
page_title: Resources Basics - Scheduler - Kendo UI for Vue
description: "Use the resource instances and combine them in the Kendo UI Scheduler wrapper for Vue."
slug: resources_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/resources/"
position: 1
---

# Basics

The Scheduler allows you to assign events to a set of predefined resources.

The available resource instances are:
* [Single-instance resources](#toc-single-instance-resources)
* [Multiple-instance resources](#toc-multiple-instance-resources)

## Single-Instance Resources

A single instance resource is a resource of which only one instance can be assigned to a Scheduler event. A typical example is a Scheduler displaying a list of meetings (Scheduler events), which are held in two rooms (resources). Since a meeting can be held in one room it can be considered a single resource.

{% meta height:665 %}
{% embed_file resources/basic/main.vue preview %}
{% embed_file resources/basic/main.js %}
{% endmeta %}

## Multiple-Instance Resources

Multiple instance resources are the resources which allow the assigning of more than one instance to a Scheduler event&mdash;for example, a Scheduler which displays a list of meetings and the meeting attendees. Because more than one attendee can participate in a meeting, it represents a multiple-instance resource.

If the a color is present, the Scheduler will use the color of the first resource instance as a background for its events.

{% meta height:665 %}
{% embed_file resources/multiple/main.vue preview %}
{% embed_file resources/multiple/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)
