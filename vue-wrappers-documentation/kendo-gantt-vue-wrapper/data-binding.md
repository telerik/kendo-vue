---
title: Data Binding
page_title: Data Binding - Gantt - Kendo UI for Vue
description: "Bind the Kendo UI Gantt wrapper for Vue to local data arrays or remote data services."
slug: databinding_gantt
position: 1
---

<div><WrapperBanner></WrapperBanner></div>

# Data Binding

The Gantt enables you to bind it to a list of possible values.

To populate the Gantt with data, bind the component to either:
* [Local data arrays](#toc-binding-to-local-data-arrays), or
* [Remote data services](#toc-binding-to-remote-data-services).

Locally defined values are best for small, fixed sets of data. For larger datasets, use remote data services.

## Local Data Arrays

To provide the Gantt with local data:

1. Define the array in the `data` object of the Vue application.
1. Refer it during the initialization of the Gantt through the `:data-source` property.

{% meta height:750 %}
{% embed_file data-binding/local-data/main.vue preview %}
{% embed_file data-binding/local-data/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To provide the Gantt with data by using remote data services:

1. Create a new `ganttdatasource` object and, optionally, a `ganttdependencydatasource` object.
1. Refer the `ganttdatasource` and `ganttdependencydatasource` objects during the initialization of the Gantt through the `:data-source-ref` and `dependencies-data-source-ref` properties.

The [`ganttdatasource`]({% slug overview_ganttdatasource %}) object contains the configuration for the necessary data operation actions such as `Read`, `Update`, `Create`, or `Destroy`. To refer the remote data services, use the `Transport` object properties of the `ganttdatasource`&mdash;for example, `:transport-read-url`, `:transport-update-url`, and so on.

The [`ganttdependencydatasource`]({% slug overview_ganttdependencydatasource %}) object is responsible for the relations between the tasks that are visualized in the widget. The object contains the configurations for the services references for the read, update, create, destroy etc operations for the dependencies.

{% meta height:750 %}
{% embed_file data-binding/remote-data/main.vue preview %}
{% embed_file data-binding/remote-data/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/gantt/overview)
* [API Reference of the Gantt Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt)
