---
title: Data Binding
page_title: Data Binding - Scheduler - Kendo UI for Vue
description: "Bind the Kendo UI Scheduler wrapper for Vue to local data arrays or remote data services."
slug: databinding_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/data-binding/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/scheduler/data-binding"></WrapperBanner></div> 

# Data Binding

The Scheduler provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) and to [remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

The following example demonstrates how to create a Scheduler and bind it to a local data source.

{% meta height:665 %}
{% embed_file binding/basic/main.vue preview %}
{% embed_file binding/basic/main.js %}
{% endmeta %}

## Binding to Remote Data Services

You can bind the Scheduler to a remote dataset by either:
* [Using the SchedulerDataSource component](#toc-using-the-schedulerdatasource-component), or
* [Using the `data` method](#toc-using-the-data-method).

### Using the SchedulerDataSource Component

The following example demonstrates how to bind the Scheduler to a remote [SchedulerDataSource component]({% slug overview_scheduler_wrapper %}).

{% meta height:665 %}
{% embed_file binding/datasource/main.vue preview %}
{% embed_file binding/datasource/main.js %}
{% endmeta %}

### Using the data Method

The following example demonstrates how to bind the Scheduler to remote data by using the `data` method.

{% meta height:665 %}
{% embed_file binding/data/main.vue preview %}
{% embed_file binding/data/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI SchedulerDataSource Component for Vue]({% slug overview_scheduler_wrapper %})
* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)
