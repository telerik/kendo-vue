<template>
  <Editor
    :tools="tools"
    :default-content="content"
    :content-style="{
      height: '300px',
    }"
  >
    <template v-slot:MyBold="{ props }">
      <inlineformat v-bind="props" />
    </template>
    <template v-slot:MyItalic="{ props }">
      <inlineformat v-bind="props" />
    </template>
    <template v-slot:MyUnderline="{ props }">
      <inlineformat v-bind="props" />
    </template>
    <template v-slot:MyFontSizeTool="{ props }">
      <fontsize
        v-bind="props"
        :style="{
          width: '110px',
          ...props.style,
        }"
      />
    </template>
    <template v-slot:MyFontNameTool="{ props }">
      <fontname
        v-bind="props"
        :style="{
          width: '110px',
          ...props.style,
        }"
      />
    </template>
  </Editor>
</template>

<script>
import {
  Editor,
  EditorToolsSettings,
  InlineFormat,
  FontName,
} from '@progress/kendo-vue-editor';
import content from './content-basic';

const customBoldSettings = {
  // Toggle the 'B' tag.
  mark: 'b',
  // Recognize the 'STRONG' tag also as Bold.
  altMarks: ['strong'],
  props: {
    title: 'My Custom Bold',
    icon: EditorToolsSettings.bold.props.icon,
  },
  messages: {},
};

const customItalicSettings = {
  // Toggle the 'I' tag.
  mark: 'i',
  // Recognize the 'EM' tag also as Bold.
  altMarks: ['em'],
  props: {
    title: 'My Custom Italic',
    icon: EditorToolsSettings.italic.props.icon,
  },
  messages: {},
};

const customUnderlineSettings = {
  // Toggle the 'U' tag.
  mark: 'u',
  props: {
    title: 'My Custom Underline',
    icon: EditorToolsSettings.underline.props.icon,
  },
  messages: {},
};

const fontSizeToolSettings = {
  ...EditorToolsSettings.fontSize,
  items: [
    {
      text: '10',
      value: '10pt',
    },
    {
      text: '12',
      value: '12pt',
    },
    {
      text: '14',
      value: '14pt',
    },
    {
      text: '18',
      value: '18pt',
    },
    {
      text: '22',
      value: '22pt',
    },
    {
      text: '36',
      value: '36pt',
    },
  ],
};

const fontNameToolSettings = {
  ...EditorToolsSettings.fontName,
  items: [
    {
      text: 'Noto Sans TC',
      value: 'Noto Sans TC, sans-serif',
    },
    {
      text: 'Impact',
      value: 'Impact, Charcoal, sans-serif',
    },
    {
      text: 'Arial',
      value: 'Arial, Helvetica, sans-serif',
    },
  ],
};

export default {
  components: {
    Editor,
    inlineformat: InlineFormat,
    fontsize: FontName,
    fontname: FontName,
  },
  data() {
    return {
      content: content,
      tools: [
        [
          { render: 'MyBold', props: customBoldSettings },
          { render: 'MyItalic', props: customItalicSettings },
          { render: 'MyUnderline', props: customUnderlineSettings },
        ],
        { render: 'MyFontSizeTool', props: fontSizeToolSettings },
        { render: 'MyFontNameTool', props: fontNameToolSettings },
      ],
    };
  },
};
</script>
