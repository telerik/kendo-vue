---
title: Centering Kendo UI for Vue Dialog Within Parent Component
description: Learn how to constrain and center a Kendo UI for Vue Dialog within a parent component instead of the entire page.
type: how-to
page_title: How to Center Kendo UI for Vue Dialog Inside Parent Element
slug: dialog-center-in-parent-component
tags: kendovue, dialog, appendto, position, customization
res_type: kb
ticketid: 1708667
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
Progress® Kendo UI for Vue Native
</td>
</tr>
<tr>
<td> Version </td>
<td>
Current
</td>
</tr>
</tbody>
</table>

## Description

I want to constrain and center the [Kendo UI for Vue Dialog](slug:overview_dialog) within its parent component rather than centering it on the entire page. By default, the Dialog uses `position: fixed` CSS, causing it to be centered relative to the viewport. I need the Dialog to appear near the area where it was triggered for better user experience.

This knowledge base article also answers the following questions:

-   How can I position a Kendo UI for Vue Dialog relative to its parent container?
-   How can I make a Kendo UI for Vue Dialog appear near the trigger event?

## Solution

To center the Kendo UI for Vue Dialog inside a parent component, place the Dialog within the parent element in your template and adjust its positioning with CSS styles.

{% meta height:400 %}
{% embed_file dialog-center-in-parent-component/main.vue preview %}
{% embed_file dialog-center-in-parent-component/main.js %}
{% endmeta %}

### Key Details:

-   Place the Dialog component directly inside the parent container element in your template.
-   Apply `position: absolute` to the Dialog's `style` prop to position it relative to the parent.
-   Adjust `top`, `left`, and `transform` properties for centering the Dialog within the parent.
-   The parent container should have `position: relative` for absolute positioning to work correctly.
-   Use `v-if` to control Dialog visibility.

## See Also

-   [Kendo UI for Vue Dialog Overview](slug:overview_dialog)
-   [Dialog Props Documentation](slug:api_dialogs_dialogprops#appendto)
-   [Dialog Dimensions](slug:dimensions_dialog)
