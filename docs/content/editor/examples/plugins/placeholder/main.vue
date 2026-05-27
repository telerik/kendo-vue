<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '200px' }"
    :extend-view="extendView"
  />
</template>

<script setup>
import { Editor, ProseMirror } from "@progress/kendo-vue-editor";
import { placeholder, styles } from "./placeholder";

const tools = [["Bold", "Italic", "Underline"]];

function extendView(event) {
    const state = event.viewProps.state;
    const plugins = [...state.plugins, placeholder("Enter some content ...")];
    const editorDocument = event.dom.ownerDocument;
    const styleElement = editorDocument?.querySelector("style");

    if (styleElement) {
        styleElement.appendChild(editorDocument.createTextNode(styles));
    }

    return new ProseMirror.EditorView(
        { mount: event.dom },
        {
            ...event.viewProps,
            state: ProseMirror.EditorState.create({
                doc: state.doc,
                plugins,
            }),
        }
    );
}
</script>
