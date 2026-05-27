---
title: Track New Content with a Custom Mark in Kendo UI for Vue Editor
description: Learn how to highlight and track newly typed or pasted content in the Kendo UI for Vue Editor using a custom ProseMirror mark and plugin.
type: how-to
page_title: How to Track New Content in Vue Editor - Kendo UI for Vue Editor
meta_title: How to Track New Content in Vue Editor - Kendo UI for Vue Editor
slug: editor-track-new-content
tags: editor, kendo-ui-for-vue, track changes, prosemirror, custom mark, plugin, highlight, paste
res_type: kb
ticketid: 1711734
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Kendo UI for Vue Editor </td>
</tr>
<tr>
<td> Version </td>
<td> 8.0.2 </td>
</tr>
</tbody>
</table>

## Description

I want to track and visually highlight new content that users type in the [Kendo UI for Vue Editor](https://www.telerik.com/kendo-vue-ui/components/editor/). For example, when tracking is enabled, all newly entered text should appear in a different color so that it is easy to distinguish from the original content.

## Solution

To track new content in the Kendo UI for Vue Editor, use a custom [ProseMirror](https://prosemirror.net/) mark and plugin:

1. **Define a custom `trackedText` mark** in the schema via the [`extendView`](slug:api_editor_editorprops#extendView) event. This mark wraps new content in a `<span>` with a distinct style (for example, blue text).

2. **Create a ProseMirror plugin** that intercepts `handleTextInput`, `handlePaste`, and `handleKeyDown`. When tracking is enabled, the plugin applies the `trackedText` mark to all newly inserted content and preserves the tracking format when pressing Enter to create new lines.

3. **Add a toolbar button** that toggles the tracking mode on and off.

<demo metaUrl="knowledge-base/editor-track-new-content/" height="400"></demo>

### Notes

-   The `trackedText` mark is defined with `inclusive: true` so that new text typed at the boundary of a tracked span continues to receive the mark.
-   The `handlePaste` handler recursively marks all pasted content fragments, preserving the document structure.
-   The `handleKeyDown` handler ensures that pressing Enter while tracking is enabled applies `setStoredMarks` so the new line continues in tracked mode.

## See Also

-   [Kendo UI for Vue Editor Overview](slug:overview_editor)
-   [API Reference of the Editor](slug:api_editor_editorprops)
-   [Customizing the Editor Schema](slug:schema_editor)
