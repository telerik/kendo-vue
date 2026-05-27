---
title: Virtualization
description: "Enable the virtual scrolling functionality of the Kendo UI for Vue MultiSelect in Vue projects."
slug: virtualization_multiselect
position: 80
---

# Virtualization

Virtual scrolling provides an alternative to paging and is useful for displaying large sets of data.

The virtualization functionality uses a fixed amount of list items in the pop-up list of the component. While the user is scrolling the pop-up list, the MultiSelect requests and displays only the visible items.

To enable virtualization, configure the [`pagechange`]({% slug api_dropdowns_multiselectprops %}#toc-onpagechange) event and the composite [`virtual`]({% slug api_dropdowns_multiselectprops %}#toc-virtual) property which contains the following fields:

* `total`&mdash;Represents the number of records.
* `skip`&mdash;Represents the start of the sub-set of data which is loaded in the MultiSelect.
* `pageSize`&mdash;Indicates the size of the sub-set of data.
* `onPageChange`&mdash;Provides the data for each page through the `onPageChange` event handler.

> * In order for the virtualization to work properly, the items in the popup list must have the same height. If the content of an item does not fit in a single row, the height of this item will be different from the height of the other items.
> * You also need to make sure that the `pageSize` value is at least equal to the number of the visible pop-up items plus two.

## Basic Configuration

The following example demonstrates how to set the virtualization of the MultiSelect.

{% meta height:400 %}
{% embed_file multiselect/virtualization/basic/main.vue preview %}
{% embed_file multiselect/virtualization/basic/main.js %}
{% endmeta %}

## Virtualization with Filtering

If you use virtualization in your project alongside filtering, scrolling will be reset every time the value of the filter input is changed.

{% meta height:400 %}
{% embed_file multiselect/virtualization/filtering/main.vue preview %}
{% embed_file multiselect/virtualization/filtering/main.js %}
{% endmeta %}

## Suggested Links

* [Virtualization with Filtering and Remote Data]({% slug filtering_multiselect %}#toc-filtering-with-remote-data-and-virtualization)
* [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
