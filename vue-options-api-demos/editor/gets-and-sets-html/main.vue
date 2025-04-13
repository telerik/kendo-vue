<template>
  <div>
    <Editor
      :tools="[['Bold', 'Italic', 'Underline']]"
      :content-style="{
        height: '160px',
      }"
      :default-content="'<p>editor sample html</p>'"
      ref="editor"
    />
    <br />
    <kbutton :svg-icon="arrowDownIcon" @click="getHtml"> Gets HTML </kbutton>
    &nbsp;
    <kbutton :svg-icon="arrowUpIcon" @click="setHtml"> Sets HTML </kbutton>
    <br />
    <br />
    <ktextarea
      :style="{
        height: '100px',
        width: '100%',
        resize: 'none',
      }"
      :default-value="'<p>textarea sample html</p>'"
      ref="textarea"
    />
  </div>
</template>

<script>
import { Button } from "@progress/kendo-vue-buttons";
import { TextArea } from "@progress/kendo-vue-inputs";
import { Editor } from "@progress/kendo-vue-editor";
import { arrowUpIcon, arrowDownIcon } from "@progress/kendo-svg-icons";
import content from "./content";

export default {
  components: {
    kbutton: Button,
    ktextarea: TextArea,
    Editor,
  },
  data() {
    return {
      arrowUpIcon,
      arrowDownIcon,
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
  methods: {
    getHtml() {
      this.$refs.textarea.element.value = this.$refs.editor.getHTML();
    },
    setHtml() {
      this.$refs.editor.setHTML(this.$refs.textarea.element.value);
    },
  },
};
</script>

