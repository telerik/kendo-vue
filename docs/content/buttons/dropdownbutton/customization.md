---
title: Customization
description: "Customize the popup and the popup items of the Kendo UI for Vue Native DropDownButton in Vue projects."
slug: customization_dropdownbutton
position: 4
---

# Customization

The Kendo UI for Vue Native DropDownButton provides options for customizing the rendering and behavior of its popup and popup items.

The component enables you to:

* [Visually enhance the popup](#toc-popup-behavior)
* [Overriding the default item rendering](#toc-items-rendering)

## Popup Behavior

To configure the behavior of the popup, use the [`animate`]({% slug api_buttons_buttonspopupsettings %}#toc-animate) and [`popupClass`]({% slug api_buttons_buttonspopupsettings %}#toc-popupclass) settings.



{% meta height:270 %}
{% embed_file dropdownbutton/customization/popup/main.vue preview %}
{% embed_file dropdownbutton/customization/popup/main.js %}
{% endmeta %}

## Items Rendering

To override the default rendering of all popup items, use the [`itemRender`]({% slug api_buttons_dropdownbuttonprops %}#toc-itemRender) property of the DropDownButton. 

{% meta %}
{% embed_file dropdownbutton/customization/items/main.vue preview %}
{% embed_file dropdownbutton/customization/items/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DropDownButton]({% slug api_buttons_dropdownbuttonprops %})
