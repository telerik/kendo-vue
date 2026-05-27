---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Native ColorPicker keyboard navigation in Vue projects."
slug: keyboard_navigation_colorpicker
position: 60
---

# Keyboard Navigation

## Keyboard Shortcuts

### When k-colorpicker element is focused

| Shortcut | Behavior |
|----------|----------|
| `Alt Down` | Opens pop up|
| `Enter` | Opens pop up|
| `Alt Up` or `Esc` | Closes popup|

### When focus is in the Popup

When opened, the Popup element uses Tab navigation to iterate over its inner elements. The focus remains trapped within the Popup. The inner elements (**ColorPlatte**, **ColorGradient** and **Buttons**s implement their own specification).

| Shortcut | Behavior |
|----------|----------|
| `Esc` | Closes Popup and moves focus back to k-colorpicker element. |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift` + `Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For button items, executes the currently focused button action. |

{% meta height:550 %}
{% embed_file colorpicker/keyboard/main.vue preview %}
{% embed_file colorpicker/keyboard/main.js %}
{% endmeta %}

## Resources
* [API Reference of the ColorPicker]({% slug api_inputs_colorpickerprops %})
* [WAI aria practices for combobox](https://www.w3.org/TR/wai-aria-practices/#combobox)
