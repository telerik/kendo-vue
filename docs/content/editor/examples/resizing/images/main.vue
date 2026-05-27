<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '325px' }"
    :default-content="content"
    :extend-view="extendView"
  />
</template>

<script setup>
import { Editor, ProseMirror, EditorUtils } from "@progress/kendo-vue-editor";
import content from "./content-overview";

const { EditorState, EditorView } = ProseMirror;
const { imageResizing } = EditorUtils;

const tools = [
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
];

function extendView(event) {
    const state = event.viewProps.state;
    const plugins = [imageResizing(), ...state.plugins];

    return new EditorView(
        { mount: event.dom },
        {
            ...event.viewProps,
            state: EditorState.create({
                doc: state.doc,
                plugins,
            }),
        }
    );
}
</script>
