---
title: Data Binding
page_title: Data Binding - DataSource - Kendo UI for Vue
description: "Bind the Kendo UI DataSource component to data in Vue projects."
slug: databinding_datasource
position: 1
---

<div><WrapperBanner></WrapperBanner></div>

# Data Binding

You can bind a DataSource instance to [local data arrays](#toc-binding-to-local-data-arrays) or [remote data services](#toc-remote-data-services).  

## Binding to Local Data Arrays

To bind the DataSource to a local array of JavaScript objects, assign the array to the `data` configuration property of the DataSource instance.

{% meta height:350 %}
{% embed_file datasource/data-binding/local/main.vue preview %}
{% embed_file datasource/data-binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To make the connection to the remote endpoint and process the data properly, the DataSource requires the following information:

* URLs of the web service.
* Request type.
* Response data type.
* Structure (schema) of the response (if more complex than a plain array of objects).

{% meta height:660 %}
{% embed_file datasource/data-binding/remote/main.vue preview %}
{% embed_file datasource/data-binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Data Source for jQuery](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [API Reference of the Data Source Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
