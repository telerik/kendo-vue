---
title: Filtering
page_title: Filtering - DataSource - Kendo UI for Vue
description: "Filter data locally or on the server and handle the filtered data when working with the Kendo UI DataSource wrapper for Vue."
slug: filtering_datasource
position: 3
---

<div><WrapperBanner></WrapperBanner></div>

# Filtering

The DataSource accepts a list of one or more filter expressions.

You can combine them by using the `and` or `or` logical operators. For more information on the filter expression structure, refer to the documentation on the [`filter`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-filter) configuration option.

## Local Filtering of Data

Local filtering is convenient for small datasets.

The following example demonstrates how to match the `dataItem` to the filtering criteria and log it in the console.

{% meta height:350 %}
{% embed_file datasource/filtering/local/main.vue %}
{% embed_file datasource/filtering/local/main.js %}
{% endmeta %}

## Server Filtering of Data

Server filtering is convenient for large datasets. To apply server filtering of data, set the [`schema`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-schema) and the [`filter`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-filter) properties.

The following example demonstrates how to filter data on the server and handle the filtered data which is logged in the console after filtering is applied. Note that the data which is returned by the `transport` is evaluated in the same way.

```html-no-run
<datasource :filter="filterConfiguration"
				  :schema-data="'result'"
				  :server-filtering="true"
				  :transport-read-url="{remote service}">
</datasource>
```
```js
// The JSON result from "{remote service}"
{
	result: [
		{ name: "Tea", category: "Beverages" },
		{ name: "Coffee", category: "Beverages" },
		{ name: "Ham", category: "Food" }
	]
}
```

## Suggested Links

* [Kendo UI Data Source for jQuery](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [API Reference of the Data Source Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
