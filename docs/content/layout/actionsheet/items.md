---
title: Items
description: "Learn more about the Kendo UI for Vue Native ActionSheet items and how to configure them based on specific project requirements."
slug: items_actionsheet
position: 1
---

# Items

The `ActionSheet` items are highly customizable elements that allow you to control their look and feel depending on the use case.

To define the ActionSheet options, provide an [`ActionSheetItem`]({% slug api_layout_actionsheetitemprops %}) collection to the [`items`]({% slug api_layout_actionsheetprops %}#toc-items) property of the component.

{% meta height:400 %}
{% embed_file actionsheet/items/overview/main.vue preview %}
{% embed_file actionsheet/items/overview/main.js %}
{% endmeta %}

## Setting Title and Description

To configure the item text or any additional details, use the [`title`]({% slug api_layout_actionsheetitemprops %}#toc-title) and [`description`]({% slug api_layout_actionsheetitemprops %}#toc-description) properties of the `ActionSheetItem` object.

{% meta height:400 %}
{% embed_file actionsheet/items/title/main.vue preview %}
{% embed_file actionsheet/items/title/main.js %}
{% endmeta %}

## Defining Groups

To indicate a group of items with similar functionality, set the [`group`]({% slug api_layout_actionsheetitemprops %}#toc-group) property of the `ActionSheetItem` object to `top` or `bottom`. The ActionSheet will visually separate the two groups by rendering a separator line between them.

The following example demonstrates the ActionSheet groups in action.

{% meta height:400 %}
{% embed_file actionsheet/items/groups/main.vue preview %}
{% embed_file actionsheet/items/groups/main.js %}
{% endmeta %}

## Setting Icons

You can enhance the ActionSheet item content by adding icons. Set the [`icon`]({% slug api_layout_actionsheetitemprops %}#toc-icon) of the [`svgIcon`]({% slug api_layout_actionsheetitemprops %}#toc-svgicon) property of the `ActionSheetItem` object to take full control over the visibility of the icons.

The following example demonstrates the icon property in action.

{% meta height:500 %}
{% embed_file actionsheet/items/icons/main.vue preview %}
{% embed_file actionsheet/items/icons/main.js %}
{% endmeta %}

## Disabling Items

To disable certain items, set the [`disabled`]({% slug api_layout_actionsheetitemprops %}#toc-disabled) property of the `ActionSheetItem` to `true`.

The following example demonstrates the disabled state of the ActionSheet items.

{% meta height:400 %}
{% embed_file actionsheet/items/disabling/main.vue preview %}
{% embed_file actionsheet/items/disabling/main.js %}
{% endmeta %}


## Styling Items

Some scenarios require further customizations of the items' layout. Use the [`class`]({% slug api_layout_actionsheetitemprops %}#toc-class) and [`style`]({% slug api_layout_actionsheetitemprops %}#toc-style) options of the `ActionSheetItem` object to change the layout of the options.

The following example demonstrates the `class` and `style` properties in action.

{% meta height:400 %}
{% embed_file actionsheet/items/styling/main.vue preview %}
{% embed_file actionsheet/items/styling/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ActionSheet]({% slug api_layout_actionsheetprops %})
* [API Reference of the ActionSheetItem]({% slug api_layout_actionsheetitemprops %})
