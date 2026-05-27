<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col">
      <p>TimePicker with default value</p>
      <TimePicker
        :style="{ width: '230px' }"
        :default-value="defaultValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TimePicker } from "@progress/kendo-vue-dateinputs";

const defaultValue = ref(new Date());
</script>
