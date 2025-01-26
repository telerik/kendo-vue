---
title: Data Binding
page_title: Data Binding - Menu - Kendo UI for Vue
description: "Bind the Kendo UI Menu wrapper for Vue to local data arrays or remote data services."
slug: databinding_menu_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/menu/data-binding/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/layout/menu/data-binding"></WrapperBanner></div>    

# Data Binding

The Menu provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) and to [remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

To populate the Menu with local data, bind it to a local data array by using the [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview) component.

{% meta height:300 %}
{% embed_file menu/binding/local/main.vue preview %}
{% embed_file menu/binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To initialize the Menu by binding it to a remote data service, use the [Kendo UI Data Source component](https://docs.telerik.com/kendo-ui/framework/datasource/overview). Remote data binding is appropriate for larger datasets, so that items are loaded on demand when displayed. You can use the DataSource for serving data from a variety of data services such as [XML](https://en.wikipedia.org/wiki/XML), [JSON](https://en.wikipedia.org/wiki/JSON), and [JSONP](https://en.wikipedia.org/wiki/JSONP).

{% meta height:300 %}
{% embed_file menu/binding/remote/main.vue preview %}
{% embed_file menu/binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI Menu for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/menu/overview)
* [API Reference of the Menu Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu)
