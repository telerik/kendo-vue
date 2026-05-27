---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue ChipList keyboard navigation in Vue projects."
slug: keyboard_navigation_chiplist
position: 6
---

# Keyboard Navigation

The keyboard navigation of the ChipList is always available.

The ChipList supports the following keyboard shortcuts:

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Left Arrow`                        | Sets the focus on the next available chip.      |
| `Right Arrow`                       | Sets the focus on the previous available chip.  |
| `Enter`                             | Toggle the selection for the focused chip.      |
| `Del`                               | Delete the focused chip if it is allowed.       |

{% meta height:130 %}
{% embed_file chiplist/keyboard/main.vue preview %}
{% embed_file chiplist/keyboard/CustomChip.vue %}
{% embed_file chiplist/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
* [Accessibility]({% slug accessibility_chiplist %})
