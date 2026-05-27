---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Switch in Vue projects."
slug: appearance_switch
position: 6
---

# Appearance

The `Switch` provides a predefined set of appearance options.

Apart from the default vision of the `Switch`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [Switch Configurator demo](#toc-configurator-demo)
* [Switch Sizes](#toc-size)
* [Switch Track Roundness](#toc-track-roundness)
* [Switch Thumb Roundness](#toc-thumb-roundness)

## Configurator demo

The following example demonstrates configuring different aspects of a `Switch` appearance through a configurator.

{% meta height:350 %}
{% embed_file switch/appearance/configurator/main.vue preview %}
{% embed_file switch/appearance/configurator/main.js %}
{% embed_file shared/SwitchStyleConfigurator.vue %}
{% endmeta %}

## Size

The size of the `Switch` is controlled through its [`size`]({% slug api_inputs_switchprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:180 %}
{% embed_file switch/appearance/size/main.vue preview %}
{% embed_file switch/appearance/size/main.js %}
{% endmeta %}

## Track roundness

The track roundness of the `Switch` is controlled through its [`trackRounded`]({% slug api_inputs_switchprops %}#toc-trackrounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `trackRounded` option:

{% meta height:180 %}
{% embed_file switch/appearance/track-rounded/main.vue preview %}
{% embed_file switch/appearance/track-rounded/main.js %}
{% endmeta %}

## Thumb roundness

The thumb roundness of the `Switch` is controlled through its [`thumbRounded`]({% slug api_inputs_switchprops %}#toc-thumbrounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `thumbRounded` option:

{% meta height:180 %}
{% embed_file switch/appearance/thumb-rounded/main.vue preview %}
{% embed_file switch/appearance/thumb-rounded/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Switch]({% slug api_inputs_switchprops %})
* [Switch `size` options]({% slug api_inputs_switchprops %}#toc-size)
* [Switch `trackRounded` options]({% slug api_inputs_switchprops %}#toc-trackrounded)
* [Switch `thumbRounded` options]({% slug api_inputs_switchprops %}#toc-thumbrounded)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
