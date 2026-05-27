<template>
    <div>
        <div style="margin-bottom: 10px">
            <KButton @click="loadNewContent" style="padding: 8px 16px; cursor: pointer">
                Load New Content & Reset History
            </KButton>
        </div>
        <Editor
            ref="editorRef"
            :tools="tools"
            :value="value"
            :content-style="{ height: '325px' }"
            @change="onChange"
            :extend-view="extendView"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Editor, ProseMirror } from '@progress/kendo-vue-editor';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { defaultMarkdownParser } from 'prosemirror-markdown';
import { markdown } from './markdown.js';

const { EditorState, EditorView } = ProseMirror;

const editorRef = ref(null);
const value = ref(defaultMarkdownParser.parse(markdown));

// Alternative markdown content for demonstration
const alternateMarkdown = `## New Document Loaded!

This is a **completely new document** with fresh content and **reset history**.

Try these actions:
1. Make some edits to this text
2. Press Undo (Ctrl/Cmd + Z)
3. Notice the undo only works for edits after loading

*The previous edit history has been cleared!*

### Features Verified:
- History reset ✓
- New content loaded ✓
- Undo/Redo starts fresh ✓
`;

const tools = [
    'Bold',
    'Italic',
    'Link',
    'Unlink',
    'InsertImage',
    'FormatBlock',
    'Undo',
    'Redo',
    'OrderedList',
    'UnorderedList',
];

function extendView(event) {
    const state = event.viewProps.state;
    const plugins = [...state.plugins, ProseMirror.keymap({ 'Mod-u': () => true })];

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
}

// Function to load new content and reset history
function loadNewContent() {
    const view = editorRef.value?.getView();
    const editor = editorRef.value;
    if (!view || !editor) return;

    // Parse the new markdown content
    const newDoc = defaultMarkdownParser.parse(alternateMarkdown);

    // Create a new state with fresh history
    const newState = EditorState.create({
        doc: newDoc,
        plugins: view.state.plugins,
    });

    // Directly update the state
    view.updateState(newState);

    // Manually trigger toolbar update to reflect the new history state
    if (editor.updateTools) {
        editor.updateTools(view);
    }
}
</script>
