---
title: Keyboard Navigation
page_title: Keyboard Navigation - ToolBar - Kendo UI for Vue
description: "Use the keyboard to navigate the Kendo UI ToolBar wrapper for Vue."
slug: keyboard_navigation_toolbar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/buttons/toolbar/keyboard-navigation/"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/buttons/toolbar/keyboard-navigation"></WrapperBanner></div>

# Keyboard Navigation

The keyboard navigation of the ToolBar is always available.

The Toolbar supports the following keyboard shortcuts:

| SHORTCUT                        |  DESCRIPTION  |
|:---                             |:---           |
| `TAB` or `Right Arrow`          | Focuses the next focusable item.      |
| `Shift`+`TAB` or `Left`         | Focuses the previous focusable item.  |
| `Enter` or `Space`              | Presses the focused button.           |
| `Home`                          | Focuses the first focusable item.     |
| `End`                           | Focuses last focusable item.          |

The ToolBar supports the following keyboard shortcuts which are applied to the SplitButtons or CommandOverflow menus:

| SHORTCUT                        |  DESCRIPTION |
|:---                             |:---          |
| `Alt`+`Down Arrow`              | Opens the SplitButton or CommandOverflow menu.  |      
| `Down`                          | Focuses the next item in the SplitButton or CommandOverflow menu. |
| `Up`                            | Focuses the previous item in the SplitButton or CommandOverflow menu. |
| `Alt`+`Up`                      | Closes the SplitButton or CommandOverflow menu. |   
| `Esc`                           | Closes the SplitButton or CommandOverflow menu. |     
| `Enter` or `Space`              | Presses the focused button. |

{% meta height:350 %}
{% embed_file toolbar/keyboard-navigation/main.vue preview %}
{% embed_file toolbar/keyboard-navigation/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI ToolBar for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/toolbar/overview)
* [API Reference of the ToolBar Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar)
