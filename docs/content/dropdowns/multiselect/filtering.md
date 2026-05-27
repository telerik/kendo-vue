---
title: Filtering
description: "Display the records of a Kendo UI for Vue Native MultiSelect that meet specified criteria in Vue projects."
slug: filtering_multiselect
position: 40
---

# Filtering

To enable the filtering functionality of the Kendo UI for Vue Native MultiSelect, set the [`filterable`]({% slug api_dropdowns_multiselectprops %}#toc-filterable) property to `true`.

## Basic Configuration

On every user modification of the input value, the MultiSelect triggers an [`filterchange`]({% slug api_dropdowns_multiselectprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:350 %}
{% embed_file multiselect/filtering/basic/main.vue preview %}
{% embed_file multiselect/filtering/basic/main.js %}
{% embed_file shared/countries.js %}
{% endmeta %}



To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_multiselectprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:350 %}
{% embed_file multiselect/filtering/with-delay/main.vue preview %}
{% embed_file multiselect/filtering/with-delay/main.js %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the drop-down list of the MultiSelect only after typing a minimum number of characters.

{% meta height:350 %}
{% embed_file multiselect/filtering/minfilter/main.vue preview %}
{% embed_file multiselect/filtering/minfilter/main.js %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Filtering with Remote Data and Virtualization

The following example demonstrates how to configure the MultiSelect to use remote data along with data caching, virtual scrolling, and filtering.

{% meta height:350 %}
{% embed_file multiselect/filtering/virtualization-remote-data/main.vue preview %}
{% embed_file multiselect/filtering/virtualization-remote-data/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
