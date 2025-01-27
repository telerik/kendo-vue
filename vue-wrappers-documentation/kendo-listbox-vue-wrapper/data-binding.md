---
title: Data Binding
page_title: Data Binding - ListBox - Kendo UI for Vue
description: "Bind the Kendo UI ListBox wrapper for Vue to local data arrays or remote data services."
slug: databinding_listbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/listbox"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/listbox"></WrapperBanner></div>    

# Data Binding

The ListBox provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) and to [remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

To populate the ListBox with local data, bind it to a local data array by using the [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview) component.

{% meta height:550 %}
{% embed_file binding/local/main.vue preview %}
{% embed_file binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To initialize the ListBox by binding it to a remote data service, use the [Kendo UI Data Source component](https://docs.telerik.com/kendo-ui/framework/datasource/overview). If a data source is not provided in its configuration settings, the ListBox uses the options from the HTML elements as its data source. You can configure the widget for remote operations. For more information, refer to the article on [CRUD operations](https://docs.telerik.com/kendo-ui/framework/datasource/crud#remote-transport-crud-operations).

{% meta height:550 %}
{% embed_file binding/remote/main.vue preview %}
{% embed_file binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI ListBox for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox)
* [API Reference of the ListBox](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox)
