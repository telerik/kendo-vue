---
title: Tools
description: "Get started with the Kendo UI for Vue Native Editor, render its built-in button tools, and implement custom tools in its toolbar."
slug: tools_editor
position: 2
---

# Tools

The Kendo UI for Vue Native Editor provides a set of built-in, user-interface tools, enables you to customize the available tools and to add custom ones.

## Using Built-In Tools

To add or remove any of the available tools, use the [`tools`]({% slug api_editor_editorprops %}#toc-tools) prop of the Editor. All tools which are inserted in an array are rendered in a [Kendo UI for Vue ButtonGroup]({% slug overview_buttongroup %}) component.

The following example demonstrates all available tools of the Editor.



{% meta height:570 %}
{% embed_file all-tools/main.vue preview %}
{% embed_file all-tools/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}


## Customizing Built-In Tools

To customize any of the built-in tools of the Editor:

1. Based on the default tool configuration, create the desired tool settings.
1. Pass the settings to the corresponding function which creates the tool.

In the following example, the built-in `Bold` tool is changed to toggle the `B` tag, recognize the `STRONG` tag, its tooltip is changed to `My Custom Bold`, and the icon is reused. In addition, the `FontSize` and `FontName` DropDownLists' width and items are changed.

{% meta height:420 %}
{% embed_file edit-built-in-tools/main.vue preview %}
{% embed_file shared/content-basic.js %}
{% embed_file edit-built-in-tools/main.js %}
{% endmeta %}


<!-- To customize the ColorPicker of ForeColor or BackColor tools, wrap the tool into a function and pass the new props to
[colorPickerProps]({% slug api_editor_EditorTools_backcolorprops %}).

```jsx-no-run
  import { Editor, EditorTools } from '@progress/kendo-vue-editor';

  const { ForeColor, BackColor, Bold, Italic, Underline } = EditorTools;

  const CustomForeColor = props => (
    <ForeColor {...props} colorPickerProps={{ view: 'gradient' }} />
  );
  const CustomBackColor = props => (
    <BackColor {...props} colorPickerProps={{ view: 'gradient' }} />
  );

  const App = () => {
    return (
      <Editor
        tools={[[Bold, Italic, Underline], CustomForeColor, CustomBackColor]}
        contentStyle={{ height: 300 }}
        defaultContent={'<p>Editor Content</p>'}
      />
    );
  };
```

## Using Custom Tools

The Editor allows you to create and implement custom tools.

The following example demonstrates how to create:

* A drop-down list for applying color styles.
* A tool for toggling the background color style.
* Tools for inserting specific elements into the content.



{% meta height:420 %}
{% embed_file custom-tools/func/backgroundColorTool.tsx %}
{% embed_file custom-tools/func/insertTools.tsx %}
{% embed_file custom-tools/func/main.tsx preview %}
{% embed_file custom-tools/func/myColorTool.tsx %}
{% embed_file shared/content-basic.ts %}
{% endmeta %} -->


## Suggested Links

* [API Reference of the Editor]({% slug api_editor_editor %})
