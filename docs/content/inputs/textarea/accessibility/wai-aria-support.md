---
title: Wai-Aria Support
page_title: Kendo UI for Vue Textarea Documentation | Textarea  Accessibility
description: "Get started with the Kendo UI for Vue Textarea and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendo,vue,accessibility,wai-aria,wcag
slug: accessibility_textarea
position: 100
---

# Textarea Accessibility



Out of the box, the Kendo UI for Vue TextArea provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The TextArea is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AAA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices, provides options for managing component's focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-input-inner` | `role=textbox` or `nodeName=textarea` | Describes the role of the component. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input requires an accessible name that will be assigned to it. |
|  | `aria-multiline=true` | Announces the multi-line behavior of the TextArea. |
|  | `aria-invalid=true` | The attribute is rendered only when the TextArea is in a form and announces the valid state of the component. |
| `.k-disabled .k-input-inner` | `disabled=disabled` or `aria-disabled=true` | The attribute is rendered only when the TextArea is disabled. |

## Resources

[WAI-ARIA Specification for the TextBox](https://www.w3.org/TR/wai-aria-1.2/#textbox)

## Section 508


The TextArea is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The TextArea has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The TextArea has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## See Also

* [Accessibility in Kendo UI for Vue]({% slug overview_accessibility %})
* [Accessibility Compliance and Keyboard Support in Kendo UI for Vue]({% slug compliance_accessibility %})
