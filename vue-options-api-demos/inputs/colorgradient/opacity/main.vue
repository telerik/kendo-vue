<template>
  <div>
    <div class="example-config">
      <strong>
        Selected color: <span>{{ value }}</span>
      </strong>
    </div>
    <ColorGradient :opacity="false" :value="value" @change="handleChange" />
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
  methods: {
    handleChange(event) {
      this.value = event.value;
    },
  },
};
</script>
