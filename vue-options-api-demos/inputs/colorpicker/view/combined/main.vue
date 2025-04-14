<template>
  <div>
    <div
      :style="{
        color: selectedColor,
      }"
    >
      {{ selectedColor }}
    </div>
    <ColorPicker
      :view="'combo'"
      :value="selectedColor"
      @change="handleOnChange"
    />
  </div>
</template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPicker,
  },
  methods: {
    handleOnChange(e) {
      this.selectedColor = e.value;
    },
  },
  data() {
    return {
      view: "gradient",
      selectedColor: "rgba(237, 126, 50, 1)",
    };
  },
};
</script>
