---
title: Filtering
description: "Display the records of a Kendo UI for Vue AutoComplete that meet specified criteria in Vue projects."
slug: filtering_autocomplete
position: 3
---

# Filtering

The AutoComplete enables you to display only those suggestion list items which meet specified criteria.

## Basic Configuration

On every user modification of the input value, the AutoComplete triggers an [`onChange`]({% slug api_dropdowns_autocompleteprops %}#toc-onchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:350 %}
{% embed_file autocomplete/filtering/basic/main.vue preview %}
{% embed_file autocomplete/filtering/basic/main.js %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_autocompleteprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:350 %}
{% embed_file autocomplete/filtering/loading/main.vue preview %}
{% embed_file autocomplete/filtering/loading/main.js %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the drop-down list of the AutoComplete only after typing a minimum number of characters.

{% meta height:350 %}
{% embed_file autocomplete/filtering/minfilter/main.vue preview %}
{% embed_file autocomplete/filtering/minfilter/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
