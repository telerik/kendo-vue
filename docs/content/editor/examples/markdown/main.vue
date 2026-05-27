<template>
  <Editor
    :tools="tools"
    :value="value"
    :content-style="{ height: '325px' }"
    @change="onChange"
    :extend-view="extendView"
  />
</template>

<script setup>
import { ref } from "vue";
import { Editor, ProseMirror } from "@progress/kendo-vue-editor";
import { defaultMarkdownParser, defaultMarkdownSerializer } from "prosemirror-markdown";
import { markdown } from "./markdown.js";

const { EditorState, EditorView } = ProseMirror;

const value = ref(defaultMarkdownParser.parse(markdown));
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
    const plugins = [
        ...state.plugins,
        ProseMirror.keymap({ "Mod-u": () => true }),
    ];

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

function onChange(event) {
    value.value = event.value;
    console.log(defaultMarkdownSerializer.serialize(event.value));
}
</script>
