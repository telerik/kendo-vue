<template>
  <div>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'base'" :theme-color="'base'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :items="items"
        :text="'primary'"
        :theme-color="'primary'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :items="items"
        :text="'secondary'"
        :theme-color="'secondary'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :items="items"
        :text="'tertiary'"
        :theme-color="'tertiary'"
      />
    </span>
    <br />
    <br />
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'info'" :theme-color="'info'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :items="items"
        :text="'success'"
        :theme-color="'success'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :items="items"
        :text="'warning'"
        :theme-color="'warning'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'error'" :theme-color="'error'" />
    </span>
    <br />
    <br />
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'dark'" :theme-color="'dark'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'light'" :theme-color="'light'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :items="items"
        :text="'inverse'"
        :theme-color="'inverse'"
      />
    </span>
    <span class="chip-wrapper">
      <DropDownButton
        :items="items"
        :text="'custom'"
        :theme-color="null"
        :class="'custom-color'"
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
.chip-wrapper {
  padding: 20px;
}

.custom-color {
  background-color: green;
  color: orange;
}
</style>
