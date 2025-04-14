<template>
  <div>
    <DateInputsStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <DateTimePicker
       :style="{ width: '260px'}"
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
    />
  </div>
</template>
<script>
import DateInputsStyleConfigurator from "./DateInputsStyleConfigurator.vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    DateInputsStyleConfigurator,
    DateTimePicker,
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
