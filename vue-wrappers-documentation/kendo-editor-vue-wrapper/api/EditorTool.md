---
title: EditorTool API
description: "API Index | EditorTool"
api_reference: true
slug: api_editortoolcomponent_wrapper
---

# EditorTool

## Directive

`kendo-editor-tool`

## Props

### name `String`

When you specify a tool as an object, you are required to supply a `name` for that tool&mdash;`undo` and `redo` are reserved tool names.

### tooltip `String`

The text which will be displayed when the user hovers over the tool button with the mouse.

### exec `Function`

The JavaScript function which will be executed when the user clicks the tool button.

### items `Array`

Specifies the list items which are displayed by certain tools&mdash;for example, `fontName`, `fontSize`, or `formatting`,.

### palette `String | Array`

Specifies the color palette for the `foreColor` and `backColor` tools.

### columns `Number`

When a list of colors is defined, specifies the color columns for `foreColor` and `backColor` tools.

### template `String`

The Kendo UI template for rendering the given tool.

## Suggested Links

* [`Tools` in Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/tools)
