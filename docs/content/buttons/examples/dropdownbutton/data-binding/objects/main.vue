<template>
  <div>
    <DropDownButton text-field="actionName" :items="items" text="Edit" />
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

