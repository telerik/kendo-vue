<template>
  <div>
    <div class="text-center">
      <KButton theme-color="primary" @click="start">start</KButton>
      <KButton @click="stop">stop</KButton>
      <KButton @click="reset">reset</KButton>
    </div>
    <br />
    <div class="text-center">
      <ProgressBar :value="value" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const value = ref(0);
let currentInterval = null;

const start = () => {
    currentInterval = setInterval(() => {
        if (value.value < 100) {
            value.value += 1;
        }
    }, 50);
};

const stop = () => {
    clearInterval(currentInterval);
    currentInterval = null;
};

const reset = () => {
    value.value = 0;
    clearInterval(currentInterval);
    currentInterval = null;
};
</script>
