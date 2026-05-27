---
title: Wai-Aria Support
page_title: Kendo UI Textbox Documentation | Textbox  Accessibility
description: "Get started with the Kendo UI for Vue Textbox and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendovue,accessibility,wai-aria,wcag
slug: accessibility_textbox
position: 100
---

# Textbox Accessibility



Out of the box, the Kendo UI for Vue TextBox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The TextBox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.1  AA](https://www.w3.org/TR/WCAG21/) standards](https://www.w3.org/TR/WCAG21/) and [Section 508](http://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


The following table lists the selectors, attributes, and behavior patterns supported by the TextBox component:


No role attribute is implemented as the  `html input type="text"` element is sufficient for definining purpose of the component.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| .k-input-inner | `role=textbox` or `nodeName=input` | Describes the role of the component. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name to be assigned to it. |
|  | `aria-invalid=true` | Attribute is rendered only when the textbox is in form and announces the valid state of the component. |
| .k-disabled .k-input-inner | `disabled=disabled` or `aria-disabled=true` | Attribute is rendered only when the textbox is disabled. |

## Resources

[WAI-ARIA specification for textbox](https://www.w3.org/TR/wai-aria-1.2/#textbox)

## Section 508


The TextBox is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The TextBox has been extensively tested automatically with static code analyzers and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The following table lists the screen readers supported by the TextBox:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## See Also

* [Accessibility in Kendo UI for Vue Native](https://www.telerik.com/kendo-vue-ui/components/accessibility/)
* [Accessibility Compliance and Keyboard Support in Kendo UI for Vue Native](https://www.telerik.com/kendo-vue-ui/components/accessibility/accessibility-compliance/)

