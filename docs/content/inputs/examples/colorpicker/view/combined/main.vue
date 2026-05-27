<template>
  <div>
    <div :style="{ color: selectedColor }">
      {{ selectedColor }}
    </div>
    <ColorPicker
      :view="'combo'"
      :value="selectedColor"
      @change="handleOnChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const selectedColor = ref("rgba(237, 126, 50, 1)");

const handleOnChange = (e) => {
    selectedColor.value = e.value;
};
</script>
