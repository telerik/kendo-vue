<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <p>
        Only values between {{ min.toDateString() }} and
        {{ max.toDateString() }} are valid
      </p>
    </div>
    <div>
      <p>Select a date:</p>
      <DateInput
        :style="{ width: '230px' }"
        :value="value"
        :min="min"
        :max="max"
        @change="changeDate"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date(2017, 1, 13));
const min = ref(new Date(2000, 2, 10));
const max = ref(new Date(2020, 2, 10));

function changeDate(event) {
    value.value = event.value;
}
</script>
