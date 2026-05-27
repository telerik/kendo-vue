---
title: Filtering
description: "Display the records of a Kendo UI for Vue DropDownTree that meet specified criteria in Vue projects."
slug: filtering_dropdowntree
position: 20
---

# Filtering

To enable the filtering functionality, set the [`filterable`]({% slug api_dropdowns_dropdowntreeprops %}#toc-filterable) property to `true`.

<div data-component="StartFreeTrialSection"></div>

## Basic Configuration

When the filtering functionality is enabled, the DropDownTree component renders a filter input in the drop-down list. On every character input, the DropDownTree triggers a [`onFilterChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.



{% meta height:440 %}
{% embed_file dropdowntree/filtering/main.vue preview %}
{% embed_file dropdowntree/filtering/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


## Visualize Filtering

You can toggle the [`loading`]({% slug api_dropdowns_dropdowntreeprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.


{% meta height:440 %}
{% embed_file dropdowntree/filtering-loading/main.vue preview %}
{% embed_file dropdowntree/filtering-loading/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
