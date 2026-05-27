<template>
  <div>
    <span class="chip-wrapper">
      <DropDownButton :shape="'rectangle'" :items="items" :text="'Rectangle shape'" />
    </span>
    <span class="chip-wrapper">
      <DropDownButton :shape="'square'" :items="items" :text="'Square shape'" />
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
