---
title: Customization
description: 'Configure the Sankey component in order to customize its links, nodes, and labels.'
slug: customization_sankey
position: 10
---

# Customization

You can customize the Kendo UI for Vue Sankey diagram in three ways:

-   By [configuring the properties for all elements of the Sankey diagram](#toc-customizing-the-sankey-chart-elements).
-   By using the `data` property to apply the desired styles only to [specific instances of the Sankey diagram elements](#toc-customizing-element-instances).
-   By using the `style` property to [apply component-wide styles](#toc-applying-component-wide-styles)

## Customizing the Sankey Chart Elements

You can configure the labels, nodes, and links displayed on the Sankey Diagram by using the following properties:

-   [`links`]({% slug api_charts_sankeyprops %}#toc-links)&mdash;provides options to set the `colorType` of the link to either `static`, `source`, or `target`. It also allows you to control the opacity and highlighting of the link.
-   [`nodes`]({% slug api_charts_sankeyprops %}#toc-nodes)&mdash;provides options to modify the color, opacity, offset, padding, and width of the node.
-   [`labels`]({% slug api_charts_sankeyprops %}#toc-labels)&mdash;provides options to modify the font, color, opacity, alignment, padding, margin, border, and offset of the label. It also allows you to set the `visible` property to show or hide the label.

The following demo shows how to set the `links`, `nodes`, and `labels` options.

{% meta height:310 %}
{% embed_file sankey/customization/defaults/main.vue preview %}
{% embed_file sankey/customization/defaults/main.js %}
{% endmeta %}

## Customizing Element Instances

As the properties set to [`data`]({% slug api_charts_sankeyprops %}#toc-data) take precedence, using the `data` property allows you to target select element instances and apply a specific configuration only to these instances.

The demo below shows how to configure and use the `data` prop to:

-   Change the color of the first link.
-   Change the `offset` of the node with the label text `mobile`.

{% meta height:315 %}
{% embed_file sankey/customization/data/main.vue preview %}
{% embed_file sankey/customization/data/main.js %}
{% endmeta %}

## Applying Component-Wide Styles

Another way to customize the Sankey Diagram is to configure the CSS styles of the entire component by using its `style` property. This approach allows you to control styles like `width`, `height`, and `backgroundColor`.

```jsx
<Sankey style={{ width: 900, height: 600, backgroundColor: 'transparent' }} data={data} />
```

## Suggested Links

-   [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
-   [API Reference of the Charts]({% slug api_charts %})
