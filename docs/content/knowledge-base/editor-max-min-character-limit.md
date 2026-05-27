---
title: Applying Max and Min Character Limits in Kendo UI for Vue Editor
description: Learn how to restrict the character count in Kendo UI for Vue Editor to a specific maximum or minimum limit.
type: how-to
page_title: How to Set Max and Min Character Limits in Vue Editor
meta_title: How to Set Max and Min Character Limits in Vue Editor
slug: vue-editor-max-min-character-limit
tags: editor, kendo ui for vue, max character limit, min character limit, controlled value, change event
res_type: kb
ticketid: 1706595
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Kendo UI for Vue Editor</td>
</tr>
<tr>
<td>Version</td>
<td>7.0.2</td>
</tr>
</tbody>
</table>

## Description

I want to restrict the Kendo UI for Vue [Editor](https://www.telerik.com/kendo-vue-ui/components/editor/overview/) to a specific number of characters. For example, I want to set a maximum character limit of 100 so that users cannot add more than 100 characters to the Editor. The change event should handle this restriction.

This knowledge base article also answers the following questions:

-   How to limit the character count in Kendo UI for Vue Editor?
-   How to set a maximum character limit in Kendo UI for Vue Editor?
-   How to enforce minimum and maximum character limits in Vue Editor?

## Solution

To restrict the Kendo UI for Vue Editor to a maximum character limit, handle the `change` event and control the value based on its length.

<demo metaUrl="knowledge-base/editor-max-min-character-limit/" height="300"></demo>

### Controlling the Document Value

Use the Editor's controlled document value approach:

```vue
<template>
    <div>
        <Editor :value="docValue" @change="onEditorChange" />
    </div>
</template>

<script>
import { Editor } from '@progress/kendo-vue-editor';

export default {
    components: { Editor },
    data() {
        return {
            docValue: '<p>Initial content</p>',
        };
    },
    methods: {
        onEditorChange(event) {
            const maxLength = 100;
            const content = event.value || '';
            if (content.length <= maxLength) {
                this.docValue = content;
            } else {
                alert('Character limit exceeded!');
            }
        },
    },
};
</script>
```

### Using String Value

Alternatively, control the Editor using a plain string value:

```vue
<template>
    <div>
        <Editor :value="stringValue" @change="onEditorChange" />
    </div>
</template>

<script>
import { Editor } from '@progress/kendo-vue-editor';

export default {
    components: { Editor },
    data() {
        return {
            stringValue: 'Initial content',
        };
    },
    methods: {
        onEditorChange(event) {
            const maxLength = 100;
            const content = event.value || '';
            if (content.length <= maxLength) {
                this.stringValue = content;
            } else {
                alert('Character limit exceeded!');
            }
        },
    },
};
</script>
```

## See Also

-   [Editor Overview](https://www.telerik.com/kendo-vue-ui/components/editor/overview/)
-   [Controlled Value Documentation](https://www.telerik.com/kendo-vue-ui/components/editor/controlled)
-   [StackBlitz Example: Controlling the Doc Value](https://stackblitz.com/edit/wwk99qka?file=src%2Fmain.vue)
-   [StackBlitz Example: Using String Value](https://stackblitz.com/edit/a33a1tyc?file=src%2Fmain.vue)
