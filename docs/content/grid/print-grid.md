---
title: Printing the Grid
description: "Learn how to print the Kendo UI for Vue Grid in different use case scenarios."
slug: print_grid
position: 250
---

# Printing the Kendo UI for Vue Grid

This article shows how to print the Grid in multiple use-case scenarios using the browser's print window.

The scenarios discussed below are:

* [Printing a Scrollable Grid](#toc-printing-a-scrollable-grid)
* [Printing a Pageable Grid](#toc-printing-a-pageable-grid)
* [Controlling the Print Output](#toc-control-the-print-output)

> To ensure the Grid is ready for printing, you may need to manipulate its dimensions using the approaches discussed in this article or by applying custom CSS. The printing requires the retrieving of the correct dataset in advance. Due to various use cases, such adjustments should be implemented by the developer.


## Printing a Scrollable Grid

The following example shows how to print a scrollable Grid by:
* Changing Grid's dimensions before the printing
* Setting component's **scrollable** property to `none` for the time of printing
* Restoring the original Grid configuration after printing

{% meta height:630 %}
{% embed_file print/scrollable/main.vue preview %}
{% embed_file print/scrollable/main.js %}
{% endmeta %}


## Printing a Pageable Grid

The example shows how to prepare the pagable Grid for printing by:
* Changing Grid's dimensions before the printing
* Passing to the component all the data that needs to be printed
* Setting the **scrollable** property to `none` for the time of printing
* Restoring the original configuration after printing

{% meta height:630 %}
{% embed_file print/pageable/main.vue preview %}
{% embed_file print/pageable/main.js %}
{% endmeta %}


## Control the Print Output

The scenarios where we have multiple columns rendered inside the Grid or the column's length is big are not uncommon. In these cases, we still need to print our data. Below you will find how to handle such scenarios by:
* [Controlling the list of printable columns](#toc-control-the-list-of-printable-columns)
* [Dynamically change the width of Grid's columns in a way they fit the printing size](#toc-change-the-width-of-the-printable-columns)

### Control the List of Printable Columns

The following example demonstrates how to control which Grid columns will be printed.

This approach is useful for scenarios when you have that many columns that all of them cannot be visualized inside the print window. Another option you can use the following implementation for is when only essential data should be printed. To test the example, deselect some of the checkboxes and print the Grid.

{% meta height:760 %}
{% embed_file print/scrollable-controlled/main.vue preview %}
{% embed_file print/scrollable-controlled/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

### Change the Width of the Printable Columns

The below example shows how we can resize the Grid's columns just before printing and then restore the original width when the printing is done. Using this approach, each column can have a specific width that is applied only during printing.

{% meta height:600 %}
{% embed_file print/control-column-widths/main.vue preview %}
{% embed_file print/control-column-widths/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}


## Known Limitations

It is recommended to use the above printing techniques with smaller sets of data. While it is possible to print larger data sets, doing so will result in the generation of many DOM elements that could slow the browser down or make it unresponsive.

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [Kendo UI for Vue Data Grid High-Level Overview](https://www.telerik.com/kendo-vue-ui/grid)
