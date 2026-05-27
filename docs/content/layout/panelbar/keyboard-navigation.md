---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Native PanelBar keyboard navigation in Vue projects."
slug: keyboard_navigation_panelbar
position: 10
---

# Keyboard Navigation

By default, the keyboard navigation of the PanelBar is enabled.

The PanelBar supports the following keyboard shortcuts:

| SHORTCUT                        | DESCRIPTION                                                                                  |
|:---                             |:---                                                                                          |
| `Up Arrow`                      | Highlights the previous item. If no previous item is available, highlights the last item.    |
| `Down Arrow`                    | Highlights the next item. If no next item is available, highlights the first item.           |
| `Left Arrow`                    | Collapses the current item if it is expanded. If the item is not expandable, highlights the parent item.  |
| `Right Arrow`                   | Expands the current item if it is collapsed. If child items are available, highlights the first item.|                                                     |
| `Enter` & `Space`               | Selects the highlighted item, or toggles the group of items.                                  |
| `Tab`                           | Focuses the PanelBar component.                                                               |



{% meta height:470 %}
{% embed_file panelbar/keyboard/main.vue preview %}
{% embed_file panelbar/keyboard/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [Accessibility]({% slug accessibility_panelbar %})
