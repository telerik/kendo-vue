---
title: Data Binding
page_title: Data Binding - ComboBox - Kendo UI for Vue
description: "Bind the Kendo UI ComboBox wrapper for Vue to local data arrays or remote data services."
slug: databinding_combobox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/combobox/binding/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/combobox/binding"></WrapperBanner></div>

# Data Binding

The ComboBox enables you to bind it to a list of possible values.

To provide suggestions, bind the ComboBox to either:
* [Local data arrays](#toc-binding-to-local-data-arrays), or
* [Remote data services](#toc-binding-to-remote-data-services).

Locally defined values are best for small, fixed sets of suggestions. For larger datasets, use remote suggestions.

## Binding to Local Data Arrays

The ComboBox enables you to bind to a list of possible values.

To configure and provide the ComboBox suggestions locally, bind it to a local data array by using the [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview) component.

{% meta height:350 %}
{% embed_file combobox/binding/local/main.vue preview %}
{% embed_file combobox/binding/local/main.js %}
{% endmeta %}

## Binding to Remote Data Services

To initialize the ComboBox by binding it to a remote data service, use the [Data Source component](https://docs.telerik.com/kendo-ui/framework/datasource/overview). Remote data binding is appropriate for larger datasets, so that items are loaded on demand when displayed. You can use the DataSource for serving data from a variety of data services such as [XML](https://en.wikipedia.org/wiki/XML), [JSON](https://en.wikipedia.org/wiki/JSON), and [JSONP](https://en.wikipedia.org/wiki/JSONP).

{% meta height:350 %}
{% embed_file combobox/binding/remote/main.vue preview %}
{% embed_file combobox/binding/remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI ComboBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/combobox/overview)
* [API Reference of the ComboBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox)
