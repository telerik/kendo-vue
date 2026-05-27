---
title: Adaptive Rendering
description: "Enable adaptive rendering for the Kendo UI for Vue Native ComboBox in Vue projects."
slug: adaptive_rendering_combobox
position: 65
---

# Adaptive Rendering

The ComboBox provides an option for enabling adaptive rendering for the popup element. This functionality allows the component to adapt to the screen size by providing different rendering of the popup element based on the screen dimensions.

The Adaptive Mode changes the rendering of the popup element of the ComboBox as per the screen resolution of the device (the horizontal value in px) with the following breakpoints:
* `Small screens - up to 500px`&mdash;Displays a full-screen action sheet.
* `Medium screens - between 500px and 768px`&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
* `Large screens - larger than 768px`&mdash;Displays a popup as an animation container attached to the main element of the component.

To enable the adaptive rendering, set the [`adaptive`]({% slug api_dropdowns_comboboxprops %}#toc-adaptive) property of the ComboBox to `true`.

To set the title of the dialog window rendered when the ComboBox is opened on a smaller screen, set the [`adaptiveTitle`]({% slug api_dropdowns_comboboxprops %}#toc-adaptivetitle) property of the component.

> You can further customize the adaptive breakpoints using the [AdaptiveModeProvider]({% slug overview_adaptive_mode %}).

> Switch between the device options below to see how the ComboBox adapts to different resolutions.

{% meta height:620 %}
{% embed_file combobox/adaptive-rendering/main.vue preview %}
{% embed_file combobox/adaptive-rendering/main.js %}
{% endmeta %}


## ComboBox Adaptive Rendering with Grouping

The following example demonstrates the ComboBox's adaptive mode in a data grouping scenario.

> Switch between the device options below to see how the ComboBox adapts to different resolutions.

{% meta height:620 %}
{% embed_file combobox/adaptive-rendering-grouping/main.vue preview %}
{% embed_file combobox/adaptive-rendering-grouping/main.js %}
{% embed_file combobox/adaptive-rendering-grouping/grouping-data.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
- [ComboBox `size` options]({% slug api_dropdowns_comboboxprops %}#toc-size)
- [ComboBox `rounded` options]({% slug api_dropdowns_comboboxprops %}#toc-rounded)
- [ComboBox `fillMode` options]({% slug api_dropdowns_comboboxprops %}#toc-fillmode)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
