<template>
  <div>
    <SplitButton :text-field="'actionName'" :items="items" :text="'Edit'" />
  </div>
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import {
    undoIcon,
    redoIcon,
    cutIcon,
    copyIcon,
    clipboardIcon,
} from "@progress/kendo-svg-icons";
import { ref } from "vue";

const items = ref([
    {
        actionName: "Undo",
        svgIcon: undoIcon,
    },
    {
        actionName: "Redo",
        svgIcon: redoIcon,
        disabled: true,
    },
    {
        actionName: "Cut",
        svgIcon: cutIcon,
    },
    {
        actionName: "Copy",
        svgIcon: copyIcon,
    },
    {
        actionName: "Paste",
        svgIcon: clipboardIcon,
    },
]);
</script>
