<template>
  <Editor
    :tools="tools"
    :value="value"
    :content-style="{
      height: '325px',
    }"
    @change="onChange"
    :extend-view="extendView"
  />
</template>

<script>
import { ProseMirror } from "@progress/kendo-vue-editor";
const { EditorState, EditorView } = ProseMirror;
import { Editor } from "@progress/kendo-vue-editor";
import { defaultMarkdownParser, defaultMarkdownSerializer } from "prosemirror-markdown";
import { markdown } from "./markdown.js";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      value: defaultMarkdownParser.parse(markdown),
      tools: [
      "Bold",
        "Italic",
        "Link",
        "Unlink",
        "InsertImage",
        "FormatBlock",
        "Undo",
        "Redo",
        "OrderedList",
        "UnorderedList",
      ],
      markdown: markdown,
    };
  },
  methods: {
    extendView(event) {
      const state = event.viewProps.state;
      const plugins = [
        ...state.plugins,
        ProseMirror.keymap({ "Mod-u": () => true }),
      ];

      return new EditorView(
        {
          mount: event.dom,
        },
        {
          ...event.viewProps,
          state: EditorState.create({
            doc: state.doc,
            plugins,
          }),
        }
      );
    },
    onChange(event) {
      this.value = event.value;
      // to get the updated markdown
      console.log(defaultMarkdownSerializer.serialize(event.value));
    },
  },
};
</script>
