---
title: Data Binding
page_title: Data Binding - AutoComplete - Kendo UI for Vue
description: "Bind the Kendo UI AutoComplete wrapper for Vue to local data arrays or remote data services."
slug: databinding_autocomplete_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/autocomplete/binding/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/autocomplete/binding"></WrapperBanner></div>

# Data Binding

The AutoComplete enables you to bind it to a list of possible values.

To provide suggestions, bind the AutoComplete to either:
* [Local data arrays](#toc-binding-to-local-data-arrays), or
* [Remote data services](#toc-binding-to-remote-data-services).

Locally defined values are best for small, fixed sets of suggestions. For larger datasets, use remote suggestions.

## Binding to Local Data Arrays

The AutoComplete enables you to bind to a list of possible values.

To configure and provide the AutoComplete suggestions locally, bind it to a local data array by using the [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview) component.

{% meta height:350 %}
{% embed_file autocomplete/binding/local/main.vue preview %}
{% embed_file autocomplete/binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To initialize the AutoComplete by binding it to a remote data service, use the [Data Source component](https://docs.telerik.com/kendo-ui/framework/datasource/overview). Remote data binding is appropriate for larger datasets, so that items are loaded on demand when displayed. You can use the DataSource for serving data from a variety of data services such as [XML](https://en.wikipedia.org/wiki/XML), [JSON](https://en.wikipedia.org/wiki/JSON), and [JSONP](https://en.wikipedia.org/wiki/JSONP).

{% meta height:350 %}
{% embed_file autocomplete/binding/remote/main.vue preview %}
{% embed_file autocomplete/binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview)
* [Kendo UI AutoComplete for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/autocomplete/overview)
* [API Reference of the AutoComplete Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete)
