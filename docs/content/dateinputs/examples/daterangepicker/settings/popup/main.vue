<template>
  <div
    class="example-wrapper"
    :style="{ textAlign: 'center' }"
  >
    <DateRangePicker :popup-settings="popupSettings" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const popupSettings = reactive({
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

