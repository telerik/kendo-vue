---
title: Overview
description: "Get an overview of the features the Kendo UI for Vue Native Sankey chart delivers and use the component in your Vue projects."
slug: overview_sankey
position: 0
---

# Kendo UI for Vue Native Sankey Chart Overview

Sankey charts allow you to create diagrams that visualize changing flows and their distribution between domains. Sankey diagrams suit a variety of use cases like the representation of website traffic, budget breakdowns, energy flow, and others.

The Kendo UI for Vue Sankey component is part of the Kendo UI for Vue library of Vue UI components. It is distributed through NPM under the  [@progress/kendo-vue-charts](https://www.npmjs.com/package/@progress/kendo-vue-charts) npm package.

<div data-component="StartFreeTrialSection"></div>

The Kendo UI for Vue Sankey diagram includes the following customizable elements:
- [Nodes](slug:customization_sankey#toc-customizing-the-sankey-chart-elements)&mdash;The node is a rectangular element that connects to other nodes.
- [Links](slug:customization_sankey#toc-customizing-the-sankey-chart-elements)&mdash;The lines that connect the nodes to each other. The greater the value of the link, the greater the width of the link will be.
- [Labels](slug:customization_sankey#toc-customizing-the-sankey-chart-elements)&mdash;The labels are the names of the nodes and are displayed on them or next to them.
- [Legend](slug:legend_sankey)&mdash;The legend lists the labels of each link.
- [Title](slug:title_sankey)&mdash;The title displayed above the component.
- [Tooltip](slug:tooltip_sankey)&mdash;The tooltip is displayed when hovering above the links and nodes.

The following example demonstrates the Kendo UI for Vue Sankey chart in action.

{% meta height:335 %}
{% embed_file sankey/overview/main.vue preview %}
{% embed_file sankey/overview/main.js %}
{% endmeta %}


## Key Features

* [Customization]({% slug customization_sankey %})&mdash;The Kendo UI for Vue Sankey diagram gives you complete control over the styles and positions of the nodes through the [`links`]({% slug api_charts_sankeyprops %}#toc-links), [`nodes`]({% slug api_charts_sankeyprops %}#toc-nodes), [`labels`]({% slug api_charts_sankeyprops %}#toc-labels), [`dataNodes`]({% slug api_charts_sankeyprops %}#toc-datanodes), and [`dataLinks`]({% slug api_charts_sankeyprops %}#toc-datalinks) properties.
* [Events]({% slug events_sankey %})&mdash;The Sankey diagram exposes various events that allow you to extend and tailor the functionality of the component.
* [Export]({% slug export_sankey %})&mdash;The Sankey along with the Drawing library provides the option to export the diagram to SVG, PDF, or an Image.
* [Auto Layout]({% slug autolayout_sankey %})&mdash;The Sankey automatically configures the layout and you can disable this option.
* Elements&mdash;Add the [legend]({% slug legend_sankey %}), [title]({% slug title_sankey %}), and [tooltip]({% slug tooltip_sankey %}) to the Sankey diagram and customize them.

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
* [Glossary]({% slug glossary_charts %})
