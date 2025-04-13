<template>
  <ProgressBar :value="value" />
</template>

<script>
import { ProgressBar } from '@progress/kendo-vue-progressbars';

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      value: 55,
    };
  },
};
</script>
