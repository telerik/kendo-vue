<template>
  <div>
    <ColorPicker
      :view="'gradient'"
      :icon-class-name="'k-icon k-i-edit-tools'"
    />
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
