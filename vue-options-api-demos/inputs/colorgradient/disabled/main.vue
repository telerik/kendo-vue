<template>
  <div>
    <ColorGradient :default-value="value" :disabled="true" />
  </div>
</template>
<script>
import { ColorGradient } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ColorGradient,
  },
  data() {
    return {
      value: 'rgba(237, 126, 50, 1)',
    };
  },
};
</script>
