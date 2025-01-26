---
title: Grouping
page_title: Grouping - DataSource - Kendo UI for Vue
description: "Group data locally or on the server and handle the grouped data when working with the Kendo UI DataSource wrapper for Vue."
slug: grouping_datasource
position: 2
---

<div><WrapperBanner></WrapperBanner></div>

# Grouping

To generate grouped data on the server, make sure about the data format that is expected by the DataSource.

## Local Grouping of Data

Local grouping is convenient for small datasets.

The following example demonstrates how to locally group and handle the grouped data which is logged in the console after grouping is applied.  

{% meta height:350 %}
{% embed_file datasource/grouping/local/main.vue %}
{% embed_file datasource/grouping/local/main.js %}
{% endmeta %}

## Server Grouping of Data

Server grouping is convenient for large datasets. To apply server grouping of data, set the [`schema`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-schema) and the [`group`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-group) properties.

The following example demonstrates how to group data on the server and handle the grouped data which is logged in the console after grouping is applied. Note that the data which is returned by the `transport` is evaluated in the same way.

{% meta height:350 %}
{% embed_file datasource/grouping/server/main.vue %}
{% embed_file datasource/grouping/server/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Data Source for jQuery](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [API Reference of the Data Source Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
