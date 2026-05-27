<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '330px' }"
    :extend-view="extendView"
  />
</template>

<script setup>
import { Editor, EditorUtils, ProseMirror } from "@progress/kendo-vue-editor";
import mySchema from "./schema";
import content from "./content";

const { EditorView, EditorState } = ProseMirror;

const tools = [
    ["Bold", "Italic", "Underline"],
    ["Undo", "Redo"],
    ["Link", "Unlink"],
    ["AlignLeft", "AlignCenter", "AlignRight"],
    ["OrderedList", "UnorderedList", "Indent", "Outdent"],
];

function extendView(event) {
    const { viewProps } = event;
    const { plugins } = viewProps.state;

    const doc = EditorUtils.createDocument(mySchema, content);

    return new EditorView(
        { mount: event.dom },
        {
            ...event.viewProps,
            state: EditorState.create({ doc, plugins }),
        }
    );
}
</script>
