<template>
  <div>
    <SplitButton
      :text-field="'actionName'"
      :items="items"
      :text="'Edit'"
      @buttonclick="onButtonClick"
      @itemclick="onItemClick"
      @focus="onFocus"
      @blur="onBlur"
      @open="onOpen"
      @close="onClose"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SplitButton } from "@progress/kendo-vue-buttons";
import {
    undoIcon,
    redoIcon,
    cutIcon,
    copyIcon,
    clipboardIcon,
} from "@progress/kendo-svg-icons";
import Logger from "./Logger.vue";

const events = ref([]);

const items = [
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
];

const onButtonClick = () => {
    events.value.unshift("Button Click event triggered");
};

const onItemClick = () => {
    events.value.unshift("Item Click event triggered");
};

const onFocus = () => {
    events.value.unshift("Focus event triggered");
};

const onBlur = () => {
    events.value.unshift("Blur event triggered");
};

const onOpen = () => {
    events.value.unshift("Open event triggered");
};

const onClose = () => {
    events.value.unshift("Close event triggered");
};
</script>

