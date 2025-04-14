<template>
  <div>
    <span class="chip-wrapper">
      <DropDownButton :size="'small'" :items="items" :text="'Small Size'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :size="'medium'" :items="items" :text="'Medium Size'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :size="'large'" :items="items" :text="'Large Size'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :size="null"
        :items="items"
        :text="'Custom Size'"
        :class="'custom-size'"
      />
    </span>
  </div>
</template>

<script>
import { DropDownButton } from '@progress/kendo-vue-buttons';
import {
  undoIcon,
  redoIcon,
  cutIcon,
  copyIcon,
  clipboardIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    DropDownButton,
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
.custom-size > .k-button {
  padding: 20px 20px;
}

.chip-wrapper {
  padding: 20px;
}
</style>
