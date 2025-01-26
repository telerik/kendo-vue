---
title: Mask Rules
page_title: Mask Rules - MaskedTextBox - Kendo UI for Vue
description: "Implement mask rules when working with the Kendo UI MaskedTextBox wrapper for Vue."
slug: mask_rules_maskedtextbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/maskedtextbox/masks/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/maskedtextbox/masks"></WrapperBanner></div>    

# Mask Rules

The MaskedTextBox provides predefines mask rules.

The available predefined mask rules are:
- `0`&mdash;Digit. Accepts any digit between 0 and 9.
- `9`&mdash;Digit or space. Accepts any digit between 0 and 9 or space.
- `#`&mdash;Digit or space. Identical to `9`. In addition, allows the `+` (plus) and `-` (minus) signs.
- `L`&mdash;Letter. Restricts the input to a-z and A-Z letters. This rule is equivalent to [a-zA-Z] in regular expressions.
- `?`&mdash;Letter or space. Restricts the input to letters a-z and A-Z. This rule is equivalent to [a-zA-Z]|\s in regular expressions.
- `&`&mdash;Character. Accepts any character except a space. The rule is equivalent to `\S` in regular expressions.
- `C`&mdash;Character or space. Accepts any character. The rule is equivalent to `.` in regular expressions.
- `A`&mdash;Alphanumeric. Accepts letters and digits only.
- `a`&mdash;Alphanumeric or space. Accepts only letters, digits, and space.

> To escape any of the masks, use the `\` character. The escaped rules transform to literals.

The following example demonstrates how to specify a phone number mask.

{% meta height:100 %}
{% embed_file maskedtextbox/rules/main.vue preview %}
{% embed_file maskedtextbox/rules/main.js %}
{% endmeta %}

## Known Limitations

* To restrict the typed value on mobile devices, the MaskedTextBox listens to input events such as `keydown` and `keypress`.
* On some mobile browsers, mostly Android or the Windows Mobile OS built-in browsers, such input events do not fire at all. This behavior prevents the normal functioning of the MaskedTextBox because they are fundamental for the typing restriction. Recent tests show that the MaskedTextBox works in the latest iOS version.

## Suggested Links

* [Kendo UI MaskedTextBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/maskedtextbox/overview)
* [API Reference of the MaskedTextBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox)
