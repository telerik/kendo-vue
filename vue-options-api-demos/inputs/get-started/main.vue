<template>
  <div class="example-wrapper">
    <ColorPicker :view="'gradient'" :default-value="'green'" />
  </div>
</template>
<script>
import { ColorPicker } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ColorPicker,
  },
};
</script>
