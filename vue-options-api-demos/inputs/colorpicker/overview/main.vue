<template>
  <div class="row">
    <div class="m-3">
      <p>ColorPicker with gradient and palette</p>
      <ColorPicker :default-value="'white'" />
    </div>
    <div class="m-3">
      <p>ColorPicker with predefined colors</p>
      <ColorPicker
        :view="'palette'"
        :default-value="'rgba(237, 126, 50, 1)'"
      />
    </div>
    <div class="m-3">
      <p>ColorPicker with gradient</p>
      <ColorPicker :view="'gradient'" :default-value="'green'" />
    </div>
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
