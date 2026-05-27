<template>
  <Editor
    :tools="[['Bold', 'Italic', 'Underline', 'ViewHtml']]"
    :content-style="{ height: '420px' }"
    :extend-view="extendView"
  />
</template>

<script setup>
import { Editor, EditorUtils, ProseMirror } from "@progress/kendo-vue-editor";
import { iframe } from "./new-node";
import { tagMark } from "./new-mark";

const { Schema, EditorView, EditorState } = ProseMirror;

const html = `
  <p dir="rtl">A paragraph with <code>dir="rtl"</code> attribute, and the new added mark - <s>new mark formatting</s></p>
  <iframe style="width: 500px; height: 340px;" src="https://www.youtube.com/embed/2OvvwWShNWo"></iframe>
`;

function extendView(event) {
    const { viewProps } = event;
    const { plugins, schema } = viewProps.state;

    const paragraph = { ...schema.spec.nodes.get("paragraph") };
    paragraph.attrs["dir"] = { default: null };
    let nodes = schema.spec.nodes.update("paragraph", paragraph);
    nodes = nodes.addToEnd("iframe", iframe);

    const mark = tagMark("s");
    let marks = schema.spec.marks.append(mark);

    const mySchema = new Schema({ nodes, marks });
    const doc = EditorUtils.createDocument(mySchema, html);

    return new EditorView(
        { mount: event.dom },
        {
            ...event.viewProps,
            state: EditorState.create({ doc, plugins }),
        }
    );
}
</script>
