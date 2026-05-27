---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Menu keyboard navigation in Vue projects."
slug: keyboard_navigation_menu
position: 70
---

## Keyboard Navigation

The keyboard navigation of the Menu is always available.

The Menu supports the following keyboard shortcuts:

| SHORTCUT                        | DESCRIPTION                                            
|:---                             |:---               
| `Up Arrow`                      | <ul><li>(For root items) Opens the item and focuses the last child.</li> <li>(For child items) Focuses the previous item.</li></ul>
| `Down Arrow`                    | <ul><li>(For root items) Opens the item and focuses the first child.</li> <li>(For child items) Focuses the next item.</li></ul>
| `Left Arrow`                    | <ul><li>(For root items) Focuses the previous item.</li> <li>(For child items) For direct children of a root item, opens the previous root item and focuses its first child. Otherwise, closes and focuses the parent.</li></ul>
| `Right Arrow`                   | <ul><li>(For root items) Focuses the next item.</li> <li>(For child items) If the item has children, opens the item and focuses the first child. Otherwise, opens the next root item and focuses its first child.</li></ul>
| `Home`                          | Focuses the first item.  
| `End`                           | Focuses the last item.
| `Enter`                         | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL.   
| `Space`                         | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL.      
| `Escape`                        | (For child items) Closes and focuses the parent.
| `Alphanumeric character`        | Focuses the next item with text starting with the character.



{% meta height:200 %}
{% embed_file menu/overview/main.vue preview %}
{% embed_file menu/vertical/main.js %}
{% endmeta %}


If the Menu is vertical, the arrow keys perform the following actions:

| SHORTCUT                        | DESCRIPTION                                            
|:---                             |:---   
| `Up Arrow`                      | Focuses the previous item.
| `Down Arrow`                    | Focuses the next item.
| `Left Arrow`                    | <ul><li>(For root items) opens the item and focuses the last child.</li> <li>(For child items) closes and focuses the parent.</li></ul>
| `Right Arrow`                   | If the item has children, opens the item and focuses the first child. For child items without children, opens the next root item and focuses its first child.

{% meta height:200 %}
{% embed_file menu/vertical/main.vue preview %}
{% embed_file menu/vertical/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
* [Accessibility]({% slug accessibility_menu %})
