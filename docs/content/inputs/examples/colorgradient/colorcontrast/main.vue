<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Foreground Color</p>
      <ColorGradient
        :value="foregroundColor"
        :background-color="backgroundColor"
        @change="handleForegroundChange"
      />
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Background Color</p>
      <ColorGradient
        :value="backgroundColor"
        :opacity="false"
        @change="handleBackgroundChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorGradient } from "@progress/kendo-vue-inputs";

const foregroundColor = ref("rgba(49,118,122,1)");
const backgroundColor = ref("rgba(255,255,255,1)");

const handleForegroundChange = (event) => {
    foregroundColor.value = event.value;
};

const handleBackgroundChange = (event) => {
    backgroundColor.value = event.value;
};
</script>
