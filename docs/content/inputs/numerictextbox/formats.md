---
title: Formats
description: "Control the format of the Kendo UI for Vue Native NumericTextBox in Vue projects."
slug: formats_numerictextbox
position: 40
---

# Formats

You can control the format of the Kendo UI for Vue NumericTextBox by using the [`format`]({% slug api_inputs %}#toc-format) property.

<!-- TODO: Add NumberFormatOption API slug -->
It accepts string or [`NumberFormatOptions`] parameters. When `format` is set and the input element is not focused, the value is formatted properly. By default, the format is set to `'n2'`.

For more information on the date and number formats KendoVue supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl/blob/master/docs/num-formatting/index.md) GitHub repository.

{% meta height:350 %}
{% embed_file numerictextbox/formats/main.vue preview %}
{% embed_file numerictextbox/formats/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the NumericTextBoxComponent]({% slug api_inputs %})
