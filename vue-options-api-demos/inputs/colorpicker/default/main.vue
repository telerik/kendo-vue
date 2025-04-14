<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col">
      <p>ColorPicker with default value</p>
      <ColorPicker :default-value="defaultValue" />
    </div>
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
      defaultValue: "rgba(237, 126, 50, 1)",
    };
  },
};
</script>
