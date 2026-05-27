---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue MultiSelectTree keyboard navigation in Vue projects."
slug: keyboard_navigation_multiselecttree
position: 60
---

# Keyboard Navigation

The keyboard navigation of the MultiSelectTree is always available.

The MultiSelectTree supports the following keyboard shortcuts:

## Closed state

The MultiSelectTree allows navigating through the opened and closed popup state when the focus is on the input.

| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Alt`+`Down Arrow`                  | Opens the popup.                     |
| `Alt`+`Up Arrow`                    | Closes the popup.                    |
| `Esc`                               | Closes the popup.                    |

## Opened state

The MultiSelectTree allows navigating through the TreeView and other items when it's opened.

| SHORTCUT                            | DESCRIPTION                                                                                   |
|:---                                 |:---                                                                                           |
| `Up Arrow`                          | Moves the focus to the previous focusable node without opening or closing a node.             |
| `Down Arrow`                        | Moves the focus to the next focusable node without opening or closing a node.                 |
| `Left Arrow`                        | <ul><li>If the focus is on an open node, fires the [`onExpandChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onexpandchange) event.</li><li>If the focus is on a child node, which is also closed or located in the end, moves the focus to its parent.</li></ul> |
| `Right Arrow`                       | <ul><li>If the focus is on a closed node, fires the [`onExpandChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onexpandchange) event.</li><li>If the focus is on an open node, moves the focus to the first child node.</li></ul>        |
| `Home`                              | Moves the focus to the first node in the tree without opening or closing a node.              |
| `End`                               | Moves the focus to the last focusable node in the tree without opening or closing a node.     |
| `Enter`                             | Fires the [`onChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onchange) event.       |

## Tags Navigation

The MultiSelectTree allows navigating through the value tags when the focus is on the input.

| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Left Arrow`                        | Focuses the previous selected tag.   |
| `Right Arrow`                       | Focuses the next selected tag.       |
| `Home`                              | Focuses the first selected tag.      |
| `End`                               | Focuses the last selected tag.       |
| `Delete`                            | Deletes the focused tag.             |

{% meta height:400 %}
{% embed_file multiselecttree/basic/main.vue preview %}
{% embed_file multiselecttree/basic/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
* [Accessibility]({% slug accessibility_multiselecttree %})
