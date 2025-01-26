---
title: Literals
page_title: Literals - MaskedTextBox - Kendo UI for Vue
description: "Use the available globalized mask literals when working with the Kendo UI MaskedTextBox wrapper for Vue."
slug: literals_maskedtextbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/maskedtextbox/masks/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/maskedtextbox/masks"></WrapperBanner></div>    

# Literals

The MaskedTextBox provides globalized mask literals which represent static symbols.

Apart from the built-in and customs rules, you can use static symbols in the mask pattern that are also known as literals. In the masked value, a literal is always rendered on the same position on which it is defined in the mask property.

Based on the current culture, the available globalized mask literals are:
* `.`&mdash;Decimal placeholder. The decimal separator is set according to the current culture used by Kendo UI.
* `,`&mdash;Thousands placeholder. The display character is set according to the current culture used by Kendo UI.
* `$`&mdash;Currency symbol. The display character is set according to the current culture used by Kendo UI.

> To escape any of the literals, use the `\` character.

{% meta height:100 %}
{% embed_file maskedtextbox/literals/main.vue preview %}
{% embed_file maskedtextbox/literals/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MaskedTextBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/maskedtextbox/overview)
* [API Reference of the MaskedTextBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox)
