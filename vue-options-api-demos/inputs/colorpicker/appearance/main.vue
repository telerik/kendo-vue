<template>
  <div>
    <ColorPickerConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <ColorPicker :size="size" :fill-mode="fillMode" :rounded="rounded" />
  </div>
</template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";
import ColorPickerConfigurator from "./ColorPickerConfigurator.vue";

export default {
  components: {
    ColorPicker,
    ColorPickerConfigurator,
  },
  methods: {
    setRounded(event) {
      this.rounded = event.value;
    },
    setSize(event) {
      this.size = event.value;
    },
    setFillMode(event) {
      this.fillMode = event.value;
    },
  },
  data() {
    return {
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
    };
  },
};
</script>
