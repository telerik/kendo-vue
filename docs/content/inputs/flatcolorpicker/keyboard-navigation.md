---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Native ColorGradient keyboard navigation in Vue projects."
slug: keyboard_navigation_flatcolorpicker
position: 78
---

# FlatColorPicker Keyboard Support

The FlatColorPicker is a single-tab-stop component. Its inner navigation is activated by pressing the `Enter` key. In that case the focus remains trapped within the component elements. The user returns to page navigation by pressing `Esc`.

## Keyboard Shortcuts

### When wrapper is focused

| Shortcut | Behavior |
|----------|----------|
| `Enter` | Activates inner FlatColorPicker navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift` + `Tab` | Navigates to the previous focusable element on the page. |

### When inner navigation is activated

| Shortcut | Behavior |
|----------|----------|
| `Esc` | Moves focus back to wrapper element. Deactivates inner FlatColorPicker navigation. |
| `Tab` | Navigates to the next focusable element in the FlatColorPicker. If current focus is on the last element, moves focus to the first focusable item in the component. |
| `Shift` + `Tab` | Navigates to the previous focusable element in the FlatColorPicker. If current focus is on the first element, moves focus to the last focusable item in the component. |
| `Enter` | For button items, FlatColorPicker executes the currently focused button action. |

{% meta height:450 %}
{% embed_file flatcolorpicker/keyboard/main.vue preview %}
{% embed_file flatcolorpicker/keyboard/main.js %}
{% endmeta %}


### Inner elements shortcuts

The inner elements implement the shortcuts for their component type. There are **ColorGradient**, **ColorPalette**, and **Button** elements. Note that the ColorGradient must expose directly its inner navigation when used in a FlatColorPicker (the wrapper must not be focusable itself).


## Suggested Links

* [API Reference of the ColorGradient]({% slug api_inputs_colorgradientprops %})
