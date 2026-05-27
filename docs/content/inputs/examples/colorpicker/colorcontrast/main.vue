<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Foreground Color</p>
      <ColorPicker
        :view="'gradient'"
        :value="foregroundColor"
        @change="handleForegroundChange"
        :gradient-settings="{ backgroundColor: backgroundColor }"
      />
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Background Color</p>
      <ColorPicker
        :view="'gradient'"
        :value="backgroundColor"
        @change="handleBackgroundChange"
        :gradient-settings="{ opacity: false }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const foregroundColor = ref("rgba(49,118,122,1)");
const backgroundColor = ref("rgba(255,255,255,1)");

const handleForegroundChange = (e) => {
    foregroundColor.value = e.value;
};

const handleBackgroundChange = (e) => {
    backgroundColor.value = e.value;
};
</script>
