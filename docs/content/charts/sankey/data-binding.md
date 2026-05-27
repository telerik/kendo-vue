---
title: Data Binding
description: 'Learn how to bind your data to the Kendo UI for Vue Sankey Chart by using the provided data property.'
slug: data_binding_sankey
position: 20
---

# Data Binding

You can bind the Sankey Chart to data by using the component's [`dataNodes`]({% slug api_charts_sankeyprops %}#toc-datanodes) and [`dataLinks`]({% slug api_charts_sankeyprops %}#toc-datalinks) properties. They require your data to be in specific format. However, if your data has a different format, you must process and structure it before feeding it to the component.

## Binding to SankeyData

The following example demonstrates how to set the data in the required format.

{% meta height:315 %}
{% embed_file sankey/overview/main.vue preview %}
{% embed_file sankey/overview/main.js %}
{% endmeta %}

## Binding to Flat Data

When the data is present as an array of objects, it needs to be transformed to the [`dataNodes`]({% slug api_charts_sankeyprops %}#toc-datanodes) and [`dataLinks`]({% slug api_charts_sankeyprops %}#toc-datalinks) format.

This is achieved in the below example using the `createSankeyData` method. It takes an array of data, `dimensions`, and `measure` as input parameters and returns an object that conforms to the `dataNodes` and `dataLinks` interfaces. The `dimensions` refer to the Sankey `nodes` while the `measure` refers to the value that will be used to set the value of the `links`.

{% meta height:335 %}
{% embed_file sankey/data-binding/datasets-objects/main.vue preview %}
{% embed_file sankey/data-binding/datasets-objects/main.js %}
{% endmeta %}

## Customize Nodes from Flat Data

To [customize the element instances]({% slug customization_sankey %}#toc-customizing-element-instances) when the data is an array of objects, transform the `data` that stores the returned value of the `createSankeyData` method.

The following example demonstrates this approach by mapping the `dataNodes` to set the color to `lightblue` for the nodes with an even id, and `lightgreen` for the nodes with an odd id.

{% meta height:335 %}
{% embed_file sankey/data-binding/datasets-customize-objects/main.vue preview %}
{% embed_file sankey/data-binding/datasets-customize-objects/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
