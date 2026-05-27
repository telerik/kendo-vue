<template>
  <div
    class="example-wrapper"
    :style="{
      textAlign: 'center',
    }"
  >
    <DateRangePicker :popup-settings="popupSettings" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const popupSettings = ref({
    animate: false,
    anchorAlign: {
        horizontal: "center",
        vertical: "bottom",
    },
    popupAlign: {
        horizontal: "center",
        vertical: "top",
    },
});
</script>
