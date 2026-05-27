<template>
  <div>
    <KButton @click="toggleEditable">
      Set Read-Only to {{ editable }}
    </KButton>
    <br />
    <br />
    <Editor
      ref="editor"
      :tools="tools"
      :content-style="{ height: '145px' }"
      :extend-view="extendView"
      :default-content="content"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Editor, ProseMirror } from "@progress/kendo-vue-editor";
import content from "./content-basic";

const { EditorState, EditorView, Plugin, PluginKey } = ProseMirror;

const editable = ref(true);
const tools = [["Bold", "Italic", "Underline"]];

function extendView(event) {
    const state = event.viewProps.state;
    const plugins = [
        ...state.plugins,
        new Plugin({
            key: new PluginKey("readonly"),
            props: {
                editable: () => editable.value,
            },
            filterTransaction: (tr) => editable.value || !tr.docChanged,
        }),
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

function toggleEditable() {
    editable.value = !editable.value;
}
</script>
