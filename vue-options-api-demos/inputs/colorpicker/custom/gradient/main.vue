<template>
  <div>
    <ColorPicker
      :default-value="selectedColor"
      :view="'gradient'"
      :gradient-settings="gradientSettings"
    />
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
      selectedColor: "rgba(237, 126, 50, 1)",
      gradientSettings: {
        opacity: false,
      },
    };
  },
};
</script>
