---
title: Data Binding
page_title: Data Binding - Spreadsheet - Kendo UI for Vue
description: "Bind the Kendo UI Spreadsheet wrapper for Vue to local data arrays."
slug: databinding_spreadsheet
position: 1
---

<div><WrapperBanner></WrapperBanner></div>

# Data Binding

The Spreadsheet enables you to bind it to a list of possible values.

To populate the Spreadsheet with data, bind it to either:
* [Local data arrays](#toc-binding-to-local-data-arrays), or
* [Remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

To populate the Spreadsheet with local data:

1. Define the data array in the `data` object of the Vue application.
1. Refer the `data` object in the `<kendo-spreadsheet-sheet>` component through the `:data-source` prop.

{% meta height:460 %}
{% embed_file data-binding/local/main.vue preview %}
{% embed_file data-binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

The following example demonstrates how to bind the spreadsheet to remote data.

{% meta height:460 %}
{% embed_file data-binding/remote/main.vue preview %}
{% embed_file data-binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI Spreadsheet for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/spreadsheet/overview)
* [API Reference of the Spreadsheet Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet)
