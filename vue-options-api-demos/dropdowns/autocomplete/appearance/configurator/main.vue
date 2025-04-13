<template>
  <div>
    <DropDownStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <AutoComplete
      :style="{ width: '230px'}"
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :data-items="[
        'X-Small',
        'Small',
        'Medium',
        'Large',
        'X-Large',
        '2X-Large',
      ]"
    />
  </div>
</template>
<script>
import DropDownStyleConfigurator from "./DropDownStyleConfigurator.vue";
import { AutoComplete } from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    DropDownStyleConfigurator,
    AutoComplete,
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
