---
title: Closing Dialog When Clicking Outside the Control in Kendo UI for Vue
description: Learn how to close the Kendo UI for Vue Dialog when clicking outside of it.
type: how-to
page_title: How to Close Kendo UI for Vue Dialog on Click Outside
slug: dialog-close-on-outside-click
tags: kendovue, dialog, close, outside-click, toggle
res_type: kb
ticketid: 1676083
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I want to close the [Kendo UI for Vue Dialog](slug:overview_dialog) when clicking outside of it. The Dialog provides a close button, but I need it to close when clicking anywhere outside of the Dialog.

This knowledge base article also answers the following questions:

-   How to close the Kendo UI for Vue Dialog on overlay click?
-   How can I implement outside click handling for the Kendo UI for Vue Dialog?
-   How to toggle Kendo UI for Vue Dialog visibility with a click event outside?

## Solution

To close the Kendo UI for Vue Dialog when clicking outside of it, use `watch` to detect when the Dialog becomes visible, then attach a `click` listener to the overlay element after the DOM updates.

<demo metaUrl="knowledge-base/dialog-close-on-outside-click/" height="300"></demo>

### Key Details:

-   Use `watch` to observe the `visible` state of the Dialog.
-   Call `nextTick` before querying the DOM to ensure the overlay element is rendered.
-   Attach a `click` listener to the `.k-overlay` element to call your close function.
-   The listener is automatically removed when the Dialog closes because the overlay element is unmounted from the DOM.

## See Also

-   [Kendo UI for Vue Dialog Overview](slug:overview_dialog)
-   [Dialog Props Documentation](slug:api_dialogs_dialogprops)
