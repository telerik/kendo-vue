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
    >
    </SplitButton>
  </div>
</template>

<script>
import { SplitButton } from "@progress/kendo-vue-buttons";
import ButtonsStyleConfigurator from "./ButtonsStyleConfigurator.vue";
import {
  clipboardTextIcon,
  clipboardHtmlIcon,
  clipboardMarkdownIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    ButtonsStyleConfigurator,
    SplitButton,
  },
  data() {
    return {
      items: [
        { text: "Keep Text Only", svgIcon: clipboardTextIcon },
        { text: "Paste as HTML", svgIcon: clipboardHtmlIcon },
        { text: "Paste Markdown", svgIcon: clipboardMarkdownIcon },
        { text: "Set Default Paste" },
      ],
      size: "medium",
      themeColor: "base",
      fillMode: "solid",
      rounded: "medium",
    };
  },
  methods: {
    setSize(event) {
      this.size = event.value;
    },
    setThemeColor(event) {
      this.themeColor = event.value;
    },
    setFillMode(event) {
      this.fillMode = event.value;
    },
    setRounded(event) {
      this.rounded = event.value;
    },
  },
};
</script>
