<template>
  <div class="example-wrapper">
    <FlatColorPicker ref="colorPickerRef" />
  </div>
</template>
<script>
import { FlatColorPicker } from '@progress/kendo-vue-inputs';

export default {
  components: {
    FlatColorPicker,
  },
  data() {
    return {
      value: 'rgba(237, 126, 50, 1)',
    };
  },
};
</script>
