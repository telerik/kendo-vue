<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '400px' }"
    :paste-html="onPasteHtml"
  />
</template>

<script setup>
import { Editor, EditorUtils } from "@progress/kendo-vue-editor";

const {
    pasteCleanup,
    sanitize,
    sanitizeClassAttr,
    sanitizeStyleAttr,
    removeAttribute,
    replaceImageSourcesFromRtf,
} = EditorUtils;

const tools = [
    ["Bold", "Italic", "Underline"],
    ["Undo", "Redo"],
];

const pasteSettings = {
    convertMsLists: true,
    attributes: {
        class: sanitizeClassAttr,
        style: sanitizeStyleAttr,
        width: () => {},
        height: () => {},
        src: () => {},
        "*": removeAttribute,
    },
};

function onPasteHtml(e) {
    let html = pasteCleanup(sanitize(e.pastedHtml), pasteSettings);

    if (e.event.clipboardData) {
        html = replaceImageSourcesFromRtf(html, e.event.clipboardData);
    }

    return html;
}
</script>

