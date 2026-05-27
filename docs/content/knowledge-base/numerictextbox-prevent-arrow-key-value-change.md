---
title: Prevent Arrow Keys from Changing NumericTextBox Value
description: Learn how to prevent the ArrowUp and ArrowDown keys from increasing or decreasing the value of the Kendo UI for Vue NumericTextBox while still allowing parent key events to fire.
type: how-to
page_title: Prevent Arrow Key Value Change in Kendo UI for Vue NumericTextBox
meta_title: Prevent Arrow Key Value Change in Kendo UI for Vue NumericTextBox
slug: numerictextbox-prevent-arrow-key-value-change
tags: input, inputs, numerictextbox, arrow keys, prevent, keydown, controlled, change
res_type: kb
ticketid: 1712227
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Kendo UI for Vue NumericTextBox </td>
</tr>
<tr>
<td> Version </td>
<td> 8.0.2 </td>
</tr>
</tbody>
</table>

## Description

I want to prevent the ArrowUp and ArrowDown keys from increasing or decreasing the value in the [Kendo UI for Vue NumericTextBox](https://www.telerik.com/kendo-vue-ui/components/inputs/numerictextbox/). Using `stopPropagation` in a key-down capture handler blocks the event from reaching a parent `@keydown` handler (for example, on a wrapping `<td>`), which is not desirable.

## Solution

Intercept the arrow key and mouse wheel events in the capture phase using a wrapper element around the NumericTextBox. Call `preventDefault()` and `stopPropagation()` to prevent the component from processing the arrow key or wheel increment/decrement. To ensure the parent `@keydown` handler still fires, re-dispatch the keyboard event on the parent element.

This approach stops the value change at its source — before the NumericTextBox's internal handler runs — which avoids visual glitches from internal state updates.

<demo metaUrl="knowledge-base/numerictextbox-prevent-arrow-key-value-change/" height="350"></demo>

## See Also

-   [Kendo UI for Vue NumericTextBox Overview](slug:overview_numerictextbox)
-   [API Reference of the NumericTextBox](slug:api_inputs_numerictextboxprops)
