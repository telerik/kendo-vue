---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the Kendo UI for Vue TimePicker in Vue projects.'
slug: adaptive_rendering_timepicker
position: 7
---

# Adaptive Rendering

The TimePicker exposes the [`inputAttributes`]({% slug api_dateinputs_timepickerprops %}#toc-inputAttributes) property to enable the browser to show an input-specific on-screen keyboard.

## On-Screen Keyboard

To enhance the mobile user experience of your Vue apps, you can configure the type of the on-screen keyboard for the Kendo UI for Vue TimePicker. Use the [`inputAttributes`]({% slug api_dateinputs_timepickerprops %}#toc-inputAttributes) property to set the `inputMode`. Based on the `inputMode` setting, the browser will display the most appropriate virtual keyboard.

The [`inputAttributes`]({% slug api_dateinputs_timepickerprops %}#toc-inputAttributes) property lets you set custom HTML attributes to the inner focusable input.

> Check out the different type of virtual keyboard on a mobile device.

{% meta height:300 %}
{% embed_file timepicker/input-mode/main.vue preview %}
{% embed_file timepicker/input-mode/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TimePicker]({% slug api_dateinputs_timepickerprops %})
-   [The `inputmode` Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
