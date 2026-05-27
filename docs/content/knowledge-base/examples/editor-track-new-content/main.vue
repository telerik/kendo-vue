<template>
    <Editor
        :tools="tools"
        :content-style="{ height: 240 }"
        :extend-view="extendView"
        ref="editorRef"
    >
        <template #EnableTrackingTool>
            <Button
                :theme-color="trackingEnabled ? 'primary' : 'base'"
                @mousedown.prevent
                @click="toggleTracking"
            >
                {{ trackingEnabled ? 'Tracking Enabled' : 'Enable Tracking' }}
            </Button>
        </template>
    </Editor>
</template>

<script setup>
import { ref } from 'vue';
import { Editor, EditorUtils, ProseMirror } from '@progress/kendo-vue-editor';
import { Button } from '@progress/kendo-vue-buttons';
import content from './content';

const { Schema, EditorView, EditorState, Plugin, Fragment, Slice, splitBlock } = ProseMirror;

const editorRef = ref(null);
const trackingEnabled = ref(false);
const trackingEnabledRef = ref(false);

function markFragmentTracked(fragment, mark) {
    const nodes = [];

    fragment.forEach((node) => {
        if (node.isText) {
            nodes.push(node.mark([...node.marks, mark]));
            return;
        }

        if (node.content && node.content.size) {
            const trackedContent = markFragmentTracked(node.content, mark);
            nodes.push(node.copy(trackedContent));
            return;
        }

        nodes.push(node);
    });

    return Fragment.fromArray(nodes);
}

const trackingPlugin = new Plugin({
    props: {
        handleTextInput(view, from, to, text) {
            if (!trackingEnabledRef.value) {
                return false;
            }

            const { state } = view;
            const trackedMark = state.schema.marks.trackedText?.create();

            if (!trackedMark) {
                return false;
            }

            const textNode = state.schema.text(text, [trackedMark]);

            let tr = state.tr.insertText('', from, to);
            tr = tr.replaceSelectionWith(textNode, false);
            tr = tr.setStoredMarks([trackedMark]);

            view.dispatch(tr);
            return true;
        },

        handlePaste(view, _event, slice) {
            if (!trackingEnabledRef.value) {
                return false;
            }

            const { state } = view;
            const trackedMark = state.schema.marks.trackedText?.create();

            if (!trackedMark) {
                return false;
            }

            const trackedSlice = new Slice(
                markFragmentTracked(slice.content, trackedMark),
                slice.openStart,
                slice.openEnd
            );

            let tr = state.tr.replaceSelection(trackedSlice);
            tr = tr.setStoredMarks([trackedMark]);

            view.dispatch(tr);
            return true;
        },

        handleKeyDown(view, event) {
            if (!trackingEnabledRef.value || event.key !== 'Enter') {
                return false;
            }

            event.preventDefault();

            const { state } = view;
            const trackedMark = state.schema.marks.trackedText?.create();

            if (!trackedMark) {
                return false;
            }

            splitBlock(state, (tr) => {
                tr.setStoredMarks([trackedMark]);
                view.dispatch(tr);
            });

            return true;
        },
    },
});

const tools = [[{ render: 'EnableTrackingTool' }]];

function toggleTracking() {
    const view = editorRef.value?.getView();
    if (!view) {
        return;
    }

    trackingEnabledRef.value = true;
    trackingEnabled.value = true;

    const trackedMark = view.state.schema.marks.trackedText?.create();
    if (!trackedMark) {
        return;
    }

    const tr = view.state.tr.setStoredMarks([trackedMark]);
    view.dispatch(tr);
    view.focus();
}

function extendView(event) {
    const { viewProps } = event;
    const { schema: base, plugins } = viewProps.state;

    const schema = new Schema({
        nodes: base.spec.nodes,
        marks: {
            ...Object.fromEntries(
                Object.entries(base.spec.marks.toObject
                    ? base.spec.marks.toObject()
                    : base.spec.marks)
            ),
            trackedText: {
                inclusive: true,
                excludes: '',
                parseDOM: [
                    {
                        tag: 'span[data-tracked="true"]',
                        getAttrs: (dom) => ({
                            'data-tracked': dom.getAttribute('data-tracked'),
                            style: dom.getAttribute('style'),
                        }),
                    },
                ],
                attrs: {
                    'data-tracked': { default: 'true' },
                    style: { default: 'color: blue;' },
                },
                toDOM: (mark) => [
                    'span',
                    {
                        'data-tracked': mark.attrs['data-tracked'],
                        style: mark.attrs.style,
                    },
                    0,
                ],
            },
        },
    });

    const doc = EditorUtils.createDocument(schema, content);

    const state = EditorState.create({
        doc,
        schema,
        plugins: [trackingPlugin, ...plugins],
    });

    return new EditorView(
        { mount: event.dom },
        {
            ...event.viewProps,
            state,
        }
    );
}
</script>
