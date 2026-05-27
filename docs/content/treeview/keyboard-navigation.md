---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Native TreeView keyboard navigation in Vue projects."
slug: keyboard_navigation_treeview
position: 50
---

# Keyboard Navigation

The keyboard navigation of the TreeView is always available.

The TreeView supports the following keyboard shortcuts:

| SHORTCUT                        | DESCRIPTION                                                                                   |
|:---                             |:---                                                                                           |
| `Up Arrow`                      | Moves the focus to the previous focusable node without opening or closing a node.             |
| `Down Arrow`                    | Moves the focus to the next focusable node without opening or closing a node.                 |
| `Left Arrow`                    | <ul><li>When the focus is on an open node, fires the [`onExpandChange`]({% slug api_treeview_treeviewprops %}#toc-onexpandchange) event.</li> <li>When the focus is on a child node, which is also closed or located in the end, moves the focus to its parent.</li></ul> |
| `Right Arrow`                   | <ul><li>When the focus is on a closed node, fires the [`onExpandChange`]({% slug api_treeview_treeviewprops %}#toc-onexpandchange) event.</li> <li>When the focus is on an open node, moves the focus to the first child node.</li></ul>        |
| `Home`                          | Moves the focus to the first node in the tree without opening or closing a node.              |
| `End`                           | Moves the focus to the last focusable node in the tree without opening or closing a node.     |
| `Enter`                         | Fires the [`onItemClick`]({% slug api_treeview_treeviewprops %}#toc-onitemclick) event.       |
| `Space`                         | If the [`checkboxes`]({% slug api_treeview_treeviewprops %}#toc-checkboxes) property is configured, fires the [`onCheckChange`]({% slug api_treeview_treeviewprops %}#toc-oncheckchange) event. |

{% meta height:390 %}
{% embed_file keyboard/main.vue preview %}
{% embed_file keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Accessibility]({% slug accessibility_treeview %})
* [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
* [`onItemClick`]({% slug api_treeview_treeviewitemclickevent %})
* [`onCheckChange`]({% slug api_treeview_treeviewcheckchangeevent %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
