<template>
  <Editor
      :tools="tools"
      :content-style="{
        height: '630px'
      }"
      :paste-html="onPasteHtml"
    />
     
</template>

<script lang="ts">
import { Editor, EditorUtils } from "@progress/kendo-vue-editor";
const {
  pasteCleanup,
  sanitize,
  sanitizeClassAttr,
  sanitizeStyleAttr,
  removeAttribute,
  replaceImageSourcesFromRtf,
} = EditorUtils;
const pasteSettings = {
  convertMsLists: true,
  // stripTags: 'span|font'
  attributes: {
    class: sanitizeClassAttr,
    style: sanitizeStyleAttr,
    // keep `width`, `height` and `src` attributes
    width: () => {},
    height: () => {},
    src: () => {},
    // Removes `lang` attribute
    // lang: removeAttribute,
    // removes other (unspecified above) attributes
    "*": removeAttribute,
  },
};

export default {
    components: {
       Editor
    },
    data () {
      return {
        tools: [
        ['Bold', 'Italic', 'Underline'],
        ['Undo', 'Redo'],
        ]
      };
    },
    methods: {
      onPasteHtml(e) {
        let html = pasteCleanup(sanitize(e.pastedHtml), pasteSettings); // If the pasted HTML contains images with sources pointing to the local file system,
        // `replaceImageSourcesFromRtf` will extract the sources from the RTF and place them to images 'src' attribute in base64 format.

        if (e.event.clipboardData) {
          html = replaceImageSourcesFromRtf(
            html,
            e.event.clipboardData
          );
        }

        return html;
      }
    }
};
</script>

