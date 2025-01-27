---
title: DataSource API
description: "API Index | DataSource"
api_reference: true
slug: api_datasourcecomponent
---


# DataSource

## Directive

`kendo-datasource`

## Props

### aggregate `Array`

The aggregates which are calculated when the data source populates with data ([`aggregate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/aggregate)). The supported composite props are available in [`AggregateProps`]({% slug api_datasource_aggregateprops %}).

The supported aggregates are:

* `average`&mdash;Only for `Number`.
* `count`&mdash;For `String`, `Number`, and `Date`.
* `max`&mdash;For `Number` and `Date`.
* `min`&mdash;For `Number` and `Date`.
* `sum`&mdash;Only for `Number`.

### auto-sync `Boolean`

If `auto-sync` is set to `true`, the data source automatically saves any changed data items by calling the `sync` method ([`autoSync` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/autosync)). By default, changes are not automatically saved.

### batch `Boolean`

If `batch` is set to `true`, the data source will batch CRUD operation requests ([`batch` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/batch)). For example, updating two data items will result in a single HTTP request instead of two. By default, the data source makes an HTTP request for every CRUD operation.

### data `Array | String`

The array of data items which the data source contains ([`data` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/data)). If `schema.model` is set, the data source wraps those items as `kendo.data.ObservableObject` or `kendo.data.Model`. If the `schema.type` option is set to `xml`, `data` can be set to a string value.

### filter `Array | Object`

The filters which are applied to the data items ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/filter)). By default, no filter is applied. The supported composite props are available in [`FilterProps`]({% slug api_datasource_filterprops %}).

### group `Array | Object`

The grouping configuration of the data source ([`group` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/group)). If `group` is set, the data items will be grouped when the data source is populated. By default, grouping is not applied. The supported composite props are available in [`GroupProps`]({% slug api_datasource_groupprops %}).

### in-place-sort `Boolean`

If `in-place-sort` is set to `true`, the original array that is used as data is sorted when the sorting operation is performed ([`inPlaceSort` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/inplacesort)). `in-place-sort` is supported only with local data when bound to a JavaScript array through the `data` option.

### offline-storage `String | Object`

The offline storage key or custom offline storage implementation ([`offlineStorage` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/offlinestorage)).

### page `Number`

The page of data which the data source will return when the `view` method is invoked or will request from the remote service ([`page` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/page)).

### page-size `Number`

The number of data items per page ([`pageSize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/pagesize)). The `page-size` property has no default value and to use paging, you have to set a `pageSize` value.

### schema `Object`

The configuration for parsing the remote service response ([`schema` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/schema)). The supported composite props are available in [`SchemaProps`]({% slug api_datasource_schemaprops %}).

### server-aggregates `Boolean`

If `server-aggregates` is set to `true`, the data source will leave the aggregate calculation to the remote service ([`serverAggregates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/serveraggregates)). By default, the data source calculates aggregates on the client. For more information and tips about client and server data operations, refer to the introductory article of the DataSource.

### server-filtering `Boolean`

If `server-filtering` is set to `true`, the data source will leave the filtering implementation to the remote service ([`serverFiltering` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/serverfiltering)). By default, the data source performs filtering on the client and the filtering operation is sent to the server according to the jQuery conventions. For example, the `{ logic: `and`, filters: [ { field: `name`, operator: `startswith`, value: `Jane` } ] }` filter is sent as `filter[logic]: and; filter[filters][0][field]: name; filter[filters][0][operator]: startswith or filter[filters][0][value]: Jane`. To send the filter option in a different format, use the `parameterMap` option. For more information and tips about client and server data operations, refer to the introductory article of the DataSource.

### server-grouping `Boolean`

If `server-grouping` is set to `true`, the data source will leave the grouping implementation to the remote service ([`serverGrouping` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/servergrouping)). By default, the data source performs grouping on the client and the grouping operation is sent to the server according to the jQuery conventions. For example, the `{ field: `category`, dir: `desc` }` is sent as `group[0][field]: category or group[0][dir]: desc`. To send the group option in a different format, use the `parameterMap` option. For more information and tips about client and server data operations, refer to the introductory article of the DataSource.

### server-paging `Boolean`

If `server-paging` is set to `true`, the data source will leave the data item paging implementation to the remote service ([`serverPaging` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/serverpaging)). By default, the data source performs paging on the client.

When paging is enabled, the following options are sent to the server:

* `page`&mdash;The page of data item that will be returned (1 indicates the first page).
* `pageSize`&mdash;The number of the data items that will be returned.
* `skip`&mdash;The number of the data items that will be skipped.
* `take`&mdash;The number of the data items that will be returned (the same as `pageSize`).

To send the paging options in a different format, use the `parameterMap` option. For more information and tips about client and server data operations, refer to the introductory article of the DataSource.

### server-sorting `Boolean`

If `server-sorting` is set to `true`, the data source will leave the data item sorting implementation to the remote service ([`serverSorting` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/serversorting)). By default, the data source performs sorting on the client and the sorting is sent to the server according to the jQuery conventions. For example, the `{ field: `age`, dir: `desc` }` sorting operation is sent as `sort[0][field]: age or sort[0][dir]: desc`. To send the sorting options in a different format, use the `parameterMap` option. For more information and tips about client and server data operations, refer to the introductory article of the DataSource.

### sort `Array | Object`

The sort order which will be applied to the data items ([`sort` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/sort)). By default, the data items are not sorted. The supported composite props are available in [`SortProps`]({% slug api_datasource_sortprops %}).

### transport `Object`

The configuration for loading and saving the data items ([`transport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/transport)). The supported composite props are available in [`TransportProps`]({% slug api_datasource_transportprops %}).

A data source is remote or local based on the way it retrieves data items.

* Remote data sources load and save data items from and to a remote end-point (also known as remote service or server). The `transport` option describes the remote service configuration&mdash;URL, HTTP verb, HTTP headers, and others&mdash;and can also be used to implement custom data loading and saving.
* Local data sources are bound to a JavaScript array over the `data` option.

### type `String`

If `type` is set, the data source uses a predefined transport and schema ([`type` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/type)).

The supported values are:

* `odata`&mdash;Supports the OData v.2 protocol.
* `odata-v4`&mdash;Partially supports OData version 4 or SignalR.

## Events

### change: `Function`

Fires when the data source is populated from a JavaScript array or a remote service, when a data item is inserted, updated, or removed, or when the data items are paged, sorted, filtered, or grouped ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/change)).The event handler function context (available through the this keyword) will be set to the data source instance.

### error: `Function`

Fires when a request to the remote service fails ([`error` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/error)).The event handler function context (available through the this keyword) will be set to the data source instance.

### push: `Function`

Fires when the data source receives a push notification or the `pushCreate`, `pushUpdate`, or `pushDestroy` methods are called ([`push` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/push)).

### requestend: `Function`

Fires when a remote service request is finished ([`requestEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/requestend)).The event handler function context (available through the this keyword) will be set to the data source instance.

### requeststart: `Function`

Fires when the data source makes a remote service request ([`requestStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/requeststart)). The event handler function context (available through the this keyword) will be set to the data source instance. You can prevent the remote request by executing `e.preventDefault()` in the handler function.

### sync: `Function`

Fires after the data source saves data item changes ([`sync` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/sync)). The data source saves the data item changes when the `sync` method is called. The event handler function context (available through the this keyword) will be set to the data source instance.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#methods). 

### kendoWidget

##### returns

Returns the Kendo UI DataSource instance.
