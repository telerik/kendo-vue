<template>
  <div class="row">
    <div class="m-3">
      <p>v-model</p>
      <ColorGradient v-model="value" />
    </div>
    <div class="m-3">
      <p>value and change event</p>
      <ColorGradient :value="value" @change="handleChange" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorGradient } from "@progress/kendo-vue-inputs";

const value = ref("rgba(237, 126, 50, 1)");

const handleChange = (event) => {
    value.value = event.value;
};
</script>
