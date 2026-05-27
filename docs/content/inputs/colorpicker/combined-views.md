---
title: Views
description: "Customize the view options of the Kendo UI for Vue Native ColorPicker in Vue projects."
slug: combinedview_colorpicker
position: 5
---

# Views

The ColorPicker provides options for [configuring its popup view](#toc-configuring-popup-view) and [implementing combined views](#toc-implementing-combined-views).

## Configuring Popup View

You can configure the ColorPicker to render either a [ColorGradient]({% slug api_inputs_colorgradientprops %}) or a [ColorPalette]({% slug api_inputs_colorpaletteprops %}) in its popup. To choose between the two, provide either `gradient` or `palette` to the [`view`]({% slug api_inputs_colorpickerprops %}#toc-view) input property of the component. By default, the ColorPicker uses the `palette` view.



{% meta height:550 %}
{% embed_file colorpicker/view/popup/main.vue preview %}
{% embed_file colorpicker/view/popup/main.js %}
{% endmeta %}


## Implementing Combined Views

To set a combined view and render both the ColorPalette and ColorGradient in the popup of the ColorPicker, set the [`view`]({% slug api_inputs_colorpickerprops %}#toc-view) property to `combo`.



{% meta height:580 %}
{% embed_file colorpicker/view/combined/main.vue preview %}
{% embed_file colorpicker/view/combined/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the ColorPicker]({% slug api_inputs_colorpickerprops %})
