---
title: Customization
description: "Customize the PanelBar and the PanelBarItem components by using the utilities function, declaratively render something or change the add a custom property"
slug: customization_panelbar
position: 7
---

# Customization

You can customize the behavior of the Kendo UI for Vue Native PanelBar depending on the specific requirements of your Vue project.

The PanelBar enables you to render:
* [Collections](#toc-collections) of data items.
* [PanelBar items with custom properties](#toc-custom-properties) and identify them when the user interact with the component.

## Collections

> * If you present a `items` property, the PanelBar will render a recursive map until it reaches an object that contains neither a content, nor a `items` property.
> * If you present a content property, the property will be prioritized and directly rendered inside the `PanelBar` item.

{% meta %}
{% embed_file panelbar/custom/collections/main.vue preview %}
{% embed_file panelbar/custom/collections/main.js %}
{% embed_file panelbar/custom/collections/styles.css %}
{% endmeta %}

## Custom Properties

The `PanelBar` items accept custom properties that:
* Can be accessed on users' interaction with the component.
* Can be displayed in custom `Panelbar` item template.

{% meta %}
{% embed_file panelbar/custom/custom/main.vue preview %}
{% embed_file panelbar/custom/custom/main.js %}
{% embed_file panelbar/custom/custom/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
