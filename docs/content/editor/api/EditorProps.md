---
title: EditorProps
description: "Learn how to build custom functionality when working with the Vue Editor by Kendo UI with the help of the EditorProps."
api_reference: true
type: inner_api
slug: api_editor_editorprops
---

# EditorProps
Represents the props of the [Kendo UI for Vue Editor component]({% slug overview_editor %}).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar
to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The accessible label of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### contentStyle?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets styles to the content element wrapper of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultContent?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default HTML content of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultEditMode?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial edit mode of the Editor. Defaults to `iframe`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### extendView?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorMountEvent]({% slug api_editor_editormountevent %})) => void | EditorView


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the Editor is about to mount.
Useful for configuring the `EditorView` object.
To initialize `EditorView`, use the properties of the `event` object.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keyboardNavigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, it will turn off the built-in keyboard navigation of the Editor's Toolbar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorBlurEvent]({% slug api_editor_editorblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Editor's content element has lost focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorChangeEvent]({% slug api_editor_editorchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the Editor is about to change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExecute?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorExecuteEvent]({% slug api_editor_editorexecuteevent %})) => boolean | void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the Editor is about to apply a transaction.
To prevent the transaction, return `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorFocusEvent]({% slug api_editor_editorfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Editor's content element has received focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLoaded?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorMountEvent]({% slug api_editor_editormountevent %})) => void | EditorView


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the Editor is about to mount.
Useful for configuring the `EditorView` object.
To initialize `EditorView`, use the properties of the `event` object.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pasteHtml?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorPasteEvent]({% slug api_editor_editorpasteevent %})) => string | void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A funciton that fires each time the Editor is about to insert pasted content.
Useful for modifying pasted content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### preserveWhitespace?


</td>
<td type class="table-cell-type">


<code>


string | boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the options that will be used for parsing the HTML.
If `false` is set, the whitespace is collapsed as per HTML's rules.
Pass `true` to preserve whitespace, but normalize newlines to spaces.
`full` will preserve whitespace entirely.

Defaults to `full`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Editor will be resizable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tools?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the tools of the Editor. By default, the Editor renders no tools.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string | Node


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the Editor.


</td>
</tr>
</tbody>
</table>



