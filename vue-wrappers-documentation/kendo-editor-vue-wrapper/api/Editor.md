---
title: Editor API
description: "API Index | Editor"
api_reference: true
slug: api_editorcomponent_wrapper
---

# Editor

## Directive

`kendo-editor`

## Child Components

* [`kendo-editor-tool`]({% slug api_editortoolcomponent_wrapper %})

## Props

### deserialization `Object`

Fine-tunes the deserialization in the Editor ([`deserialization` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/deserialization)). Deserialization is the process of parsing the HTML string input from the `value()` method or from the `viewHtml` dialog into editable content. The supported composite props are available in [`DeserializationProps`]({% slug api_editor_deserializationprops_wrapper %}).

### domain `String`

Relaxes the same-origin policy when the iframe-based Editor is in use ([`domain` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/domain)). This process is automatic except when the policy is relaxed by `document.domain = document.domain` in which case you have to use the `domain` property to enable the proper functioning of the Editor across browsers. As of the 2014.1.319 release, the `domain` property is available in internal builds.

### encoded `Boolean`

Indicates whether the Editor will submit encoded HTML tags ([`encoded` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/encoded)). By default, the submitted value is encoded.

### immutables `Boolean | Object`

If `immutables` is enabled, the Editor disables the edit and command execution in elements that are marked with the `editablecontent="false"` attribute ([`immutables` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/immutables)). The supported composite props are available in [`ImmutablesProps`]({% slug api_editor_immutablesprops_wrapper %}).

### messages `Object`

Defines the text of the labels that are displayed within the Editor ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/messages)). Used primarily for localization. The supported composite props are available in [`MessagesProps`]({% slug api_editor_messagesprops_wrapper %}).

### paste-cleanup `Object`

The options for controlling the way the pasted content is modified before it is added to the Editor ([`pasteCleanup` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/pastecleanup)). The supported composite props are available in [`PasteCleanupProps`]({% slug api_editor_pastecleanupprops_wrapper %}).

### pdf `Object`

Configures the PDF export settings of the Editor ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_editor_pdfprops_wrapper %}).

### placeholder `String`

The displayed hint when the Editor is empty. ([`placeholder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/placeholder)). Only applicable in the [classic mode](https://docs.telerik.com/kendo-ui/controls/editors/editor/overview#classic-mode).

### resizable `Boolean | Object`

If `resizable` is enabled, the Editor renders a resize handle ([`resizable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/resizable)). The supported composite props are available in [`ResizableProps`]({% slug api_editor_resizableprops_wrapper %})

### serialization `Object`

Allows the setup of the serialization options ([`serialization` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/serialization)). The supported composite props are available in [`SerializationProps`]({% slug api_editor_serializationprops_wrapper %}).

### stylesheets `Array`

Allows the inclusion of the custom stylesheets in the editing area ([`stylesheets` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/stylesheets)). The `stylesheets` setting is applicable only when the Editor is initialized from a `textarea` and a `contenteditable` iframe is generated.

### tools `Array`

A collection of tools for interacting with the Editor ([`tools` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/tools)). To include tools, specify their names. Custom tools and tools that require configuration are defined as objects.

The supported Editor commands are:

* Basic text formatting options&mdash;`bold`, `italic`, `underline`, `strikethrough`, `subscript`, `superscript`.
* Font and color&mdash;`fontName`, `fontSize`, `foreColor`, `backColor`.
* Alignment&mdash;`justifyLeft`, `justifyCenter`, `justifyRight`, `justifyFull`.
* Lists&mdash;`insertUnorderedList`, `insertOrderedList`, `indent`, `outdent`.
* Links, images, and files&mdash;`createLink`, `unlink`, `insertImage`, `insertFile`.
* Table editing&mdash;`tableWizard`, `createTable`, `addColumnLeft`, `addColumnRight`, `addRowAbove`, `addRowBelow`, `deleteRow`, `deleteColumn`.
* Structural markup and styles&mdash;`formatting`, `cleanFormatting`.
* Snippets&mdash;`insertHtml`.
* HTML code view&mdash;`viewHtml`.
* Print edited page&mdash;`print`.
* Export to PDF&mdash;`pdf`.

### image-browser `Object`

The configuration for the image browser dialog ([`imageBrowser` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/imagebrowser)). The supported composite props are available in [`ImageBrowserProps`]({% slug api_editor_imagebrowserprops_wrapper %}).

### file-browser `Object`

The configuration for the file browser dialog ([`fileBrowser` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/filebrowser)). The supported composite props are available in [`FileBrowserProps`]({% slug api_editor_filebrowserprops_wrapper %}).

## Events

### change: `Function`

Fires when the Editor is blurred and its content was changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/events/change)).

### execute: `Function`

Fires when an Editor command is executed ([`execute` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/events/execute)).

### keydown: `Function`

Fires when the user presses a keyboard key ([`keydown` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/events/keydown)). Triggered multiple times if the user holds the key down.

### keyup: `Function`

Fires when the user releases a keyboard key ([`keyup` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/events/keyup)).

### paste: `Function`

Fires before the content is pasted in the Editor ([`paste` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/events/paste)).

### pdfexport: `Function`

Fires when the user clicks the **Export to PDF** toolbar button ([`pdfexport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/events/pdfexport)).

### select: `Function`

Fires when the Editor selection changed ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/events/select)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Editor instance.
