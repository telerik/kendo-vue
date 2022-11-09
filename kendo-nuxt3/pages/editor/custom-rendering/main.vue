<template>
 <Editor
      :tools="tools"
      :default-content="content"
      :content-dtyle="{
        height: '300px'
      }"
  >
      <template v-slot:MyBold="{props}">
            <inlineformat  v-bind="props" />
        </template>
         <template v-slot:MyFontSizeTool="{props}">
            <fontname  v-bind="props" :style="{
              width: '110px',
              ...props.style
            }" />
        </template>
  </Editor>
     
</template>

<script lang="ts">
import { Editor, EditorToolsSettings, InlineFormat, FontName } from "@progress/kendo-vue-editor";

const customBoldSettings = {
  // Toggle the 'B' tag.
  mark: "b",
  // Recognize the 'STRONG' tag also as Bold.
  altMarks: ["strong"],
  props: {
    title: "My Custom Bold",
    icon: EditorToolsSettings.bold.props.icon,
  },
  messages: {},
};

const fontSizeToolSettings = {
  ...EditorToolsSettings.fontSize,
  items: [
    {
      text: "10",
      value: "10pt",
    },
    {
      text: "12",
      value: "12pt",
    },
    {
      text: "14",
      value: "14pt",
    },
    {
      text: "18",
      value: "18pt",
    },
    {
      text: "22",
      value: "22pt",
    },
    {
      text: "36",
      value: "36pt",
    },
  ],
};

import content from "../content";

export default {
    components: {
       Editor,
       'inlineformat': InlineFormat,
       'fontname': FontName
    },
    data () {
      return {
        tools: [[
          { render: 'MyBold', props: customBoldSettings }, 
          'ViewHtml'], 
           { render: 'MyFontSizeTool', props: fontSizeToolSettings }
           ],
        content: content
      };
    }
};
</script>

