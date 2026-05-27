<template>
  <Editor
    :tools="tools"
    :default-content="content"
    :content-style="{ height: '300px' }"
    @loaded="onLoaded"
  />
</template>

<script setup>
import { Editor } from '@progress/kendo-vue-editor';
import content from './content';

const tools = [['Bold', 'Italic', 'Underline']];

const styles = `
html {
  background-color: darkBlue;
}
body {
  background-color: #53d2fa;
  margin: 30px;
  padding-left: 50px;
  max-width: 650px;
}
.text-cursor {
  cursor: text;
}
`;

function onLoaded(event) {
    const iframeDocument = event.dom.ownerDocument;

    const style = iframeDocument.createElement('style');
    style.appendChild(iframeDocument.createTextNode(styles));
    iframeDocument.head.appendChild(style);

    const htmlElement = iframeDocument.documentElement;
    htmlElement.addEventListener('click', () => {
        const contentEditableElement = iframeDocument.querySelector('[contenteditable="true"]');
        if (contentEditableElement) {
            contentEditableElement.focus();
        }
    });
}
</script>
