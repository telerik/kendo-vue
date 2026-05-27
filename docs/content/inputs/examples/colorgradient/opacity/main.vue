<template>
  <div>
    <div class="example-config">
      <strong>
        Selected color: <span>{{ value }}</span>
      </strong>
    </div>
    <ColorGradient :opacity="false" :value="value" @change="handleChange" />
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
