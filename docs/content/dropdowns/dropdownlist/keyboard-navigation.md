---
title: Keyboard Navigation
description: "Use the KendoVue DropDownList keyboard navigation in Vue projects."
slug: keyboard_navigation_dropdownlist
position: 100
---

# Keyboard Navigation

The keyboard navigation of the DropDownList is always available.

The DropDownList supports the following keyboard shortcuts:

| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Up Arrow` & `Left Arrow`           | Selects the previous available item. |
| `Down Arrow` & `Right Arrow`        | Selects the next available item, unless `filterable` is enabled. |
| `Enter`                             | Selects the highlighted item.        |
| `Esc`                               | Closes the popup.                    |
| `Alt`+`Down Arrow`                  | Opens the popup.                     |
| `Alt`+`Up Arrow`                    | Closes the popup.                    |

{% meta height:350 %}
{% embed_file dropdownlist/keyboard/main.vue preview %}
{% embed_file dropdownlist/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
* [Accessibility]({% slug accessibility_dropdownlist %})
