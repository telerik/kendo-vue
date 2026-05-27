<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <DateInput
        :style="{ width: '230px' }"
        :disabled="true"
        :value="value"
        @change="changeDate"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date());

function changeDate(event) {
    value.value = event.value;
}
</script>
