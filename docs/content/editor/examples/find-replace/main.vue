<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '630px' }"
    :default-content="content"
    :extend-view="extendView"
  />
</template>
<script>
import {
    Editor,
    EditorUtils,
    ProseMirror
} from "@progress/kendo-vue-editor";
import content from "./content-overview";

const { EditorState, EditorView } = ProseMirror;

export default {
    components: {
        Editor,
    },
    data() {
        return {
            tools: [["Bold", "Italic"], "FindAndReplace"],
            content: content
        };
    },
    methods: {
        extendView(event) {
            const state = event.viewProps.state;
            const plugins = [...state.plugins, EditorUtils.textHighlight()];

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
    },
};
</script>
