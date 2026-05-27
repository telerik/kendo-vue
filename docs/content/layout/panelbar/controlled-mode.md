---
title: Controlled Mode
description: "Control the expanded state of the PanelBar component in Vue projects"
slug: controlled_mode_panelbar
position: 5
---

# Controlled Mode

By default, the PanelBar is in an uncontrolled state.

To manage the state of the PanelBar:
* Set the [`expanded`]({% slug api_layout_panelbarprops %}#toc-expanded) property to the expanded items value.
* Handle the [`onSelect`]({% slug api_layout_panelbarprops %}#toc-onSelect) event.
* Set the new value trough the props.


## Expand/collapse All PanelBar Items
The following example demonstrates how to use the `expanded` property of the PanelBar to expand or collapse all its items.

{% meta height:620 %}
{% embed_file panelbar/controlled-state/basic/main.vue preview %}
{% embed_file panelbar/controlled-state/basic/main.js %}
{% embed_file panelbar/controlled-state/basic/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
