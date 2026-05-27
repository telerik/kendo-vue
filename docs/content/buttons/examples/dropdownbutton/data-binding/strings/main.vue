<template>
  <div>
    <DropDownButton :items="items" text="Edit" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DropDownButton } from "@progress/kendo-vue-buttons";
import {
    undoIcon,
    redoIcon,
    cutIcon,
    copyIcon,
    clipboardIcon,
} from "@progress/kendo-svg-icons";

const items = ref([
    {
        text: "Undo",
        svgIcon: undoIcon,
    },
    {
        text: "Redo",
        svgIcon: redoIcon,
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
]);
</script>

