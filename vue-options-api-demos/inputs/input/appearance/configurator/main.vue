<template>
  <div>
    <InputStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <k-input :style="{ width: '230px' }" :size="size" :rounded="rounded" :fill-mode="fillMode" />
  </div>
</template>
<script>
import InputStyleConfigurator from "./InputStyleConfigurator.vue";
import { Input } from "@progress/kendo-vue-inputs";

export default {
  components: {
    InputStyleConfigurator,
    "k-input": Input,
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
