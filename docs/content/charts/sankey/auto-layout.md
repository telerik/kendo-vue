---
title: Auto Layout
description: "Learn how to disable the automatic layout of the Kendo UI for Vue Sankey Chart, which is active by default."
slug: autolayout_sankey
position: 40
---

# Auto-Layout

By default, the Kendo UI for Vue Sankey Chart rearranges the nodes and their corresponding links for better visual appearance and readability.

If you want to display the nodes and links in a specific order, you can disable this feature by setting the [`disableAutoLayout`]({% slug api_charts_sankeyprops %}#toc-disableAutoLayout) property to `true`. In this case, the order of the nodes and links will be determined based on their order in the data that is passed to the [`dataNodes`]({% slug api_charts_sankeyprops %}#toc-datanodes) and [`dataLinks`]({% slug api_charts_sankeyprops %}#toc-datalinks) properties.

The following example demonstrates how to disable the automatic layout feature by toggling the value of the `disableAutoLayout` property.

{% meta height:340 %}
{% embed_file sankey/auto-layout/main.vue preview %}
{% embed_file sankey/auto-layout/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
