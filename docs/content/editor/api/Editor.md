---
title: Editor
description: "Learn how to build custom functionality when working with the Vue Editor by Kendo UI with the help of the Editor."
api_reference: true
type: inner_api
slug: api_editor_editor
---

# Editor
Represents the [Kendo UI for Vue Editor component]({% slug overview_editor %}).

 ```jsx
 <template>
   <div>
     <Editor
       :tools="tools"
       :content-style="{
         height: '690px',
       }"
       :default-content="content"
     />
   </div>
 </template>

 <script>
 import { Editor } from "@progress/kendo-vue-editor";
 import content from "./content-overview";

 export default {
   components: {
     Editor,
   },
   data() {
     return {
       tools: [
         ["Bold", "Italic", "Underline", "Strikethrough"],
         ["Subscript", "Superscript"],
         ["AlignLeft", "AlignCenter", "AlignRight", "AlignJustify"],
         ["Indent", "Outdent"],
         ["OrderedList", "UnorderedList"],
         "FontSize",
         "FontName",
         "FormatBlock",
         ["Undo", "Redo"],
         ["Link", "Unlink", "InsertImage", "ViewHtml"],
         ["InsertTable"],
         ["AddRowBefore", "AddRowAfter", "AddColumnBefore", "AddColumnAfter"],
         ["DeleteRow", "DeleteColumn", "DeleteTable"],
         ["MergeCells", "SplitCell"],
       ],
       content: content,
     };
   },
 };
 </script>
 ```



 ### props <span class='code'>Readonly&lt;[EditorProps]({% slug api_editor_editorprops %})</span>
 The props of the Editor component.

 ### contentElement <span class='code'>HTMLDivElement</span>
 Returns the content-editable DOM element of the Editor.

 ### element <span class='code'>HTMLElement</span>
 Returns the DOM element of the Editor.

 ### value <span class='code'>Node | string</span>
 The value of the Editor.

 ### view <span class='code'>EditorView&lt;any&gt;</span>
 Returns the `view` object of the Editor.



