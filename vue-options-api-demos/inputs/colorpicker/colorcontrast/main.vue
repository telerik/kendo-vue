<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Foreground Color</p>
      <ColorPicker
        :view="'gradient'"
        :value="foregroundColor"
        @change="handleForegroundChange"
        :gradient-settings="{
          backgroundColor: backgroundColor,
        }"
      />
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Background Color</p>
      <ColorPicker
        :view="'gradient'"
        :value="backgroundColor"
        @change="handleBackgroundChange"
        :gradient-settings="{
          opacity: false,
        }"
      />
    </div>
  </div>
</template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPicker,
  },
  data() {
    return {
      foregroundColor: "rgba(49,118,122,1)",
      backgroundColor: "rgba(255,255,255,1)",
    };
  },
  methods: {
    handleForegroundChange(e) {
      this.foregroundColor = e.value;
    },
    handleBackgroundChange(e) {
      this.backgroundColor = e.value;
    },
  },
};
</script>
