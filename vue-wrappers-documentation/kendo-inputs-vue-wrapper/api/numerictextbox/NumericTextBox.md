---
title: NumericTextBox API
description: "API Index | NumericTextBox"
api_reference: true
slug: api_numerictextboxcomponent_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/api/NumericTextBoxProps/"
---

# NumericTextBox

## Directive

`kendo-numerictextbox`

## Props

### culture `String`

The culture information that is used by the NumericTextBox ([`culture` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/culture).

### decimals `Number`

Specifies the number precision which is applied to the value of the NumericTextBox and when the NumericTextBox is focused ([`decimals` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/decimals). If `decimals` is not set, the precision that is defined by the current culture is used. If the user enters a number with a greater precision than is currently configured, the value of the NumericTextBox will be rounded. For example, if `decimals` is set to `2` and the user fills in `12.346`, the value will become `12.35`. If the user fills in `12.99`, the value will become `13.00`.

### down-arrow-text `String`

The text of the tooltip on the **Down Arrow** ([`downArrowText` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/downarrowtext).

### factor `Number`

The factor by which the value is multiplied ([`factor` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/factor). The obtained result is used as an edit value&mdash;if `15` as a string is entered in the NumericTextBox and the `factor` value is set to `100`, the visual value will be `1500`. On `blur`, the visual value will be divided by 100 scaling in this way the value of the NumericTextBox to the original proportion.

### format `String`

The number format which is used when the NumericTextBox is not focused ([`format` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/format). Any valid number format is allowed.Compare with the decimals property.

### max `Number`

The largest value which the user can enter ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/max).

### min `Number`

The smallest value which the user can enter ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/min).

### placeholder `String`

The hint that is displayed by the NumericTextBox when it is empty ([`placeholder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/placeholder). Not set by default.

### restrict-decimals `Boolean`

Specifies whether the decimals length will be restricted during typing ([`restrictDecimals` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/restrictdecimals). The length of the fraction is defined by the decimals value.

### round `Boolean`

Specifies whether the value will be rounded or truncated ([`round` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/round). The length of the fraction is defined by the decimals value.

### spinners `Boolean`

Specifies whether the up and down spin buttons will be rendered ([`spinners` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/spinners).

### step `Number`

The value for incrementing or decrementing the value of the NumericTextBox ([`step` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/step).

### up-arrow-text `String`

The text of the tooltip on the **Up Arrow** ([`upArrowText` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/uparrowtext).

### value `Number`

The value of the NumericTextBox ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/configuration/value).

## Events

### change: `Function`

Fires when the value is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/events/change).

### spin: `Function`

Fires when the value is changed through the spin buttons ([`spin` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox/events/spin).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox#methods). 

### kendoWidget

##### returns

Returns the Kendo UI NumericTextBox instance.
