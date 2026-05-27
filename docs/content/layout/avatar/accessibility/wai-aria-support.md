---
title: Wai-Aria Support
page_title: Kendo UI for Vue Avatar Documentation | Avatar  Accessibility
description: "Get started with the Kendo UI for Vue Avatar and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendo,vue,accessibility,wai-aria,wcag
slug: accessibility_avatar
position: 100
---

# Avatar Accessibility



Out of the box, the Kendo UI for Vue Avatar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The Avatar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-avatar img` | `alt` | Assures the presence of an `alt` attribute in a nested `img` tag inside the Avatar. |

## Section 508


The Avatar is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The Avatar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The Avatar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the Avatar component's keyboard navigation, refer to the article on [keyboard navigation in the Avatar component]({% slug keyboard_navigation_avatar %}).

## See Also

* [Accessibility in Kendo UI for Vue]({% slug overview_accessibility %})
* [Accessibility Compliance and Keyboard Support in Kendo UI for Vue]({% slug compliance_accessibility %})
