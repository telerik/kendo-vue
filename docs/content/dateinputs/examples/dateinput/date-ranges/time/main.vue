<template>
  <div id="vueapp" class="vue-app">
    <div>
      <div class="example-config">
        <p>
          Only values between {{ minTime.toTimeString() }} and
          {{ maxTime.toTimeString() }} are valid
        </p>
      </div>
      <div>
        <p>Select a date:</p>
        <DateInput
          :style="{ width: '230px' }"
          :format="'t'"
          v-model="value"
          :min-time="minTime"
          :max-time="maxTime"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date(2000, 2, 10, 8, 29));
const minTime = ref(new Date(2000, 2, 10, 8, 30));
const maxTime = ref(new Date(2000, 2, 10, 17, 30));
</script>
