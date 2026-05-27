<template>
  <div :style="{ textAlign: 'center' }">
    <TimePicker
      :style="{ width: '230px' }"
      ref="datepicker"
      :popup="CustomPopup"
    />
  </div>
</template>

<script setup>
import { TimePicker } from "@progress/kendo-vue-dateinputs";
import CustomPopup from "./CustomPopup.vue";
</script>
