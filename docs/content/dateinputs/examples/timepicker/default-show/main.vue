<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col">
      <p>TimePicker with default show</p>
      <TimePicker
        :style="{ width: '230px' }"
        :default-show="defaultShow"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TimePicker } from "@progress/kendo-vue-dateinputs";

const defaultShow = ref(true);
</script>
