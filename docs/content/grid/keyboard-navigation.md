---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Grid keyboard navigation in Vue projects."
slug: keyboard_navigation_grid
position: 350
---

# Keyboard Navigation

The keyboard navigation of the Grid can be enabled using the [navigatable]({% slug api_grid_gridprops %}#toc-navigatable) prop of the Grid.

The Grid supports the following keyboard shortcuts:

| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Arrow keys`                        | Navigates through the cells of the Grid |
| `Enter`                             | Will perform different actions based on the current cell. For example, it will sort a sortable column, expand/collapse a parent item, or if focusable nested component is available it will exit navigation and focus it. |
| `Esc`                               | Will return to the Grid navigation if the user is currently inside editor or filter component navigation. For example, when inside a `NumericTextBox` editor, pressing `Arrow up` will increase the value, but pressing `Esc` will return to the cell level navigation and allow the end-user to move across the cells.            |

{% meta height:660 %}
{% embed_file keyboard-navigation/main.vue preview %}
{% embed_file keyboard-navigation/DetailComponent.vue %}
{% embed_file keyboard-navigation/main.js %}
{% embed_file keyboard-navigation/products.js %}
{% endmeta %}

## Custom Cells and Keyboard Navigation

In cases when we have custom cells we need to inject the internal `getKeyboardNavigationAttributes` method and the `id` prop of the cell and use them to have the correct attributed for the `td` element and to include it in the navigation logic.

{% meta height:550 %}
{% embed_file keyboard-inline/main.vue preview %}
{% embed_file keyboard-inline/main.js %}
{% embed_file keyboard-inline/CommandCell.vue %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [navigatable]({% slug api_grid_gridprops %}#toc-navigatable)
