---
title: Sanitizing Pasted Content in Kendo UI for Vue Editor
description: Learn how to sanitize pasted content in the Kendo UI for Vue Editor by customizing the paste settings and removing unwanted styles.
type: how-to
page_title: Removing Styles from Pasted Content in Kendo Vue Editor
meta_title: Removing Styles from Pasted Content in Kendo Vue Editor
slug: editor-sanitizing-pasted-content
tags: kendo-ui-for-vue,editor,paste,sanitize,remove-styles
res_type: kb
ticketid: 1690587
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
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I need to sanitize pasted content in the [Kendo UI for Vue Editor](https://www.telerik.com/kendo-vue-ui/components/editor/). I want to remove styles such as background color and font color from the pasted text. The provided demo in the documentation mentions sanitizing pasted content, but unwanted styles are still preserved. I also need clarification on what "sanitize" means in this context.

This knowledge base article also answers the following questions:
- How can I remove font and background styles when pasting content in Kendo Vue Editor?
- What does sanitizing pasted content mean in Kendo Vue Editor?
- How can I customize the paste settings in Kendo Vue Editor?

## Solution

Sanitizing pasted content in the Kendo UI for Vue Editor means removing or modifying specific attributes or styles from the pasted content. To remove styles like background color and font color, customize the `pasteSettings` by using the `removeAttribute` function for the `style` attribute.

Follow these steps to achieve this:

1. Define a `pasteSettings` object and use the `removeAttribute` function for the `style` attribute.
2. Apply the `pasteSettings` to the Editor.

Example code snippet:

```javascript
const pasteSettings = {
  convertMsLists: true,
  attributes: {
    class: sanitizeClassAttr, // Example for sanitizing class attributes
    style: removeAttribute,   // Removes all style attributes
    width: () => {}           // Example for other attributes
  }
};

function removeAttribute() {
  return null; // Removes the attribute
}

// Apply the pasteSettings to the Editor
<Editor :paste-html="pasteSettings" />
```

You can see a demo implementing the suggestions above here:

{% meta height: 420 %}
{% embed_file editor-sanitizing-pasted-content/main.vue preview %}
{% embed_file editor-sanitizing-pasted-content/main.js %}
{% endmeta %}


## See Also

- [Kendo UI for Vue Editor Overview](https://www.telerik.com/kendo-vue-ui/components/editor/)
- [Kendo UI for Vue Editor Paste Settings](https://www.telerik.com/kendo-vue-ui/components/editor/paste/)
- [Kendo UI for Vue Editor API Documentation](https://www.telerik.com/kendo-vue-ui/components/editor/api/)
