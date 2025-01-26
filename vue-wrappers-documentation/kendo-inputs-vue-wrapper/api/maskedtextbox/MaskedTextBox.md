---
title: MaskedTextBox API
description: "API Index | MaskedTextBox"
api_reference: true
slug: api_maskedtextboxcomponent_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/api/MaskedTextBoxProps/"
---

# MaskedTextBox

## Directive

`kendo-maskedtextbox`

## Props

### clear-prompt-char `Boolean`

(Available as of the Kendo UI Q2 2014 SP1 release) Specifies whether the MaskedTextBox will replace the prompt characters with spaces on blur ([`clearPromptChar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/configuration/clearpromptchar)). Prompt characters will be displayed once again on `focus`.

### culture `String`

The culture information that is used by the maskedtextbox ([`culture` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/configuration/culture)).

### mask `String`

The input mask ([`mask` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/configuration/mask)).

The supported mask rules are:

* `0`&mdash;A digit. Accepts any digit between 0 and 9.
* `9`&mdash;A digit or a space. Accepts any digit between 0 and 9 plus space.
* `#`&mdash;A digit or a space. Similar to `9` but allows also for the `+` (plus) and `-` (minus) signs.
* `L`&mdash;A letter. Restricts the input to letters a-z and A-Z. The rule is equivalent to `[a-zA-Z]` in regular expressions.
* `?`&mdash;A letter or a space. Restricts the input to letters a-z and A-Z. The rule is equivalent to `[a-zA-Z]` in regular expressions.
* `&`&mdash;A character. Accepts any character. The rule is equivalent to `\S` in regular expressions.
* `C`&mdash;A character or a space. Accepts any character. The rule is equivalent to `.` (dot) in regular expressions.
* `A`&mdash;An alphanumeric character. Accepts letters and digits only.
* `a`&mdash;An alphanumeric character or a space. Accepts letters, digits, and spaces only.
* `.`&mdash;A decimal placeholder. The decimal separator will be taken from the current culture that is used by Kendo UI.
* `,`&mdash;A thousand placeholder. The displayed character will be taken from the current culture that is used by Kendo UI.
* `$`&mdash;A currency symbol. The displayed character will be taken from the current culture that is used by Kendo UI.

### prompt-char `String`

The character for representing the absence of user input in the MaskedTextBox ([`promptChar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/configuration/promptchar)).

### rules `Object`

An object of custom mask rules ([`rules` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/configuration/rules)).

### unmask-on-post `Boolean`

(Available as of the Kendo UI Q1 2015 release) Specifies whether the MaskedTextBox will unmask the input value on form post ([`unmaskOnPost` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/configuration/unmaskonpost)).

### value `String`

The value of the MaskedTextBox ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/configuration/value)).

## Events

### change: `Function`

Fires when the value is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox/events/change).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox#methods). 

### kendoWidget

##### returns

Returns the Kendo UI MaskedTextBox instance.
