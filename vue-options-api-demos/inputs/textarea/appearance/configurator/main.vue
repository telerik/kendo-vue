<template>
  <div>
    <TextAreaStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <TextArea
      :size="size"
      :fillMode="fillMode"
      :rounded="rounded"
      :style="{ width: '200px' }"
    />
  </div>
</template>
<script>
import TextAreaStyleConfigurator from "./TextAreaStyleConfigurator.vue";
import { TextArea } from "@progress/kendo-vue-inputs";

export default {
  components: {
    TextAreaStyleConfigurator,
    TextArea,
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
