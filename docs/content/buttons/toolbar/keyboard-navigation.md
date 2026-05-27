---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Toolbar keyboard navigation in Vue projects."
slug: keyboard_navigation_toolbar
position: 6
---

# Keyboard Navigation

The keyboard navigation of the Toolbar is always available.

The Toolbar supports the following keyboard shortcuts:

| SHORTCUT                            | DESCRIPTION                          |
|:---                                 |:---                                  |
| `Left Arrow` & `Right Arrow`        | Moves the focus to the next available tool that can be focused. |
| `Enter`                             | Clicks the currently active button or changes the state of the currently active toggleable button. |
| `Tab`                               | Moves the focus to and from the Toolbar. |
| `Alt`+`Down Arrow`                  | Opens the currently active SplitButton or DropDownButton. |
| `Alt`+`Up Arrow`                    | Closes the currently active SplitButton or DropDownButton. |

{% meta height:160 %}
{% embed_file toolbar/keyboard/main.vue preview %}
{% embed_file toolbar/keyboard/main.js %}
{% endmeta %}

## Controlling the Focus

All focus movements inside the Toolbar are managed according to the logic of the [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_roving_tabindex). When the user navigates through the tabs, the Toolbar focuses either the first tool or the tool that was last focused.

## Suggested Links

* [API Reference of the Toolbar]({% slug api_buttons_toolbarprops %})
