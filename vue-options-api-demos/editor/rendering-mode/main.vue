<template>
  <Editor
    :tools="tools"
    :content-style="{
      height: '400px',
    }"
    :default-content="content"
    :default-edit-mode="'div'"
  />
</template>

<script>
import { Editor } from "@progress/kendo-vue-editor";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      tools: [
        ["Bold", "Italic", "Underline"],
        ["Undo", "Redo"],
        ["Link", "Unlink"],
        ["AlignLeft", "AlignCenter", "AlignRight"],
        ["InsertTable"],
        ["OrderedList", "UnorderedList", "Indent", "Outdent"],
      ],
      content: `<p>Some content with a list, paragraphs and a table.</p><ul><li>list item 1</li><li>list item 2</li></ul><p>a paragraph</p><table>
       <tbody><tr><td><p>cell 1</p></td><td><p>cell 2</p></td><td><p>cell 3</p></td></tr><tr><td><p>cell 4</p></td><td>
       <p>cell 5</p></td><td><p>cell 6</p></td></tr></tbody></table><p>another paragraph</p>`,
    };
  },
};
</script>
