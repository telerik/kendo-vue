---
title: Filtering
description: "Display the records of a Kendo UI for Vue Native DropDownList that meet specified criteria in Vue projects."
slug: filtering_dropdownlist
position: 40
---

# Filtering

To enable the filtering functionality, set the [`filterable`]({% slug api_dropdowns_dropdownlistprops %}#toc-filterable) property to `true`.

## Basic Configuration

When the filtering functionality is enabled, the component renders a filter input in the drop-down list. On every character input, the component triggers a [`onFilterChange`]({% slug api_dropdowns_dropdownlistprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:350 %}
{% embed_file dropdownlist/filtering/basic/main.vue preview %}
{% embed_file dropdownlist/filtering/basic/main.js %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_dropdownlistprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.


{% meta height:350 %}
{% embed_file dropdownlist/filtering/delay/main.vue preview %}
{% embed_file dropdownlist/filtering/delay/main.js %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the DropDownList only after typing a minimum number of characters.

{% meta height:350 %}
{% embed_file dropdownlist/filtering/minfilter/main.vue preview %}
{% embed_file dropdownlist/filtering/minfilter/main.js %}
{% endmeta %}

## Filtering with Remote Data and Virtualization

The following example demonstrates how to configure the DropDownList to use remote data along with data caching, virtual scrolling, and filtering.

{% meta height:400 %}
{% embed_file dropdownlist/filtering/remote-data/main.vue preview %}
{% embed_file dropdownlist/filtering/remote-data/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
