<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Foreground Color</p>
      <ColorGradient
        :value="foregroundColor"
        :background-color="backgroundColor"
        @change="handleForegroundChange"
      />
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Background Color</p>
      <ColorGradient
        :value="backgroundColor"
        :opacity="false"
        @change="handleBackgroundChange"
      />
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
      foregroundColor: 'rgba(49,118,122,1)',
      backgroundColor: 'rgba(255,255,255,1)',
    };
  },
  methods: {
    handleForegroundChange(event) {
      this.foregroundColor = event.value;
    },
    handleBackgroundChange(event) {
      this.backgroundColor = event.value;
    },
  },
};
</script>
