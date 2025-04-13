<template>
  <div class="example-wrapper">
    <ColorPalette ref="colorPaletteRef" :default-value="value" />
    <p>
      (use <code>←↓↑→</code> to navigate, <code>enter</code> to select the
      value)
    </p>
  </div>
</template>
<script>
import { ColorPalette } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPalette,
  },
  mounted() {
    this.$refs.colorPaletteRef.focus();
  },
  data() {
    return {
      value: "rgba(237, 126, 50, 1)",
    };
  },
};
</script>
