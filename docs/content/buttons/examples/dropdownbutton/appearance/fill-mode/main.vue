<template>
  <div>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'Solid'" :fill-mode="'solid'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'Flat'" :fill-mode="'flat'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'Outline'" :fill-mode="'outline'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :items="items" :text="'Link'" :fill-mode="'link'" />
    </span>
  </div>
</template>

<script setup>
import { DropDownButton } from '@progress/kendo-vue-buttons';
import {
    undoIcon,
    redoIcon,
    cutIcon,
    copyIcon,
    clipboardIcon,
} from "@progress/kendo-svg-icons";

const items = [
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
];
</script>

<style>
.chip-wrapper {
  padding: 20px;
}
</style>
