<template>
  <div>
    <MaskedTextBoxStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <MaskedTextBox
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :style="{ width: '230px' }"
      :mask="'(999) 000-00-00-00'"
      :default-value="'(359) 884-12-33-21'"
    />
  </div>
</template>
<script>
import MaskedTextBoxStyleConfigurator from "./MaskedTextBoxStyleConfigurator.vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

export default {
  components: {
    MaskedTextBoxStyleConfigurator,
    MaskedTextBox,
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
