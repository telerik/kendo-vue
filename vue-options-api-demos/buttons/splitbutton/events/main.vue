<template>
  <div>
    <splitbutton
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
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import { SplitButton } from "@progress/kendo-vue-buttons";
import {
  undoIcon,
  redoIcon,
  cutIcon,
  copyIcon,
  clipboardIcon,
} from "@progress/kendo-svg-icons";
import Logger from "./Logger.vue";

export default {
  components: {
    splitbutton: SplitButton,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      events: [],
      items: [
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
      ],
    };
  },
  methods: {
    onButtonClick() {
      this.events.unshift("Button Click event triggered");
    },
    onItemClick() {
      this.events.unshift("Item Click event triggered");
    },
    onFocus() {
      this.events.unshift("Focus event triggered");
    },
    onBlur() {
      this.events.unshift("Blur event triggered");
    },
    onOpen() {
      this.events.unshift("Open event triggered");
    },
    onClose() {
      this.events.unshift("Close event triggered");
    },
  },
};
</script>

