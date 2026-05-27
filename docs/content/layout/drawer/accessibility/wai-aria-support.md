---
title: Wai-Aria Support
page_title: Kendo UI for Vue Drawer Documentation | Drawer  Accessibility
description: "Get started with the Kendo UI for Vue Drawer and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendo,vue,accessibility,wai-aria,wcag
slug: accessibility_drawer
position: 100
---

# Drawer Accessibility



Out of the box, the Kendo UI for Vue Drawer provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The Drawer is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices, provides options for managing component's focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Drawer component allows rendering a whole template inside of it. Thus, the accessibility roles are applied only when the built-in data-binding is used.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-drawer ul` | `role=menubar` | Indicates that the list of drawer items is a menubar. |
|  | `aria-orientation=vertical` | Indicates that the orientation of the drawer is vertical. |
| `.k-drawer-item:not(.k-drawer-separator)` | `role=menuitem` | Indicates that the item of a drawer serves as a menuitem. |
|  | `aria-label` | The drawer item requires an `aria-label` attribute when in mini mode and no content is rendered in the item. The `aria-label` points to the text field value of the item. |
| `.k-drawer-item.k-drawer-separator` | `role=separator` | Indicates that the item of a drawer serves as a separator. |

## Section 508


The Drawer is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The Drawer has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The Drawer has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## See Also

* [Accessibility in Kendo UI for Vue]({% slug overview_accessibility %})
* [Accessibility Compliance and Keyboard Support in Kendo UI for Vue]({% slug compliance_accessibility %})
