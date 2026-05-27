<script setup>
import { ref } from "vue";
import { SplitButton } from "@progress/kendo-vue-buttons";
import ButtonsStyleConfigurator from "./ButtonsStyleConfigurator.vue";
import {
    clipboardTextIcon,
    clipboardHtmlIcon,
    clipboardMarkdownIcon,
} from "@progress/kendo-svg-icons";

const items = [
    { text: "Keep Text Only", svgIcon: clipboardTextIcon },
    { text: "Paste as HTML", svgIcon: clipboardHtmlIcon },
    { text: "Paste Markdown", svgIcon: clipboardMarkdownIcon },
    { text: "Set Default Paste" },
];

const size = ref("medium");
const themeColor = ref("base");
const fillMode = ref("solid");
const rounded = ref("medium");

const setSize = (event) => {
    size.value = event.value;
};

const setThemeColor = (event) => {
    themeColor.value = event.value;
};

const setFillMode = (event) => {
    fillMode.value = event.value;
};

const setRounded = (event) => {
    rounded.value = event.value;
};
</script>

<template>
  <div>
    <ButtonsStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :theme-color="themeColor"
      @themecolorchange="setThemeColor"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <SplitButton
      :size="size"
      :theme-color="themeColor"
      :fill-mode="fillMode"
      :rounded="rounded"
      :text="'Paste'"
      :text-field="'actionName'"
      :items="items"
    />
  </div>
</template>
