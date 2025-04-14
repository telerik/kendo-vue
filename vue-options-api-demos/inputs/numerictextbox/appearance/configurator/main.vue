<template>
  <div>
    <NumericTextBoxStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <NumericTextBox
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :style="{ width: '200px' }"
    />
  </div>
</template>
<script>
import NumericTextBoxStyleConfigurator from "./NumericTextBoxStyleConfigurator.vue";
import { NumericTextBox } from "@progress/kendo-vue-inputs";

export default {
  components: {
    NumericTextBoxStyleConfigurator,
    NumericTextBox,
  },
  data() {
    return {
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
    };
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
};
</script>
