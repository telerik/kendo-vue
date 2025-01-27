---
title: Keyboard Navigation
page_title: Vue Grid Wrapper - Keyboard Navigation - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how use its keyboard navigation options."
slug: keyboard_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/keyboard-navigation/"
position: 13
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/keyboard-navigation"></WrapperBanner></div>

# Keyboard Navigation

The keyboard support of the Grid is always available.

To apply the keyboard shortcuts, focus the Kendo UI Grid wrapper for Vue by clicking the example area and pressing the `Tab` key.

The following keyboard shortcuts apply to the header of the Kendo UI Data Grid wrapper for Vue.

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Enter` | Sort by the column.|
| `Alt`+`Down` | Opens the filter menu.|
| `Esc` | Closes the filter menu.|
| `Tab` | (Default browser behavior) Navigates through the elements in the filter menu.|
| `Shift`+`Tab` | Same as `Tab`, but in reverse order.|
| `Ctrl`+`Left Arrow` | Reorders the column with the previous one.|
| `Ctrl`+`Right Arrow` | Reorders the column with the next one.|

The following keyboard shortcuts apply to the data table of the Kendo UI Data Grid wrapper for Vue.

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Arrow Keys` | Navigates over the cells.|
| `Enter` | Toggles the expand and collapse state on group row.|
| `Page Up` | Navigates to the previous page.|
| `Page Down` | navigates to the next page.|
| `Space` | Selects the row which holds the currently highlighted cell.|
| `Ctrl`+`Space` | Selects or deselects the current row while persisting the previously selected rows (only for the multiple selection mode).|
| `Shift`+`Space` | Performs range selection. Selects all the rows between the last selected one (with `SPACE` or mouse-click) and the one which holds the focused cell.|
| `Shift`+`Arrow Keys` | Adds the row which holds the focused cell to the selection (only for the multiple selection mode).|
| `Ctrl`+`Home` | Focuses the first focusable element inside the body.|
| `Ctrl`+`End` | Focuses the last focusable cell in the last row.|
| `Home` | Focuses the first focusable cell in the row.|
| `End` | Focuses the last focusable cell in the row.|

{% meta height:460 %}
{% embed_file grid/keyboard/main.vue preview %}
{% embed_file grid/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
