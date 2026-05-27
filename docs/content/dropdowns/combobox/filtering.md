---
title: Filtering
description: "Display the records of a Kendo UI for Vue Native ComboBox that meet specified criteria in Vue projects."
slug: filtering_combobox
position: 40
---

# Filtering

To enable the filtering functionality of the Kendo UI for Vue Native ComboBox, set the [`filterable`]({% slug api_dropdowns_comboboxprops %}#toc-filterable) property to `true`.

## Basic Configuration

On every user modification of the input value, the ComboBox triggers an [`onFilterChange`]({% slug api_dropdowns_comboboxprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:350 %}
{% embed_file combobox/filtering/basic/main.vue preview %}
{% embed_file combobox/filtering/basic/main.js %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_comboboxprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:350 %}
{% embed_file combobox/filtering/loading/main.vue preview %}
{% embed_file combobox/filtering/loading/main.js %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the drop-down list of the ComboBox only after typing a minimum number of characters.

{% meta height:350 %}
{% embed_file combobox/filtering/minfilter/main.vue preview %}
{% embed_file combobox/filtering/minfilter/main.js %}
{% endmeta %}

## Filtering with Remote Data and Virtualization

The following example demonstrates how to configure the ComboBox to use remote data along with data caching, virtual scrolling, and filtering.

{% meta height:350 %}
{% embed_file combobox/filtering/remote/main.vue preview %}
{% embed_file combobox/filtering/remote/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
