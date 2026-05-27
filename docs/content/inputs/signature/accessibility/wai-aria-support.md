---
title: Wai-Aria Support
page_title: Kendo UI for Vue Signature Documentation | Signature  Accessibility
description: "Get started with the Kendo UI for Vue Signature and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendo,vue,accessibility,wai-aria,wcag
slug: accessibility_signature
position: 100
---

# Signature Accessibility



Out of the box, the Kendo UI for Vue Signature provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The Signature is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices, provides options for managing component's focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Signature canvas

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-signature-canvas` | `role=img` | Sets canvas `role` to `img`. |
| `.k-signature-canvas` | `aria-label` | Announces the purpose of the Signature. |
| `.k-signature-canvas:nth-child(1)` | `tabindex=0` | Makes the Signature canvas the first focusable element. |

### Signature action buttons

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-signature-action` | `nodeName=button` | Renders button. |
| `.k-signature-action` | `aria-label` | Announces the purpose of the button. |

## Section 508


The Signature is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The Signature has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The Signature has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## See Also

* [Accessibility in Kendo UI for Vue]({% slug overview_accessibility %})
* [Accessibility Compliance and Keyboard Support in Kendo UI for Vue]({% slug compliance_accessibility %})
