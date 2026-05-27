---
title: Resetting Editor History in Kendo UI for Vue
description: Learn how to reset the history of the Kendo UI for Vue Editor when dynamically changing its content.
type: how-to
page_title: Clear Editor History for Kendo UI for Vue
meta_title: Clear Editor History for Kendo UI for Vue
slug: editor-reset-history
tags: editor, kendo-ui-for-vue, editorview, editorstate, prosemirror-history
res_type: kb
ticketid: 1702544
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
<td> 7.0.0 </td>
</tr>
</tbody>
</table>

## Description

I want to reset the history of the [Kendo UI for Vue Editor](https://www.telerik.com/kendo-vue-ui/components/editor/) when its content changes dynamically. This ensures all undo/redo actions are cleared, and the Editor starts with a fresh history state.

This knowledge base article also answers the following questions:

-   How do I clear the history in the Kendo UI for Vue Editor?
-   How can I reset the Editor state in Kendo UI for Vue?
-   How can I use EditorView and EditorState to manage the Editor history?

## Solution

To reset the history of the Kendo UI for Vue Editor, follow these steps:

1. Access the `EditorView` through a template reference using `editorRef.value.getView()`.
2. Create a new `EditorState` with the new document and existing plugins using `EditorState.create()`.
3. Update the view state directly with `view.updateState()`.
4. Trigger a toolbar update to reflect the new history state by calling `editor.updateTools()`.

Below is an example implementation:

{% meta height:500 %}
{% embed_file editor-reset-history/main.vue preview %}
{% embed_file editor-reset-history/main.js %}
{% endmeta %}

### Notes

-   The `EditorState.create()` method initializes each plugin, resetting their internal state, including the history plugin.
-   The history plugin's state is tied to the `EditorState`, not the plugin instance, so creating a new state clears the history stack.

## See Also

-   [Kendo UI for Vue Editor Overview](https://www.telerik.com/kendo-vue-ui/components/editor/)
-   [ProseMirror State API](https://prosemirror.net/docs/ref/#state.EditorState)
-   [Kendo UI for Vue Editor API Reference](https://www.telerik.com/kendo-vue-ui/components/editor/api/)
