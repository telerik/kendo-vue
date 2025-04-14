<template>
  <Editor
    :tools="[['Bold', 'Italic', 'Underline', 'ViewHtml']]"
    :content-style="{
      height: '420px',
    }"
    :extend-view="extendView"
  />
</template>

<script>
import {
  Editor,
  EditorUtils,
  ProseMirror,
} from "@progress/kendo-vue-editor";
import { iframe } from "./new-node";
import { tagMark } from "./new-mark";
const { Schema, EditorView, EditorState } = ProseMirror;

export default {
  components: {
    Editor,
  },
  data() {
    return {
      html:
        `<p dir="rtl">A paragraph with <code>dir="rtl"</code> attribute, and the new added mark - <s>new mark formatting</s></p>` +
        `<iframe style="width: 500px; height: 340px;" src="https://www.youtube.com/embed/2OvvwWShNWo"></iframe>`,
    };
  },
  methods: {
    extendView(event) {
      const { viewProps } = event;
      const { plugins, schema } = viewProps.state; // Add the 'dir' attribute to paragraph node.

      const paragraph = { ...schema.spec.nodes.get("paragraph") };
      paragraph.attrs["dir"] = {
        default: null,
      };
      let nodes = schema.spec.nodes.update("paragraph", paragraph); // Append the new node.

      nodes = nodes.addToEnd("iframe", iframe); // Append a new mark representing the <s> formatting tag.

      const mark = tagMark("s");
      let marks = schema.spec.marks.append(mark); // Create the new schema.

      const mySchema = new Schema({
        nodes,
        marks,
      }); // Create a new document using the modified schema.

      const doc = EditorUtils.createDocument(mySchema, this.html); // Return the custom EditorView object that will be used by Editor.

      return new EditorView(
        {
          mount: event.dom,
        },
        {
          ...event.viewProps,
          state: EditorState.create({
            doc: doc,
            plugins,
          }),
        }
      );
    },
  },
};
</script>
