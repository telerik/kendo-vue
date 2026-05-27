---
title: Virtualization
description: "Enable the virtual scrolling functionality of the Kendo UI for Vue Native DropDownList in Vue projects."
slug: virtualization_dropdownlist
position: 70
---

# Virtualization

Virtual scrolling provides an alternative to paging and is useful for displaying large sets of data.

The virtualization functionality uses a fixed amount of list items in the pop-up list of the component. While the user is scrolling the pop-up list, the DropDownList requests and displays only the visible items.

To enable virtualization, configure [`pagechange`]({% slug api_dropdowns_dropdownlistprops %}#toc-onpagechange) event and the composite [`virtual`]({% slug api_dropdowns_dropdownlistprops %}#toc-virtual) property which contains the following fields:

* `total`&mdash;Represents the number of records.
* `skip`&mdash;Represents the start of the sub-set of data which is loaded in the DropDownList.
* `pageSize`&mdash;Indicates the size of the sub-set of data.
* `onPageChange`&mdash;Provides the data for each page through the `onPageChange` event handler.

> * For the virtualization to work properly, the items in the popup list must have the same height. If the content of an item does not fit in a single row, the height of this item will be different from the height of the other items.
> * You also need to make sure that the `pageSize` value is at least equal to the number of the visible pop-up items plus two.

## Basic Configuration

The following example demonstrates how to set the virtualization of the DropDownList.

{% meta height:350 %}
{% embed_file dropdownlist/virtualization/main.vue preview %}
{% embed_file dropdownlist/virtualization/main.js %}
{% endmeta %}

## Virtualization with Filtering

If you use virtualization in your project alongside filtering, scrolling will be reset every time the value of the filter input is changed.

{% meta height:380 %}
{% embed_file dropdownlist/virtualization-filtering/main.vue preview %}
{% embed_file dropdownlist/virtualization-filtering/main.js %}
{% endmeta %}

## Virtualization with Grouping

The below example shows how we can use the DropDownList in a scenario with Grouping and Virtualization.

{% meta height:380 %}
{% embed_file dropdownlist/grouping/virtualization/main.vue preview %}
{% embed_file dropdownlist/grouping/virtualization/main.js %}
{% endmeta %}

## Suggested Links

* [Virtualization with Filtering and Remote Data]({% slug filtering_dropdownlist %}#toc-filtering-with-remote-data-and-virtualization)
* [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
