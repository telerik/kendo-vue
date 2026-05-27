<template>
  <div>
    <DropDownButton
      :text-field="'actionName'"
      :items="items"
      :text="'Edit'"
      @itemclick="onItemClick"
      @focus="onFocus"
      @blur="onBlur"
      @open="onOpen"
      @close="onClose"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { DropDownButton } from "@progress/kendo-vue-buttons";
import {
    undoIcon,
    redoIcon,
    cutIcon,
    copyIcon,
    clipboardIcon,
} from "@progress/kendo-svg-icons";
import Logger from "./Logger.vue";

const events = ref([]);

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

const eventsList = computed(() => events.value);

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

