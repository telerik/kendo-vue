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

<script>
import {
  DropDownButton,
} from "@progress/kendo-vue-buttons";
import ButtonsStyleConfigurator from "./ButtonsStyleConfigurator.vue";
import {
  undoIcon,
  redoIcon,
  cutIcon,
  copyIcon,
  clipboardIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    ButtonsStyleConfigurator,
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
      shape: "rectangle",
      size: "medium",
      themeColor: "base",
      fillMode: "solid",
      rounded: "medium",
    };
  },
  methods: {
    handleDataChange(event) {
      this.people = event.value;
    },
    setShape(shape) {
      this.shape = shape;
    },
    setSize(event) {
      this.size = event.value;
    },
    setThemeColor(event) {
      this.themeColor = event.value;
    },
    setFillMode(event) {
      this.fillMode = event.value;
    },
    setRounded(event) {
      this.rounded = event.value;
    },
  },
};
</script>
