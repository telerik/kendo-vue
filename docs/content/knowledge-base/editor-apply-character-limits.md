---
title: Applying Max and Min Character Limits in Kendo UI for Vue Editor
description: Learn how to apply maximum and minimum character limits in the Kendo UI for Vue Editor. Restrict users from entering more characters than specified.
type: how-to
page_title: Setting Character Limits in Kendo UI for Vue Editor
meta_title: Setting Character Limits in Kendo UI for Vue Editor
slug: editor-apply-character-limits
tags: editor,kendo ui for vue,max-characters,min-characters,change-event
res_type: kb
ticketid: 1706595
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>Kendo UI for Vue Editor</td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I want to apply a maximum and minimum character limit in the [Kendo UI for Vue Editor](https://www.telerik.com/kendo-vue-ui/components/editor/overview/). For example, set a maximum character limit of 100 to restrict users from adding more content when the limit is reached.

This knowledge base article also answers the following questions:
- How do I restrict character input in the Kendo UI for Vue Editor?
- How to limit the number of characters in the Kendo UI for Vue Editor?
- Can I set a max character limit in the Kendo UI for Vue Editor?

## Solution

To set a maximum character limit, handle the `change` event of the Kendo UI for Vue Editor. Extract the number of symbols in the value and restrict the length to the desired maximum.

### Implementation Example

The following example demonstrates how to restrict the Kendo UI for Vue Editor to a maximum of 100 characters:

<demo metaUrl="knowledge-base/editor-apply-character-limits/" height="600"></demo>

### Explanation
1. Bind the `value` of the Editor to a data property (`editorValue` in this example).
2. Attach the `change` event handler (`onEditorChange`) to intercept user input.
3. Within the `onEditorChange` method, check if the length of the input is within the specified limit (100 characters). If so, update the Editor's `value` property.

## See Also

- [Kendo UI for Vue Editor Overview](https://www.telerik.com/kendo-vue-ui/components/editor/overview/)
- [Controlled Value in Kendo UI for Vue Editor](https://www.telerik.com/kendo-vue-ui/components/editor/controlled/)
- [Editor API Documentation](https://www.telerik.com/kendo-vue-ui/components/editor/api/)
