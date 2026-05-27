---
title: Grouping
description: "Get started with the grouping functionality of the Kendo UI for Vue Native DropDownList and learn how to display grouped data."
slug: grouping_dropdownlist
position: 50
---

# Grouping

The Kendo UI for Vue Native DropDownList provides the option to display grouped data inside the component. The current article discusses the following DropDownList Grouping scenarios:
* [Basic usage of the grouping functionality](#toc-basic-usage)
* [Grouping with filtering](#toc-grouping-with-filtering)
* [Customization of the different popup elements when working with grouped data](#toc-grouping-customization)


## Basic Usage

To configure the data grouping in the DropDownList component you need to define the [`groupField`]({% slug api_dropdowns_dropdownlistprops %}#toc-groupfield)property. The `groupField` property sets the field that defines the group name in each data item.

> The DropDownList doesn't internally group the data passed to it. To use the component in a grouping scenario, you need to use the `groupBy` method available in the Kendo UI for Vue Native DataQuery package.

The following example demonstrates the `DropDownList` data grouping in action.

{% meta height:340 %}
{% embed_file dropdownlist/grouping/basic/main.vue preview %}
{% embed_file dropdownlist/grouping/basic/main.js %}
{% embed_file dropdownlist/grouping/basic/grouping-data.js %}
{% endmeta %}

## Grouping with Filtering

The following example demonstrates how to configure the DropDownList in a Grouping + Filtering scenario.

{% meta height:400 %}
{% embed_file dropdownlist/grouping/filtering/main.vue preview %}
{% embed_file dropdownlist/grouping/filtering/main.js %}
{% embed_file dropdownlist/grouping/filtering/grouping-data.js %}
{% endmeta %}

## Grouping Customization
Using the [itemRender]({% slug api_dropdowns_dropdownlistprops %}#toc-itemrender), [groupHeaderItemRender]({% slug api_dropdowns_dropdownlistprops %}#toc-groupheaderitemrender), and [groupStickyHeaderItemRender]({% slug api_dropdowns_dropdownlistprops %}#toc-groupstickyheaderitemrender) of the Kendo UI for Vue Native DropDownList component we can customize its `data items`, `group headers`, and the `'sticky' header` that displays the top-most group that is
currently being scrolled.

By customizing the templates passed to each of the listed above properties you can modify the grouped DropDownList data the way your scenario needs it.

{% meta height:340 %}
{% embed_file dropdownlist/grouping/custom/main.vue preview %}
{% embed_file dropdownlist/grouping/custom/main.js %}
{% embed_file dropdownlist/grouping/custom/grouping-data.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DropDownListProps]({% slug api_dropdowns_dropdownlistprops %})
