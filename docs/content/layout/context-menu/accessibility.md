---
title: Accessibility
description: "Apply the accessibility support provided by the Kendo UI for Vue ContextMenu."
slug: accessibility_contextmenu
position: 70
---

# Accessibility

The `ContextMenu` is accessible by screen readers and provides full [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) support.

## WAI-ARIA Support

The ContextMenu uses the following `aria` attributes:

* `aria-orientation`&mdash;If the Menu is vertical.
* `aria-label`&mdash;For the item text.
* `aria-disabled`&mdash;For disabled items.
* `aria-haspopup` and `aria-expanded`&mdash;For items with children.

The ContextMenu uses the [`menubar`](https://www.w3.org/TR/wai-aria-1.1/#menubar), [`menuitem`](https://www.w3.org/TR/wai-aria-1.1/#menuitem), and [`menu`](https://www.w3.org/TR/wai-aria-1.1/#menu) roles.

To move the focus to the current keyboard navigation position, the ContextMenu utilizes the `tabindex` approach.

The ContextMenu also follows the [WAI-ARIA best practices](https://www.w3.org/TR/wai-aria-practices/#menu) for implementing the [keyboard navigation]({% slug keyboard_navigation_contextmenu %}) and is tested against the popular screen readers.

## Section 508

The ContextMenu is compliant with the [Section 508](https://www.section508.gov/) requirements.

## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
* [Keyboard Navigation]({% slug keyboard_navigation_contextmenu %})
