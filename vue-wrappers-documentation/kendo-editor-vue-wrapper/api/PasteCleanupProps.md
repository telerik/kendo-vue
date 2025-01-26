---
title: pasteCleanupProps API
description: "API Index | pasteCleanupProps"
api_reference: true
slug: api_editor_pastecleanupprops_wrapper
---

# PasteCleanupProps

### paste-cleanup-all `Boolean`

All HTML tags that are stripped and which leave only the text in the content.

### paste-cleanup-css `Boolean`

Removes the `style` and `class` attributes from the pasting content.

### paste-cleanup-custom `Function`

A callback function that integrates a custom implementation for cleaning up the pasted content. Make sure that the callback function always returns the result.

### paste-cleanup-keep-new-lines `Boolean`

Strips all HTML tags while keeping new lines in the pasted content.

### paste-cleanup-ms-all-formatting `Boolean`

Removes all special formatting from MS Word content&mdash;for example, font name, font size, and MS Word specific tags.

### paste-cleanup-ms-convert-lists `Boolean`

Converts MS Word pasted content into HTML lists.

### paste-cleanup-ms-tags `Boolean`

Removes all MS Word specific tags and cleans up the extra metadata.

### paste-cleanup-none `Boolean`

Prevents the cleanup of the content.

### paste-cleanup-span `Boolean`

Removes all `span` elements from the content and ensures that much of the inline formatting is removed.

## Suggested Links

* [`PasteCleanup` in Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/pastecleanup)
