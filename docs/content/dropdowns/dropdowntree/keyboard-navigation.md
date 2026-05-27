---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue DropDownTree keyboard navigation in Vue projects."
slug: keyboard_navigation_dropdowntree
position: 60
---

# Keyboard Navigation

The keyboard navigation of the DropDownTree is always available.

The DropDownTree supports the following keyboard shortcuts:

## Closed state

| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Alt`+`Down Arrow`                  | Opens the popup.                     |
| `Alt`+`Up Arrow`                    | Closes the popup.                    |
| `Esc`                               | Closes the popup.                    |

## Opened state

| SHORTCUT                            | DESCRIPTION                                                                                   |
|:---                                 |:---                                                                                           |
| `Up Arrow`                          | Moves the focus to the previous focusable node without opening or closing a node.             |
| `Down Arrow`                        | Moves the focus to the next focusable node without opening or closing a node.                 |
| `Left Arrow`                        | <ul><li>If the focus is on an open node, fires the [`onExpandChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onexpandchange) event.</li><li>If the focus is on a child node, which is also closed or located in the end, moves the focus to its parent.</li></ul> |
| `Right Arrow`                       | <ul><li>If the focus is on a closed node, fires the [`onExpandChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onexpandchange) event.</li><li>If the focus is on an open node, moves the focus to the first child node.</li></ul>        |
| `Home`                              | Moves the focus to the first node in the tree without opening or closing a node.              |
| `End`                               | Moves the focus to the last focusable node in the tree without opening or closing a node.     |
| `Enter`                             | Fires the [`onChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onchange) event.       |



{% meta height:400 %}
{% embed_file dropdowntree/basic/main.vue preview %}
{% embed_file dropdowntree/basic/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
* [Accessibility]({% slug accessibility_dropdowntree %})
