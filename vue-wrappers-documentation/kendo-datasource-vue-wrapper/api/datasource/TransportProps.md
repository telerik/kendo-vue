---
title: transportProps API
description: "API Index | transportProps"
api_reference: true
slug: api_datasource_transportprops
---

# TransportProps

### transport-batch-url `String | Function`

The OData-v4 batch endpoint to which the request is sent. If `transport-batch-url` is set to a function, the data source will invoke it and use the result as the URL.

### transport-cache `Boolean`

Specifies if the transport caches the result from `read` requests. The query parameters are used as a cache key and if the key is present in the cache, a new request to the server is not executed. The cache is kept in memory and cleared on page refresh.

### transport-create `String | Function`

The configuration that is used when the data source saves newly created data items&mdash;items that are added to the data source over the `add` or `insert` methods. If the value of `transport.create` is a function, the data source invokes that function instead of `jQuery.ajax`. For more information on the provided argument, refer to the official jQuery documentation. If the value of `transport.create` is a string, the data source uses this string as the URL of the remote service.

### transport-create-cache `Boolean`

If `transport-create-cache` is set to `false`, the request result will not be cached by the browser. Setting `transport-create-cache` to `false` will only work correctly with `HEAD` and `GET` requests. `transport-create-cache` functions by appending `_={timestamp}` to the `GET` parameters. By default, `jsonp` requests are not cached. For more information, refer to the `jQuery.ajax` documentation.

### transport-create-content-type `String`

The content-type HTTP header that is sent to the server. Defaults to `application/x-www-form-urlencoded`. If the content is JSON, use `application/json`. For more information, refer to the `jQuery.ajax` documentation.

### transport-create-data `Object | Function`

The additional parameters that are sent to the remote service. The parameter names must not match the reserved words that are used by the Kendo UI DataSource for sorting, filtering, paging, and grouping. For more information, refer to the `jQuery.ajax` documentation.

### transport-create-data-type `String`

The type of result that is expected by the server. Commonly used values are `json` and `jsonp`. For more information, refer to the `jQuery.ajax` documentation.

### transport-create-type `String`

The type of request that will be made (`POST`, `GET`, `PUT`, or `DELETE`). The default request is `GET`. For more information, refer to the `jQuery.ajax` documentation.

### transport-create-url `String | Function`

The URL to which the request is sent. If `transport-create-url` is set to a function, the data source will invoke it and use the result as the URL.

### transport-destroy `String | Function`

The configuration that is used when the data source destroys the data items&mdash;items that are removed from the data source over the `remove` method.

* If the value of `transport.destroy` is a function, the data source invokes that function instead of `jQuery.ajax`.
* If the value of `transport.destroy` is a string, the data source uses this string as the URL of the remote service.

### transport-destroy-cache `Boolean`

If `transport-destroy-cache` is set to `false`, the request result will not be cached by the browser. Setting `transport-destroy-cache` to `false` will only work correctly with `HEAD` and `GET` requests. `transport-destroy-cache` functions by appending `_={timestamp}` to the `GET` parameters. By default, `jsonp` requests are not cached. For more information, refer to the `jQuery.ajax` documentation.

### transport-destroy-content-type `String`

The content-type HTTP header that is sent to the server. Defaults to `application/x-www-form-urlencoded`. If the content is JSON, use `application/json`. For more information, refer to the `jQuery.ajax` documentation.

### transport-destroy-data `Object | Function`

The additional parameters which are sent to the remote service. The parameter names must not match the reserved words which are used by the Kendo UI DataSource for sorting, filtering, paging, and grouping. For more information, refer to the `jQuery.ajax` documentation.

### transport-destroy-data-type `String`

The type of result that is expected by the server. Commonly used values are `json` and `jsonp`. For more information, refer to the `jQuery.ajax` documentation.

### transport-destroy-type `String`

The type of request that will be made (`POST`, `GET`, `PUT`, or `DELETE`). The default request is `GET`. For more information, refer to the `jQuery.ajax` documentation.

### transport-destroy-url `String | Function`

The URL to which the request is sent. If `transport-destroy-url` is set to a function, the data source will invoke it and use the result as the URL.

### transport-parameter-map `Function`

The function which converts the request parameters into a format that is suitable for the remote service. By default, the data source sends the parameters according to the jQuery conventions. If a `transport.read.data` function is used together with `parameterMap`, preserve the result from the data function that will be received in the `parameterMap` arguments. Generally, the `parameterMap` function is designed to transform the request payload and not to add new parameters to it.

### transport-push `Function`

The function that is invoked during transport initialization and sets up push notifications. The data source calls this function only once and provides callbacks which handle push notifications&mdash;data that is pushed by the server.

### transport-read `String | Function`

The configuration that is used when the data source loads data items from a remote service.

