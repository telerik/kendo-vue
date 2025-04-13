<template>
  <div class="row">
    <div class="m-3">
      <p>v-model</p>
      <ColorGradient v-model="value" />
    </div>
    <div class="m-3">
      <p>value and change event</p>
      <ColorGradient :value="value" @change="handleChange" />
    </div>
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
    }
  },
};
</script>
