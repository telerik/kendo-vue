<template>
  <div>
    <SplitButton :text="'Paste'" :items="items" :text-field="'actionName'" />
  </div>
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import {
    clipboardTextIcon,
    clipboardHtmlIcon,
    clipboardMarkdownIcon,
    copyIcon,
} from "@progress/kendo-svg-icons";

const items = [
    {
        actionName: "Keep Text Only",
        svgIcon: clipboardTextIcon,
    },
    {
        actionName: "Paste as HTML",
        svgIcon: clipboardHtmlIcon,
        disabled: true,
    },
    {
        actionName: "Paste Markdown",
        svgIcon: clipboardMarkdownIcon,
    },
    {
        actionName: "Set Default Paste",
        svgIcon: copyIcon,
    },
];
</script>
