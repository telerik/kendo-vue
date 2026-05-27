---
title: Customization
description: "Customize the Kendo UI for Vue Chip in Vue projects."
slug: customization_chip
position: 5
---

# Customization

The Chip component provides the following options for customizing its look and feel:

* [Select icon](#toc-custom-select-icon)
* [Custom remove icon](#toc-custom-remove-icon)
* [Custom avatar](#toc-custom-avatar)

## Display avatar, custom classes and icons

You can specify a display avatar or custom classes, icons by using the [`icon`]({% slug api_buttons_chipprops %}#toc-icon) property.

{% meta height:160 %}
{% embed_file chip/customization/main.vue preview %}
{% embed_file chip/customization/CustomChip.vue %}
{% embed_file chip/customization/main.js %}
{% endmeta %}

## Custom Select Icon

You can specify a select icon by using the [`selectedIcon`]({% slug api_buttons_chipprops %}#toc-selectedIcon) property.

{% meta height:130 %}
{% embed_file chip/select-icon/main.vue preview %}
{% embed_file chip/select-icon/CustomChip.vue %}
{% embed_file chip/select-icon/main.js %}
{% endmeta %}

## Custom Remove Icon

You can specify a custom remove icon by using the [`removeIcon`]({% slug api_buttons_chipprops %}#toc-removeIcon) property. You should also allow the Chip to be removable by setting the [`removable`]({% slug api_buttons_chipprops %}#toc-removable) property to `true` in order to allow the vizualization of the custom `removeIcon`.

{% meta height:130 %}
{% embed_file chip/remove-icon/main.vue preview %}
{% embed_file chip/remove-icon/CustomChip.vue %}
{% embed_file chip/remove-icon/main.js %}
{% endmeta %}

## Custom Avatar

You can specify a custom avatar by using the [`avatar`]({% slug api_buttons_chipprops %}#toc-avatar) property to place the desired shape or image in the chip.

{% meta height:130 %}
{% embed_file chip/avatar/main.vue preview %}
{% embed_file chip/avatar/CustomChip.vue %}
{% embed_file chip/avatar/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
