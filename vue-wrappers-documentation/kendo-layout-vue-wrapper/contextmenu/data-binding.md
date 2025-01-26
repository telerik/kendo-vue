---
title: Data Binding
page_title: Data Binding - ContextMenu - Kendo UI for Vue
description: "Bind the Kendo UI ContextMenu wrapper for Vue to local data arrays or remote data services."
slug: databinding_contextmenu_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/menu/context-menu/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/layout/menu/context-menu"></WrapperBanner></div>    

# Data Binding

The ContextMenu provides support for binding it to [local data arrays](#toc-binding-to-local-data-arrays) and to [remote data services](#toc-binding-to-remote-data-services).

## Binding to Local Data Arrays

To populate the ContextMenu with local data, bind it to a local data array by using the [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview) component.

{% meta height:300 %}
{% embed_file contextmenu/binding/local/main.vue preview %}
{% embed_file contextmenu/binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To initialize the ContextMenu by binding it to a remote data service, use the [Kendo UI Data Source component](https://docs.telerik.com/kendo-ui/framework/datasource/overview). Remote data binding is appropriate for larger datasets, so that items are loaded on demand when displayed. You can use the DataSource for serving data from a variety of data services such as [XML](https://en.wikipedia.org/wiki/XML), [JSON](https://en.wikipedia.org/wiki/JSON), and [JSONP](https://en.wikipedia.org/wiki/JSONP).

{% meta height:300 %}
{% embed_file contextmenu/binding/remote/main.vue preview %}
{% embed_file contextmenu/binding/remote/main.js %}
{% endmeta %}


## Suggested Links

* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI ContextMenu for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/menu/contextmenu)
* [API Reference of the ContextMenu Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu)
