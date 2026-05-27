<template>
  <Editor
    :tools="tools"
    :default-content="content"
    :content-style="{ height: '300px' }"
  >
    <template #MyBold="{ props }">
      <InlineFormat v-bind="props" />
    </template>
    <template #MyItalic="{ props }">
      <InlineFormat v-bind="props" />
    </template>
    <template #MyUnderline="{ props }">
      <InlineFormat v-bind="props" />
    </template>
    <template #MyFontSizeTool="{ props }">
      <FontName
        v-bind="props"
        :style="{ width: '110px', ...props.style }"
      />
    </template>
    <template #MyFontNameTool="{ props }">
      <FontName
        v-bind="props"
        :style="{ width: '110px', ...props.style }"
      />
    </template>
  </Editor>
</template>

<script setup>
import { Editor, EditorToolsSettings, InlineFormat, FontName } from "@progress/kendo-vue-editor";
import content from "./content-basic";

const customBoldSettings = {
    mark: "b",
    altMarks: ["strong"],
    props: {
        title: "My Custom Bold",
        svgIcon: EditorToolsSettings.bold.props.svgIcon,
    },
    messages: {},
};

const customItalicSettings = {
    mark: "i",
    altMarks: ["em"],
    props: {
        title: "My Custom Italic",
        svgIcon: EditorToolsSettings.italic.props.svgIcon,
    },
    messages: {},
};

const customUnderlineSettings = {
    mark: "u",
    props: {
        title: "My Custom Underline",
        svgIcon: EditorToolsSettings.underline.props.svgIcon,
    },
    messages: {},
};

const fontSizeToolSettings = {
    ...EditorToolsSettings.fontSize,
    items: [
        { text: "10", value: "10pt" },
        { text: "12", value: "12pt" },
        { text: "14", value: "14pt" },
        { text: "18", value: "18pt" },
        { text: "22", value: "22pt" },
        { text: "36", value: "36pt" },
    ],
};

const fontNameToolSettings = {
    ...EditorToolsSettings.fontName,
    items: [
        { text: "Noto Sans TC", value: "Noto Sans TC, sans-serif" },
        { text: "Impact", value: "Impact, Charcoal, sans-serif" },
        { text: "Arial", value: "Arial, Helvetica, sans-serif" },
    ],
};

const tools = [
    [
        { render: "MyBold", props: customBoldSettings },
        { render: "MyItalic", props: customItalicSettings },
        { render: "MyUnderline", props: customUnderlineSettings },
    ],
    { render: "MyFontSizeTool", props: fontSizeToolSettings },
    { render: "MyFontNameTool", props: fontNameToolSettings },
];
</script>
