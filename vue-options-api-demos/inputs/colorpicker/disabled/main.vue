<template>
  <div class="example-wrapper">
    <ColorPicker :disabled="true" />
  </div>
</template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPicker,
  },
};
</script>
