---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Native ColorGradient keyboard navigation in Vue projects."
slug: keyboard_navigation_colorgradient
position: 78
---

# ColorGradient Keyboard Support

The ColorGradient is a single-tab-stop component. Its inner navigation is activated by pressing the `Enter` key. In that case the focus remains trapped within the component elements. The user returns to page navigation by pressing `Esc`.

## Keyboard Shortcuts

### When wrapper is focused

| Shortcut | Behavior |
|----------|----------|
| `Enter` | Activates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift` + `Tab` | Navigates to the previous focusable element on the page. |

### When inner navigation is activated

| Shortcut | Behavior |
|----------|----------|
| `Esc` | Moves focus back to wrapper element. Deactivates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element in the ColorGradient. If current focus is on the last element, moves focus to the first focusable item in the component. |
| `Shift` + `Tab` | Navigates to the previous focusable element in the ColorGradient. If current focus is on the first element, moves focus to the last focusable item in the component. |
| `Enter` | For button items, ColorGradient executes the currently focused button action. |


Inside the ColorGradient, there is a two-dimensional **Slider** element implementing the following arrow keys shortcuts:

| Shortcut | Behavior |
|--------|-----------------|
|`Arrow Up`| Moves slider up by large step.|
|`Arrow Down`| Moves slider down by large step.|
|`Arrow Left`| Moves slider left by large step.|
|`Arrow Right`| Moves slider right by large step.|
|`Shift` + `Arrow Up`| Moves slider up by small step.|
|`Shift` + `Arrow Down`| Moves slider down by small step.|
|`Shift` + `Arrow Left`| Moves slider left by small step.|
|`Shift` + `Arrow Right`| Moves slider right by small step.|

{% meta height:480 %}
{% embed_file flatcolorpicker/keyboard/main.vue preview %}
{% embed_file flatcolorpicker/keyboard/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the ColorGradient]({% slug api_inputs_colorgradientprops %})
