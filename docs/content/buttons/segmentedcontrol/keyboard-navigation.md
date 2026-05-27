---
title: Keyboard Navigation
page_title: Kendo UI for Vue SegmentedControl Documentation | Keyboard Navigation
description: 'Get started with the Kendo UI for Vue SegmentedControl and learn about the accessibility support it provides through its keyboard navigation functionality.'
tags: telerik,kendovue,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_segmentedcontrol
position: 110
---

# Keyboard Navigation

The following demo shows the keyboard navigation capabilities of the SegmentedControl. Click the control and use Tab, Enter, or Space to navigate and select items.

<demo metaUrl="buttons/segmentedcontrol/keyboard/" height="300"></demo>

## Managing the Focus

The SegmentedControl renders items as native `<button>` elements inside a container with `role="group"`. Each button is natively focusable and included in the tab sequence of the page. The currently selected item is indicated via `aria-pressed="true"`.

## Keyboard Navigation

The SegmentedControl supports the following keyboard shortcuts:

| Shortcut           | Behavior                                                       |
| ------------------ | -------------------------------------------------------------- |
| `Tab`              | Moves focus to the next focusable item in the page.            |
| `Shift`+`Tab`      | Moves focus to the previous focusable item in the page.        |
| `Enter` or `Space` | Selects the focused item and triggers the `change` event.      |

## See Also

-   [SegmentedControl Overview](slug:overview_segmentedcontrol)
-   [Appearance](slug:appearance_segmentedcontrol)
-   [API Reference of the SegmentedControl](slug:api_buttons_segmentedcontrolprops)
