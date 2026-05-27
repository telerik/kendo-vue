---
title: State
description: "Manage the state of the Kendo UI for Vue Native PanelBar items in Vue projects."
slug: statesitems_panelbar
position: 3
---

# State

You can manage the state of the PanelBar items and render them as `selected`, `disabled`, and `expanded`.

## Selected Items

You can set the `selected` state to a PanelBar item by using the [`selected`]({% slug api_layout_panelbaritemprops %}#toc-selected) property.

{% meta %}
{% embed_file panelbar/items/state/selected/main.vue preview %}
{% embed_file panelbar/items/state/selected/main.js %}
{% embed_file panelbar/items/state/selected/styles.css %}
{% endmeta %}

## Disabled Items

You can `disable` PanelBar items by setting the [`disabled`]({% slug api_layout_panelbaritemprops %}#toc-disabled) property to `true`.

{% meta %}
{% embed_file panelbar/items/state/disabled/main.vue preview %}
{% embed_file panelbar/items/state/disabled/main.js %}
{% embed_file panelbar/items/state/disabled/styles.css %}
{% endmeta %}

## Expanded Items

By default, all PanelBar items are collapsed. To `expand` them, set the [`expanded`]({% slug api_layout_panelbaritemprops %}#toc-expanded) property to `true`.



{% meta height:500 %}
{% embed_file panelbar/items/state/expanded/main.vue preview %}
{% embed_file panelbar/items/state/expanded/main.js %}
{% embed_file panelbar/items/state/expanded/styles.css %}
{% endmeta %}


## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
