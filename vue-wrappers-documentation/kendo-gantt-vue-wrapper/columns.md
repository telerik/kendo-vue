---
title: Columns
page_title: Columns - Gantt - Kendo UI for Vue
description: "Configure the column features of the Kendo UI Gantt wrapper for Vue."
slug: columns_gantt
position: 2
---

<div><WrapperBanner></WrapperBanner></div>

# Columns

The Gantt supports options for configuring the behavior of its columns.

To manage the columns of the Gantt, either:
* [Configure an object in the Vue data](#toc-using-the-data-object), or
* [Use the `kendo-gantt-column` component](#toc-using-the-kendo-gantt-columns-component).

Resizing of columns could be enabled via the `:resizable` prop of the Gantt.

## Using the data Vue Object

The following example demonstrates how to use the `data` object to specify the columns of the Gantt.

{% meta height:750 %}
{% embed_file columns/vue-object/main.vue preview %}
{% embed_file columns/vue-object/main.js %}
{% endmeta %}

## Using the kendo-gantt-columns Component

The following example demonstrates how to set the inline initialization of the `kendo-gantt-columns` component.

{% meta height:750 %}
{% embed_file columns/using-component/main.vue preview %}
{% embed_file columns/using-component/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/gantt/overview)
* [API Reference of the Gantt Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt)
