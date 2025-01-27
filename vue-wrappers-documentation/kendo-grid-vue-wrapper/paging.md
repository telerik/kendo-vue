---
title: Paging
page_title: Vue Grid Wrapper - Paging - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to enable paging to be able to split content into pages."
slug: paging_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/paging/"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/paging"></WrapperBanner></div>

# Paging

The Kendo UI Grid wrapper for Vue is platform-agnostic&mdash;it works with HTTP requests to send and receive JSON payload.

> To configure the paging functionality of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug paging_grid %}).

For example, to bind the component to a specific data subset (only to a particular page), instruct the `dataSource` to use [`serverPaging`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-serverPaging). In this way, it will directly use the received data. The same rule applies to the filtering, grouping, aggregation, and sorting operations. For more information on paging, refer to the documentation of the [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/paging).

## Basic Usage

By default, paging is disabled and the `:pageable` option is set to `false`. To enable paging:

1. Set `pageable` to `true`.
1. Indicate the number of records for the Grid to display on each page.
1. Indicate the total number of records in the dataset.
1. Specify the `pageSize` on the `dataSource` and the field in the dataset that will contain the total count of records.

To avoid including too much data in the HTML, which might slow down page performance, do the paging operations on the server by setting the `serverPaging` option on the `dataSource` to `true`. If you use server paging, you need to handle the requests to the server and respond appropriately.

When `serverPaging` is enabled, the `dataSource` sends the following default parameters to the server:
* `top`&mdash;Defines the number of records to send back in the response.
* `skip`&mdash;Defines the number of records to skip from the start of the dataset.

For example, to show the third page out of a 60-record dataset and you split the data into 10 records per page, the Kendo UI Data Grid wrapper for Vue will send `skip: 20, top: 10`.

{% meta height:660 %}
{% embed_file grid/paging/basic/main.vue preview %}
{% embed_file grid/paging/basic/main.js %}
{% endmeta %}

## Pager Visibility

If all Kendo UI Grid wrapper for Vue items fit into a single page, you do not have to display the pager. The Grid toggles the pager visibility by using the `pageable-always-visible` configuration property. By default, the Grid shows the pager even when the total number of items in the DataSource is less than the `pageSize`.

If `value` is set to `false`, the behavior of the Grid is the following:
* When the total number of items which are initially set in the DataSource is less than the `pageSize` number, the pager will be hidden.
* When the total number of items which are initially set in the DataSource is greater than or equal to the `pageSize` number, the pager will be displayed.
* When the total number of items in the DataSource becomes smaller than the `pageSize` number (after delete or filter operations, or a `pageSize` change), the pager will be hidden.
* When the total number of items in the DataSource becomes greater than or equal to the `pageSize` number (after an insert or filter operations, or a `pageSize` change), the pager will be displayed.

{% meta height:660 %}
{% embed_file grid/paging/pager/main.vue preview %}
{% embed_file grid/paging/pager/main.js %}
{% endmeta %}

## Suggested Links

* [Paging of the Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/paging)
* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Paging in the Native Vue Grid by Kendo UI]({% slug paging_grid %})
