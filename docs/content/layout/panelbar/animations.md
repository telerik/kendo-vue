---
title: Animations
description: "Enable and disable the expand and collapse animations of the Kendo UI for Vue Native PanelBar in Vue projects."
slug: animations_panelbar
position: 8
---

# Animations

You can enable or disable the `show` and `hide` animations of the `PanelBar`.

To control the behavior of the `animations`:
* Define the [`animation`]({% slug api_layout_panelbarprops %}#toc-animation) property directly on the the PanelBar.
* Specify the [`animation`]({% slug api_layout_panelbarprops %}#toc-animation) property of an individual child item.

The following example shows how we can define the animation property for each `PanelBar` item:

{% meta height:550 %}
{% embed_file panelbar/animation/main.vue preview %}
{% embed_file panelbar/animation/main.js %}
{% embed_file panelbar/animation/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
