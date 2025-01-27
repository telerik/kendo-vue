---
title: Keyboard Navigation
page_title: Keyboard Navigation - TreeList - Kendo UI for Vue
description: "Explore the keyboard navigation options provided by the Kendo UI TreeList wrapper for Vue."
slug: keyboard_navigation_treelist_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/treelist/keyboard-navigation/"
position: 7
---

<div><WrapperBanner link="/kendo-vue-ui/components/treelist/keyboard-navigation"></WrapperBanner></div> 

# Keyboard Navigation

The keyboard navigation of the TreeList is always available.

The data table of the TreeList supports the following keyboard shortcuts:

|SHORTCUT | DESCRIPTION |
|:---|:---|
| `Arrow Keys`      | Navigates between the cells.|
| `Space`           | Selects the row with the currently highlighted cell. |
| `Ctrl`+`Space`    | <ul><li>Selects or deselects the current row.</li> <li>Persists the previously selected rows.</li></ul> |
| `Shift`+`Space`   | <ul><li>Performs range selection.</li> <li>Selects all rows between the last selected one.</li></ul> |
| `Shift`+`Arrow Keys` | Adds the row of the focused cell to the selection. |
| `Enter` or `F2`   | Sets the item in edit mode. If pressed on a command column, the shortcut focuses the first focusable element inside it. |
| `Esc`             | Cancels the edit or, if an element inside a cell is focused, returns the focus to the table. |
| `Alt`+`Right Arrow`| Expands the current item. |
| `Alt`+`Left Arrow` | Collapses the current item. |
| `Ctrl`+`Home`     | Focuses the first focusable element inside the body. |
| `Ctrl`+`End`      | Focuses the last focusable element inside the body. |
| `Home`            | Focuses the first focusable cell in the row. |
| `End`             | Focuses the last focusable cell in the row. |

{% meta height:630 %}
{% embed_file keyboard-navigation/main.vue preview %}
{% embed_file keyboard-navigation/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI TreeList for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/treelist/overview)
* [API Reference of the TreeList Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist)
