---
title: Popup
description: "Control the popup size of the Kendo UI for Vue Native Signature in Vue projects."
slug: popup_signature
position: 5
---

# Popup

The Signature can be maximized in a modal popup for easier drawing on devices with smaller screens.

## Popup Size

The dimensions of the maximized signature can be controlled using the [`popupScale`]({% slug api_inputs_signatureprops %}#toc-popupscale) property.
The default value is 3 which results in a popup size 3x as large as the Signature element.

The following example demonstrates how to set the popup size at 1.5x of the element size:

{% meta height:300 %}
{% embed_file signature/popup/scale/main.vue preview %}
{% embed_file signature/popup/scale/main.js %}
{% embed_file shared/sample-signature.js %}
{% endmeta %}

## Disable Popup

To disable the popup, set the [`maximizable`]({% slug api_inputs_signatureprops %}#toc-maximizable) property to `false`.

{% meta height:150 %}
{% embed_file signature/popup/disabled/main.vue preview %}
{% embed_file signature/popup/disabled/main.js %}
{% embed_file shared/sample-signature.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Signature]({% slug api_inputs_signatureprops %})

