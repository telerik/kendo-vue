<template>
  <div class="example">
    <ColorPalette :disabled="true" :palette="'office'" />
  </div>
</template>
<script>
import { ColorPalette } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPalette,
  },
};
</script>
