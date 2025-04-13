<template>
  <div class="example">
    <ColorPalette
      :columns="5"
      :tile-size="{
        width: 40,
        height: 30,
      }"
      :palette="'basic'"
    />
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
