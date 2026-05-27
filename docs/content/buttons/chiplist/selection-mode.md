---
title: Selection Mode
description: "Use the selection mode of the Kendo UI for Vue ChipList in Vue projects."
slug: selectionmode_chiplist
position: 2
---

# Selection Mode

The ChipList provides options for different selection modes.
The supported selection modes are `single`, `multiple` or `none`(default).


* [None Selection](#toc-none-selection)
* [Single Selection](#toc-single-selection)
* [Multiple Selection](#toc-multiple-selection)


## None Selection

To set the selection mode of the ChipList to `none` and disable all selections leave the default `selection` value which is set to `none` or set it manually - [`selection`]({% slug api_buttons_chiplistprops %}#toc-selection) property to be equal to `none`.

{% meta height:130 %}
{% embed_file chiplist/selection/none/main.vue preview %}
{% embed_file chiplist/selection/none/main.js %}
{% endmeta %}

## Single Selection

To enable the single selection mode of the ChipList set the [`selection`]({% slug api_buttons_chiplistprops %}#toc-selection) property to be equal to `single`.

{% meta height:130 %}
{% embed_file chiplist/selection/single/main.vue preview %}
{% embed_file chiplist/selection/single/main.js %}
{% endmeta %}

## Multiple Selection

To enable the multiple selection mode of the ChipList set the [`selection`]({% slug api_buttons_chiplistprops %}#toc-selection) property to be equal to `multiple`.

{% meta height:130 %}
{% embed_file chiplist/selection/multiple/main.vue preview %}
{% embed_file chiplist/selection/multiple/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
