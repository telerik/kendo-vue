<template>
  <div class="example-wrapper">
    <ColorPicker ref="colorPickerRef" :default-value="value" />
    <p>
      (use Alt+<code>↓</code> to open the popup, <code>←↓↑→</code> to navigate,
      <code>enter</code> to select the value)
    </p>
  </div>
</template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPicker,
  },
  mounted() {
    this.$refs.colorPickerRef.focusElement();
  },
  data() {
    return {
      value: "rgba(237, 126, 50, 1)",
    };
  },
};
</script>
