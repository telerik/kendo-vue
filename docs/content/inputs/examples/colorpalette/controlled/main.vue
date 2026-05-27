<template>
  <div class="row">
    <div class="m-3">
      <span :style="{ color: value }">Selected color: {{ value }}</span>
      <br />
      <ColorPalette :value="value" @change="handleOnChange" :palette="'basic'" />
    </div>
    <div class="m-3">
      <span :style="{ color: value }">Selected color: {{ value }}</span>
      <br />
      <ColorPalette v-model="value" :palette="'basic'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPalette } from "@progress/kendo-vue-inputs";

const value = ref("none");

const handleOnChange = (e) => {
    value.value = e.value;
};
</script>
