---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the Kendo UI for Vue DatePicker in Vue projects.'
slug: adaptive_rendering_datepicker
position: 6
---

# Adaptive Rendering

The DatePicker exposes the [`inputAttributes`]({% slug api_dateinputs_datepickerprops %}#toc-inputAttributes) property to enable the browser to show an input-specific on-screen keyboard.

## On-Screen Keyboard

To enhance the mobile user experience of your Vue apps, you can configure the type of the on-screen keyboard for the Kendo UI for Vue DatePicker. Use the [`inputAttributes`]({% slug api_dateinputs_datepickerprops %}#toc-inputAttributes) property to set the `inputMode`. Based on the `inputMode` setting, the browser will display the most appropriate virtual keyboard.

The [`inputAttributes`]({% slug api_dateinputs_datepickerprops %}#toc-inputAttributes) property lets you set custom HTML attributes to the inner focusable input.

> Check out the different type of virtual keyboard on a mobile device.

{% meta height:450 %}
{% embed_file datepicker/input-mode/main.vue preview %}
{% embed_file datepicker/input-mode/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
-   [The `inputmode` Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
