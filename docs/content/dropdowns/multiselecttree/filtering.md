---
title: Filtering
description: "Display the records of a Kendo UI for Vue MultiSelectTree that meet specified criteria in Vue projects."
slug: filtering_multiselecttree
position: 20
---

# Filtering

To enable the filtering functionality, set the [`filterable`]({% slug api_dropdowns_multiselecttreeprops %}#toc-filterable) property to `true`.

<div data-component="StartFreeTrialSection"></div>

## Basic Configuration

When the filtering functionality is enabled, the MultiSelectTree component renders a filter input in the drop-down list. On every character input, the MultiSelectTree triggers a [`onFilterChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:440 %}
{% embed_file multiselecttree/filtering/main.vue preview %}
{% embed_file multiselecttree/filtering/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}

## Visualize Filtering

You can toggle the [`loading`]({% slug api_dropdowns_multiselecttreeprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:440 %}
{% embed_file multiselecttree/filtering-with-delay/main.vue preview %}
{% embed_file multiselecttree/filtering-with-delay/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
