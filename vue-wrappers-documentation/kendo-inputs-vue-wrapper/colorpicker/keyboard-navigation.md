---
title: Keyboard Navigation
page_title: ColorPicker Keyboard Navigation - Components - Kendo UI for Vue
description: "Explore the keyboard navigation options provided by the Kendo UI ColorPicker wrapper for Vue."
slug: keyboard_navigation_colorpicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/colorpicker/keyboard-navigation"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/colorpicker/keyboard-navigation"></WrapperBanner></div>

# Keyboard Navigation

The keyboard navigation of the ColorPicker is always available.

The palette-based ColorPicker supports the following keyboard shortcuts:

| SHORTCUT    |  DESCRIPTION    |
|:---         |:---|
| `Enter` or `Down Arrow` | Opens the popup (if closed).|
| `Left Arrow`            | Selects the previous color. |
| `Right Arrow`           | Selects the next color. |
| `Up Arrow` or `Down Arrow`  | Moves one row up or down. |
| `Esc```                 | Cancels the selection. |

The HSV ColorPicker supports the following keyboard shortcuts:

| SHORTCUT        |  DESCRIPTION    |
|:---             |:---|
| `Enter` or `Down Arrow` | Opens the popup (if closed).|
| `Arrows`        | Updates the saturation or value in the big rectangle. |
| `Ctrl`+`Left Arrow` and `Ctrl`+`Right Arrow`  | Updates the hue slider. |
| `Ctrl`+`Up Arrow` and `Ctrl`+`Down Arrow`     | Updates the opacity slider. |
| `Shift`         | (Holding) Fine-tunes. |
| `Enter`         | Selects the current color. |
| `Esc`           | Cancels the selection. |

{% meta height:400 %}
{% embed_file colorpicker/keyboard/main.vue preview %}
{% embed_file colorpicker/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI ColorPicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/colorpicker/overview)
* [API Reference of the ColorPicker Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker)
