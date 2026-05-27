<template>
  <div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Default Button</p>
      <SplitButton :text="'Paste'" :items="items" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Flat Button</p>
      <SplitButton :text="'Paste'" :items="items" :fill-mode="'flat'" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Outline Button</p>
      <SplitButton :text="'Paste'" :items="items" :fill-mode="'outline'" />
    </div>
  </div>
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import {
    clipboardTextIcon,
    clipboardHtmlIcon,
    clipboardMarkdownIcon,
} from "@progress/kendo-svg-icons";

const items = [
    {
        text: "Keep Text Only",
        svgIcon: clipboardTextIcon,
    },
    {
        text: "Paste as HTML",
        svgIcon: clipboardHtmlIcon,
    },
    {
        text: "Paste Markdown",
        svgIcon: clipboardMarkdownIcon,
    },
    {
        text: "Set Default Paste",
    },
];
</script>
