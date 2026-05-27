---
title: Selection
description: "Learn more about the selection types supported by the Kendo UI for Vue Native Editor and how to configure them in your Vue application."
slug: selection_editor
position: 10
---

# Selection

A Selection object represents the range of the user selection in the Editor's editable area. It could point to a range of selected text, a caret position, or a set of node(s).

To set a selection in the Editor, create a new [`Selection`](https://prosemirror.net/docs/ref/#state.Selection) object and pass it to the Editor through a [`transaction`](https://prosemirror.net/docs/ref/#state.Transaction). Selections are represented by instances and subclasses of the `Selection` class available in the `ProseMirror` object.

The Editor component supports several types of selection: [TextSelection](https://prosemirror.net/docs/ref/#state.TextSelection), [NodeSelection](https://prosemirror.net/docs/ref/#state.NodeSelection), [CellSelection](https://github.com/ProseMirror/prosemirror-tables/#class-cellselection-extends-selection), and [AllSelection](https://prosemirror.net/docs/ref/#state.AllSelection).

```jsx-no-run
import { ProseMirror } from '@progress/kendo-vue-editor';

const { TextSelection, NodeSelection, CellSelection, AllSelection } = ProseMirror;
```

## Text Selection

To create a [TextSelection](https://prosemirror.net/docs/ref/#state.TextSelection) object, use the [TextSelection.create](https://prosemirror.net/docs/ref/#state.TextSelection^create) method and pass the following:

- the Editor's [document](https://prosemirror.net/docs/ref/#state.EditorState.doc)
- the selection [anchor](https://prosemirror.net/docs/ref/#state.Selection.anchor) position
- the [head](https://prosemirror.net/docs/ref/#state.Selection.head) position

Counting the selection positions in the Editor starts from 0 and increases when passing through a node or a character. The code snippet below shows a sample of counting the positions.

```html-no-run
(0)<p>(1)sample text(12)</p>(13)
(13)<p>(14)<em>sample text</em>(25)</p>(26)
(26)<p>(27)<img />(28)</p>(29)
(29)<ol>(30)
(30)<li>(31)<p>(32)text(36)</p>(37)</li>(38)
(38)</ol>(39)
```

The following example demonstrates how to create and apply a custom `TextSelection`.

Drag the Slider handles to modify the selection.

{% meta height:550 %}
{% embed_file selection/text/main.vue preview %}
{% embed_file selection/text/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}

## Node Selection

The Editor [`NodeSelection`](https://prosemirror.net/docs/ref/#state.NodeSelection) is applied to a single [`Node`](https://prosemirror.net/docs/ref/#model.Node).

To create a node selection:

1. Use the [`NodeSelection.create`](https://prosemirror.net/docs/ref/#state.NodeSelection^create) method.
1. Pass the following to the method:
    - the Editor's [document](https://prosemirror.net/docs/ref/#state.EditorState.doc)
    - the start position of the node that needs to be selected

Alternatively, hold the `ctrl`/`cmd` key and click on a node to select it.

The following example demonstrates how to select a node programmatically.

{% meta height:520 %}
{% embed_file selection/node/main.vue preview %}
{% embed_file selection/node/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}

## Cell Selection

The [ProseMirror Tables module](https://github.com/ProseMirror/prosemirror-tables/#prosemirror-table-module) provides a Schema extension for table nodes support in the Editor. The `CellSelection` class extends `Selection` and is used for selecting single or multiple cells in a table.

To apply `CellSelection`, select multiple cells in the table by dragging over them.

{% meta height:300 %}
{% embed_file selection/cell/main.vue preview %}
{% embed_file selection/cell/main.js %}
{% embed_file selection/cell/content.js %}
{% endmeta %}

## All Selection

The [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) type is needed for selecting the whole document content, since `TextSelection` does not handle this task well in some scenarios.

{% meta height:450 %}
{% embed_file selection/select-all/main.vue preview %}
{% embed_file selection/select-all/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}

## Get Selected HTML and Text

To get the HTML corresponding to the current Editor selection, use the [`cut`](https://prosemirror.net/docs/ref/#model.Node.cut) method to create a `Node` from the selected range and the [`EditorUtils.getHtml`]({% slug api_editor_editorutils %}#toc-gethtml) method to retrieve the corresponding HTML content as a string. To retrieve the selected text, use the [`textContent`](https://prosemirror.net/docs/ref/#model.Node.textContent) getter of the node created from the selected range.

The following example demonstrates how to obtain the selected HTML and text from the Editor. Make a selection in the Editor and see the selected content below.

{% meta height:850 %}
{% embed_file selection/get-html/main.vue preview %}
{% embed_file selection/get-html/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the Editor]({% slug api_editor_editor %})
- [ProseMirror Document Selection](https://prosemirror.net/docs/ref/#state.Selection)
