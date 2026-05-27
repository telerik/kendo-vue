<template>
  <div id="vueapp" class="vue-app">
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Incremental steps:</p>
      <p v-for="step in Object.keys(steps)" :key="step">
        {{ step }} - {{ steps[step] }}
      </p>
      <DateInput
        :style="{ width: '230px' }"
        :format="'MM/dd/yyyy hh:mm a'"
        :steps="steps"
        v-model="value"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date(2017, 2, 10, 13, 30, 0));
const steps = ref({ year: 10, day: 5, hour: 2, minute: 15 });
</script>
