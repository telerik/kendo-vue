---
title: Keyboard Navigation
description: "Learn how to use the inbuilt keyboard navigation for the Vue Sankey Chart"
slug: keyboard_navigation_sankey
position: 60
---

# Keyboard Navigation

The Sankey Chart comes with keyboard navigation for the nodes and links enabled out of the box. To disable the keyboard navigation, set the [`disableKeyboardNavigation`]({% slug api_charts_sankeyprops %}#toc-disableKeyboardNavigation) property to `true`.


| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Down arrow`                        | Moves the focus to the next node or link that is positioned below. |
| `Up arrow`                          | Moves the focus to the next node or link on top. |
| `Left arrow`                        | Moves focus to the previous node or link on the left. |
| `Right arrow`                       | Moves the focus to the next node or link on the right. |


The following example demonstrates the Sankey Chart keyboard navigation in action.

{% meta height:340 %}
{% embed_file sankey/keyboard-navigation/main.vue preview %}
{% embed_file sankey/keyboard-navigation/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
