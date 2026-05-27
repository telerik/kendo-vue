---
title: Widths
description: "Get started with the Kendo UI for Vue Native TreeList and set up the widths of its columns."
slug: width_treelist
position: 1
---

# Column Widths

By default, the Kendo UI for Vue Native TreeList is responsive and has no fixed width&mdash;the component behaves like an HTML table and expands to the width of the parent element.

## Getting Started

By default, the TreeList will equally divide its width between its columns and it will responsively expand or shrink them when the width of its parent container is changed.

* To set the column widths of the TreeList, use the [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) property when defining its columns.
* To set the `width` of the TreeList `wrapper` element, use the TreeList `style` property.
* To set the width and any other property of the underlying HTML table, use the `tableProps` property of the TreeList which allows you to quickly resize the TreeList in the desired units.

## Setting Column Widths in Percentage

To set the TreeList column widths in percentage, set the width values through the [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) property when defining its columns. The width of the `wrapper` and `table` HTML block elements of the TreeList defaults to `auto` and the browser will expand them according to the available space. If your project requires you to limit the TreeList width, set the wrapper width through the TreeList [`style`]({% slug api_treelist_treelistprops %}#toc-wrapperstyle) property.

{% meta height:580 %}
{% embed_file column-width-percentage/main.vue preview %}
{% embed_file column-width-percentage/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Setting Fixed Column Width

To set the TreeList column widths in pixels, set the width values through the [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) property of the `TreeListColumnProps`, and the `wrapper` and `table` HTML widths which will be the sum of the widths of all columns.

{% meta height:580 %}
{% embed_file column-width-fixed/main.vue preview %}
{% embed_file column-width-fixed/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the style TreeList Prop]({% slug api_treelist_treelistprops %}#toc-wrapperstyle)
* [API Reference of the tableProps TreeList Prop]({% slug api_treelist_treelistprops %}#toc-tableprops)
* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
