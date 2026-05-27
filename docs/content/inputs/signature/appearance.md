---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native Signature in Vue projects."
slug: appearance_signature
position: 4
---

# Appearance

The Signature provides a predefined set of appearance options.

Apart from the default vision of the Signature, these alternative styling options enable you to configure each individual aspect of the appearance of a Signature.

- [`strokeWidth`]({% slug api_inputs_signatureprops %}#toc-strokeWidth)
- [`color`]({% slug api_inputs_signatureprops %}#toc-color)
- [`backgroundColor`]({% slug api_inputs_signatureprops %}#toc-backgroundColor)
- [`size`]({% slug api_inputs_signatureprops %}#toc-size)
- [`fillMode`]({% slug api_inputs_signatureprops %}#toc-fillMode)
- [`rounded`]({% slug api_inputs_signatureprops %}#toc-rounded)

The following example demonstrates configuring different aspects of a Signature appearance through a configurator.

{% meta height:450 %}
{% embed_file signature/appearance/all-options/main.vue preview %}
{% embed_file signature/appearance/all-options/main.js %}
{% embed_file shared/SignatureStyleConfigurator.vue %}
{% endmeta %}

## Stroke Width

The Signature allows you to control the line thickness width through the [`strokeWidth`]({% slug api_inputs_signatureprops %}#toc-strokeWidth) property.

The following example demonstrates how to define the stroke width of the Signature.

{% meta height:280 %}
{% embed_file signature/appearance/stroke-width/main.vue preview %}
{% embed_file signature/appearance/stroke-width/main.js %}
{% endmeta %}

## Colors

The Signature allows you to control the line and background color through the [`color`]({% slug api_inputs_signatureprops %}#toc-color) and [`backgroundColor`]({% slug api_inputs_signatureprops %}#toc-backgroundColor) properties.

The color options supports the following formats:

| Format         | Description
| ---            | ---
| red            | The [basic](http://www.w3.org/TR/css3-color/#html4) or [extended](http://www.w3.org/TR/css3-color/#svg-color) CSS Color name
| #ff0000        | The Hex RGB value
| rgb(255, 0, 0) | The RGB value

The following example demonstrates how to define the Signature colors.

{% meta height:250 %}
{% embed_file signature/appearance/color/main.vue preview %}
{% embed_file signature/appearance/color/main.js %}
{% endmeta %}

## Size

The Signature allows you to set different `padding` on the internal controls. To achieve this utilize the [`size`]({% slug api_inputs_signatureprops %}#toc-size) property.

The [`size`]({% slug api_inputs_signatureprops %}#toc-size) property supports the following values:

* `small`&mdash;Sets the `padding` of the internal element to `2px 8px`.
* `medium`&mdash;Sets the `padding` of the internal element to `4px 8px`.
* `large`&mdash;Sets the `padding` of the internal element to `6px 8px`.

{% meta height:450 %}
{% embed_file signature/appearance/size/main.vue preview %}
{% embed_file signature/appearance/size/main.js %}
{% endmeta %}

## Fill Mode

The Signature allows you to set different fill modes by using the [`fillMode`]({% slug api_inputs_signatureprops %}#toc-fillMode) property.

The [`fillMode`]({% slug api_inputs_signatureprops %}#toc-fillMode) property supports the following values:

* `flat`&mdash;Sets a `transparent background` and `solid bottom border`.
* `solid`&mdash;Applies a `background` color and `solid borders`.
* `outline`&mdash;Sets a `transparent background` and `solid borders`.

{% meta height:450 %}
{% embed_file signature/appearance/fill-mode/main.vue preview %}
{% embed_file signature/appearance/fill-mode/main.js %}
{% endmeta %}

## Rounded Corners

The Signature enables you to apply different `border-radius` to the component through the [`rounded`]({% slug api_inputs_signatureprops %}#toc-rounded) property.

The [`rounded`]({% slug api_inputs_signatureprops %}#toc-rounded) property supports the following values:

* `none`&mdash;Does not set a `border radius` className.
* `small`&mdash;Sets the `border radius` of the Signature to `1px`.
* `medium`&mdash;Sets the `border radius` of the Signature to `2px`.
* `large`&mdash;Sets the `border radius` of the Signature to `4px`.
* `full`&mdash;Sets the `border radius` of the Signature track to `9999px`.

{% meta height:450 %}
{% embed_file signature/appearance/roundness/main.vue preview %}
{% embed_file signature/appearance/roundness/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Signature]({% slug api_inputs_signatureprops %})
* [Signature `size` options]({% slug api_inputs_signatureprops %}#toc-size)
* [Signature `fillMode` options]({% slug api_inputs_signatureprops %}#toc-fillMode)
* [Signature `rounded` options]({% slug api_inputs_signatureprops %}#toc-rounded)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
