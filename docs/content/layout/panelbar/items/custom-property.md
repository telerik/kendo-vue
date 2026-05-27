---
title: Custom Properties
description: "Set custom properties to the items of the Kendo UI for Vue Native PanelBar."
slug: customproperty_panelbar
position: 4
---

# Custom Properties

To better identify with which element the user interacts, the PanelBar allows you to set any type of properties to the PanelBarItem.

## Getting Started

You can set the custom property by passing the property to the `Items` definition as follows.

```jsx-no-run
      items: [
        {
          title: 'First item',
          content: 'first',
          myCustomProp: 'This information is passed through a custom property',
          expanded: true,
        },
        ........................
      ]
```

## Accessing Properties

You can access a `PanelBar` Item property from:
* The `target` of the [`onSelect`]({% slug api_layout_panelbarprops %}#toc-onselect) event.
* The `props` object inside a template of a custom PanelBar item.

{% meta %}
{% embed_file panelbar/items/custom/main.vue preview %}
{% embed_file panelbar/items/custom/main.js %}
{% embed_file panelbar/items/custom/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
