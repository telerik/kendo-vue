---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Native TreeList keyboard navigation in Vue projects."
slug: keyboard_navigation_treelist
position: 120
---

# Native TreeList Keyboard Navigation

The keyboard navigation of the TreeList can be enabled using the [navigatable]({% slug api_treelist_treelistprops %}#toc-navigatable) prop of the TreeList.

The TreeList supports the following keyboard shortcuts:

| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Arrow keys`                        | Navigates through the cells of the TreeList |
| `Enter`                             | Will perform different actions based on the current cell. For example, it will sort a sortable column, expand/collapse a parent item, or if focusable nested component is available it will exit navigation and focus it. |


{% meta height:580 %}
{% embed_file keyboard-navigation/main.vue preview %}
{% embed_file keyboard-navigation/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Suggested Links

* [API Index of the TreeList]({% slug api_treelist %})
