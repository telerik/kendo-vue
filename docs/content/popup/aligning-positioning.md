---
title: Aligning and Positioning
description: "Align the Kendo UI for Vue Native Popup to components or absolute points in Vue projects and control its position."
slug: alignmentpositioning_popup
position: 4
---

# Aligning and Positioning

The Kendo UI for Vue Native Popup enables you to align it to [components](#toc-aligning-to-components) and [absolute points](#toc-aligning-to-absolute-points) as well as to [control its position](#toc-positioning).

## Aligning to Components

To align the Popup to a specific component, use the [`anchor`]({% slug api_popup_popupprops %}#toc-anchor) property. The Popup opens next to the defined anchor component.

> If an `anchor` is not provided, the Popup will use the [`offset`]({% slug api_popup_popupprops %}#toc-offset) property value.

{% meta height:200 %}
{% embed_file align/basic/main.vue preview %}
{% embed_file align/basic/main.js %}
{% embed_file align/basic/styles.css %}
{% endmeta %}

## Aligning to Absolute Points

To align the Popup to a specific absolute point that is relative to the document, use the [`offset`]({% slug api_popup_popupprops %}#toc-offset) property. The Popup opens next to the point and uses the specified [`popupAlign`]({% slug api_popup_popupprops %}#toc-popupalign) configuration.

{% meta height:200 %}
{% embed_file align/absolute/main.vue preview %}
{% embed_file align/absolute/main.js %}
{% embed_file align/absolute/styles.css %}
{% endmeta %}

## Positioning

Both the anchor and the Popup are treated as rectangular elements and, as a result, each has nine pivot points. You can align every point of the Popup to an anchor point. The component will position itself by aligning its top-right point to the bottom-right point of the anchor. If we want to use the `popup-align` prop we need to add concrete width and height to the inner container of the popup.


{% meta height:500 %}
{% embed_file align/positioning/main.vue preview %}
{% embed_file align/positioning/main.js %}
{% embed_file align/positioning/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the Popup]({% slug api_popup_popupprops %})
