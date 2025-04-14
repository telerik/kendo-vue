<template>
  <div>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'No roundness'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :rounded="'small'"
        :items="items"
        :text="'Small roundness'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :rounded="'medium'"
        :items="items"
        :text="'Medium roundness'"
      />
    </span>
    <br />
    <br />
    <span class="chip-wrapper">
      <DropDownButton
        :rounded="'large'"
        :items="items"
        :text="'Large roundness'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :rounded="'full'"
        :items="items"
        :text="'Full roundness'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :size="null"
        :items="items"
        :text="'Custom roundness'"
        :class="'custom-roundness'"
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
.custom-roundness > .k-button {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.chip-wrapper {
  padding: 20px;
}
</style>