* If the value of `transport.read` is a function, the data source invokes that function instead of `jQuery.ajax`.
* If the value of `transport.read` is a string, the data source uses this string as the URL of the remote service.

### transport-read-cache `Boolean`

If `transport-read-cache` is set to `false`, the request result will not be cached by the browser. Setting `transport-read-cache` to `false` will only work correctly with `HEAD` and `GET` requests. `transport-read-cache` functions by appending `_={timestamp}` to the `GET` parameters. By default, `jsonp` requests are not cached. For more information, refer to the `jQuery.ajax` documentation.

### transport-read-content-type `String`

The content-type HTTP header that is sent to the server. Defaults to `application/x-www-form-urlencoded`. If the content is JSON, use `application/json`. For more information, refer to the `jQuery.ajax` documentation.

### transport-read-data `Object | Function`

The additional parameters which are sent to the remote service. The parameter names must not match the reserved words which are used by the Kendo UI DataSource for sorting, filtering, paging, and grouping. For more information, refer to the `jQuery.ajax` documentation.

### transport-read-data-type `String`

The type of result which is expected by the server. Commonly used values are `json` and `jsonp`. For more information, refer to the `jQuery.ajax` documentation.

### transport-read-type `String`

The type of request that will be made (`POST`, `GET`, `PUT`, or `DELETE`). The default request is `GET`. For more information, refer to the `jQuery.ajax` documentation.

### transport-read-url `String | Function`

The URL to which the request is sent. If `transport-read-url` is set to a function, the data source will invoke it and use the result as the URL.

### transport-signalr-client-create `String`

Specifies the name of the client-side method of the SignalR hub which is responsible for creating data items.

### transport-signalr-client-destroy `String`

Specifies the name of the client-side method of the SignalR hub which is responsible for destroying data items.

### transport-signalr-client-read `String`

Specifies the name of the client-side method of the SignalR hub which is responsible for reading data items.

### transport-signalr-client-update `String`

Specifies the name of the client-side method of the SignalR hub which is responsible for updating data items.

### transport-signalr-hub `Object`

The SignalR hub object that is returned by the `createHubProxy` method (or `signalR.HubConnection` for ASP.NET Core SignalR). The `hub` option is mandatory.

### transport-signalr-promise `Object`

The promise which is returned by the `start` method of the SignalR connection. The `promise` option is mandatory.

### transport-signalr-server-create `String`

Specifies the name of the server-side method of the SignalR hub which is responsible for creating data items.

### transport-signalr-server-destroy `String`

Specifies the name of the server-side method of the SignalR hub which is responsible for destroying data items.

### transport-signalr-server-read `String`

Specifies the name of the server-side method of the SignalR hub which is responsible for reading data items.

### transport-signalr-server-update `String`

Specifies the name of the server-side method of the SignalR hub which is responsible for updating data items.

### transport-submit `Function`

A function that will handle the `create`, `update`, and `delete` operations in a single batch when custom transport is used, that is, the `transport.read` operation is defined as a function. In this case, the `transport.create`, `transport.update`, and `transport.delete` operations will not be executed.

### transport-update `String | Function`

The configuration that is used when the data source saves updated data items&mdash;data items whose fields have been updated.

* If the value of `transport.update` is a function, the data source invokes that function instead of `jQuery.ajax`.
* If the value of `transport.update` is a string, the data source uses this string as the URL of the remote service.

### transport-update-cache `Boolean`

If `transport-update-cache` is set to `false`, the request result will not be cached by the browser. Setting `transport-update-cache` to `false` will only work correctly with `HEAD` and `GET` requests. `transport-update-cache` functions by appending `_={timestamp}` to the `GET` parameters. By default, `jsonp` requests are not cached. For more information, refer to the `jQuery.ajax` documentation.

### transport-update-content-type `String`

The content-type HTTP header that is sent to the server. Defaults to `application/x-www-form-urlencoded`. If the content is JSON, use `application/json`. For more information, refer to the `jQuery.ajax` documentation.

### transport-update-data `Object | Function`

The additional parameters which are sent to the remote service. The parameter names must not match the reserved words, which are used by the Kendo UI DataSource for sorting, filtering, paging, and grouping. For more information, refer to the `jQuery.ajax` documentation.

### transport-update-data-type `String`

The type of result which is expected by the server. Commonly used values are `json` and `jsonp`. For more information, refer to the `jQuery.ajax` documentation.

### transport-update-type `String`

The type of request that will be made (`POST`, `GET`, `PUT`, or `DELETE`). The default request is `GET`. For more information, refer to the `jQuery.ajax` documentation.

### transport-update-url `String | Function`

The URL to which the request is sent. If `transport-update-url` is set to a function, the data source will invoke it and use the result as the URL.

## Suggested Links

* [`Transport` in Kendo UI DataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/transport)
