<template>
  <div>
    <ButtonsStyleConfigurator
      :shape="shape"
      @shapechange="setShape"
      :size="size"
      @sizechange="setSize"
      :theme-color="themeColor"
      @themecolorchange="setThemeColor"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <DropDownButton
      :shape="shape"
      :size="size"
      :themeColor="themeColor"
      :fillMode="fillMode"
      :rounded="rounded"
      :items="items"
      :text="'Edit'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownButton } from "@progress/kendo-vue-buttons";
import ButtonsStyleConfigurator from "./ButtonsStyleConfigurator.vue";
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

const shape = ref("rectangle");
const size = ref("medium");
const themeColor = ref("base");
const fillMode = ref("solid");
const rounded = ref("medium");

const setShape = (newShape) => {
    shape.value = newShape;
};

const setSize = (event) => {
    size.value = event.value;
};

const setThemeColor = (event) => {
    themeColor.value = event.value;
};

const setFillMode = (event) => {
    fillMode.value = event.value;
};

const setRounded = (event) => {
    rounded.value = event.value;
};
</script>
