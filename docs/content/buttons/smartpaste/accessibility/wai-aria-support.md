---
title: Wai-Aria Support
slug: accessibility_smartpaste
position: 100
---

# SmartPasteButton Accessibility

The SmartPasteButton is accessible by screen readers and provides full WAI-ARIA support.

## WAI-ARIA

The SmartPasteButton follows the WAI-ARIA specification for the [Button](https://www.w3.org/WAI-ARIA/apg/patterns/button/) design pattern.

| Attribute       | Value    | Description                                         |
| --------------- | -------- | --------------------------------------------------- |
| `role`          | `button` | Indicates that the element is a button.             |
| `aria-label`    |          | Defines a string that labels the SmartPasteButton.  |
| `aria-disabled` | `true`   | Set when the SmartPasteButton is disabled.          |

## Section 508

The SmartPasteButton is compliant with [Section 508](https://www.section508.gov/) requirements.

## Resources

-   [WAI-ARIA Button Pattern](https://www.w3.org/WAI-ARIA/apg/patterns/button/)
-   [Keyboard Navigation](slug:keyboard_navigation_smartpaste)
