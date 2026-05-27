<template>
  <div class="example-wrapper">
    <DateTimePicker :style="{ width: '260px' }" :focused-date="focusedDate" @change="handleChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

const focusedDate = ref(new Date(1997, 1, 20));

function handleChange(e) {
    focusedDate.value = e.value;
}
</script>
