<template>
  <div>
    <span class="wrapper">
      <SplitButton :items="items" :text="'Solid'" :fill-mode="'solid'" />
    </span>
    <span class="wrapper">
      <SplitButton
        :items="items"
        :text="'Flat'"
        :fill-mode="'flat'"
      />
    </span>
    <span class="wrapper">
      <SplitButton
        :items="items"
        :text="'Outline'"
        :fill-mode="'outline'"
      />
    </span>
    <span class="wrapper">
      <SplitButton
        :items="items"
        :text="'Link'"
        :fill-mode="'link'"
      />
    </span>
  </div>
</template>

<script>
import { SplitButton } from '@progress/kendo-vue-buttons';
import {
  undoIcon,
  redoIcon,
  cutIcon,
  copyIcon,
  clipboardIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    SplitButton,
  },
  data() {
    return {
      items: [
        {
          text: "Undo",
          svgIcon: undoIcon,
        },
        {
          text: "Redo",
          svgIcon: redoIcon,
          disabled: true,
        },
        {
          text: "Cut",
          svgIcon: cutIcon,
        },
        {
          text: "Copy",
          svgIcon: copyIcon,
        },
        {
          text: "Paste",
          svgIcon: clipboardIcon,
        },
      ],
    };
  },
};
</script>
<style>
.wrapper {
  padding: 20px;
}
</style>
