---
title: Data Binding
page_title: Vue Grid Wrapper - Data Binding - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI which supports data binding to local data arrays or remote data services."
slug: databinding_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid"></WrapperBanner></div>

# Data Binding

The Kendo UI Grid wrapper for Vue enables you to bind it to a list of possible values.

To populate the Grid with data, bind it to either:
* [Local data arrays](#toc-binding-to-local-data-arrays), or
* [Remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

To provide the Kendo UI Data Grid wrapper for Vue with local data:

1. Define the array in the `data` object of the Vue application.
1. Refer it during the initialization of the Grid through the `:data-source` property.

{% meta height:470 %}
{% embed_file grid/binding/local/main.vue preview %}
{% embed_file grid/binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

For remote data binding you need to specify a remote endpoint or web service returning data in JSON/JSONP, OData or XML format, and use the DataSource component as a mediator between the Grid and the underlying data. To make the connection to the remote endpoint and process the data properly, the data source needs information about the web service URL(s), the request type, the response data type, and the structure (schema) of the response, in case it's more complex than a simple array of objects.

To provide the Kendo UI Data Grid wrapper for Vue with data by remote data services:

1. Create a new Kendo UI Data Source object.
1. To configure the data operation actions, such as `Read`, `Update`, `Create`, or `Destroy`, refer the remote data services by using the `Transport` object of the Data Source&mdashh;for example, `:transport-read-url`, `:transport-update-url`,and so on.
1. Refer the Data Source object during the initialization of the Grid through the `:data-source` property.

{% meta height:550 %}
{% embed_file grid/binding/basic/main.vue preview %}
{% embed_file grid/binding/basic/main.js %}
{% endmeta %}


## Binding to GraphQL Service

A GraphQL service is served over HTTP through a single endpoint and expresses the full set of capabilities of the API. Also, a GraphQL service usually responds with JSON, thus making it very easy to integrate with the Grid component through a more advanced data source configuration.

The following example demonstrates how to setup the Grid to perform CRUD operations through GraphQL queries and mutations. The service that is used is implemented in ASP.NET Core and is available for review in [the following GitHub repository](https://github.com/telerik/kendo-ui-demos-service/tree/master/graphql/graphql-aspnet-core).

{% meta height:550 %}
{% embed_file grid/binding/graphql/main.vue preview %}
{% embed_file grid/binding/graphql/main.js %}
{% endmeta %}

## Binding to WebSocket

The Grid allows you to perform real-time updates for all users who start a session with your web application. In such cases, you can use WebSockets and the DataSource component. For handling data requests, the DataSource supports WebSockets through the `transport->push/read/update/destroy/create` configurations. The setting of those methods enable the long polling process&mdash;that is, the data source uses web sockets for transmitting and operating with the data in real time on every page refresh.

The following example demonstrates how to implement real-time push-notifications from a WebSocket. To see the real-time updates:
1. Open the page in two browser windows.
1. Create, update, or destroy Grid items.

{% meta height:550 %}
{% embed_file grid/binding/websocket/main.vue preview %}
{% embed_file grid/binding/websocket/main.js %}
{% endmeta %}

## Working Offline

The DataSource component provides built-in options for interacting with the web application, modifying its data, and storing the changes when no internet connection is available. The DataSource also enables the server syncing of the offline updates that will follow when the internet connection is restored. To enable and also customize the offline data storage, use the default `offline-storage` setting of the DataSource, and use its online and `offlineData` methods.

The following example demonstrates how to edit, create, or delete records, and persist these changes in the Grid when you are offline, and then sync the updates when you are back online. The DataSource acts as a mediator between the Grid and the underlying data.

{% meta height:550 %}
{% embed_file grid/binding/offline/main.vue preview %}
{% embed_file grid/binding/offline/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
