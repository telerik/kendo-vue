<template>
  <Editor
  :resizable="true"
      :tools="tools"
      :content-style="contentStyles"
      :default-content="content"
    />
     
</template>

<script lang="ts">
import { Editor } from "@progress/kendo-vue-editor";
import content from "../content";

export default {
    components: {
       Editor
    },
    data () {
      return {
        contentStyles: {
            height: '360px',
            maxHeight: '420px',
            maxWidth: '750px',
            minWidth: '555px',
            minHeight: '250px'
        },
        tools: [
        ['Bold', 'Italic', 'Underline', 'Strikethrough'],
        ['Subscript', 'Superscript'],
        ['AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify'],
        ['Indent', 'Outdent'],
        ['OrderedList', 'UnorderedList'],
        'FontSize',
        'FontName',
        'FormatBlock',
        ['Undo', 'Redo'],
        ['Link', 'Unlink', 'InsertImage', 'ViewHtml'],
        ['InsertTable'],
        ['AddRowBefore', 'AddRowAfter', 'AddColumnBefore', 'AddColumnAfter'],
        ['DeleteRow', 'DeleteColumn', 'DeleteTable'],
        ['MergeCells', 'SplitCell']
        ],
       content: content
      };
    }
};
</script>

