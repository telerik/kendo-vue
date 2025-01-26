---
title: Data Binding
page_title: Data Binding - DropDownList - Kendo UI for Vue
description: "Bind the Kendo UI DropDownList wrapper for Vue to local data arrays or remote data services."
slug: databinding_dropdownlist_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdownlist/binding/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/dropdownlist/binding"></WrapperBanner></div>

# Data Binding

The DropDownList enables you to bind it to a list of possible values.

To provide suggestions, bind the DropDownList to either:
* [Local data arrays](#toc-binding-to-local-data-arrays), or
* [Remote data services](#toc-binding-to-remote-data-services).

Locally defined values are best for small, fixed sets of suggestions. For larger datasets, use remote suggestions.

## Binding to Local Data Arrays

The DropDownList enables you to bind to a list of possible values.

To configure and provide the DropDownList suggestions locally, bind it to a local data array by using the [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview) component.

{% meta height:350 %}
{% embed_file dropdownlist/binding/local/main.vue preview %}
{% embed_file dropdownlist/binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To initialize the DropDownList by binding it to a remote data service, use the [Data Source component](https://docs.telerik.com/kendo-ui/framework/datasource/overview). Remote data binding is appropriate for larger datasets, so that items are loaded on demand when displayed. You can use the DataSource for serving data from a variety of data services such as [XML](https://en.wikipedia.org/wiki/XML), [JSON](https://en.wikipedia.org/wiki/JSON), and [JSONP](https://en.wikipedia.org/wiki/JSONP).

{% meta height:350 %}
{% embed_file dropdownlist/binding/remote/main.vue preview %}
{% embed_file dropdownlist/binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DropDownList for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dropdownlist/overview)
* [API Reference of the DropDownList Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist)
