<template>
  <div>
    <SignatureStyleConfigurator
      :color="color"
      @colorchange="setColor"
      :background-color="backgroundColor"
      @backgroundchange="setBackground"
      :stroke-width="strokeWidth"
      @strokewidthchange="setStroke"
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <Signature
        :style="{ minWidth: '330px', minHeight: '150px' }"
        :size="size"
        :rounded="rounded"
        :fill-mode="fillMode"
        :stroke-width="strokeWidth"
        :background-color="backgroundColor"
        :color="color"
      />
    </div>
  </div>
</template>
<script>
import SignatureStyleConfigurator from "./SignatureStyleConfigurator.vue";
import { Signature } from "@progress/kendo-vue-inputs";

export default {
  components: {
    SignatureStyleConfigurator,
    Signature,
  },
  data() {
    return {
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
      strokeWidth: 3,
      backgroundColor: "#fff",
      color: "#000",
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
    setStroke(event) {
      this.strokeWidth = event.value;
    },
    setBackground(event) {
      this.backgroundColor = event.value;
    },
    setColor(event) {
      this.color = event.value;
    },
  },
};
</script>
