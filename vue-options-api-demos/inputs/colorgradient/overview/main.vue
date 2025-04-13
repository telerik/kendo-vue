<template>
  <div
    :style="{
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
    }"
  >
    <div
      :style="{
        'background-color': value,
        width: '490px',
        height: '290px',
        'background-image': `url(${backgroundUrl})`,
      }"
    ></div>
    <ColorGradient
      :value="value"
      @change="handleChange"
      :style="{
        'margin-top': '10px',
      }"
    />
  </div>
</template>
<script>
import { ColorGradient } from '@progress/kendo-vue-inputs';
const motorImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/inputs/colorpicker/motor.png';

export default {
  components: {
    ColorGradient,
  },
  data() {
    return {
      value: 'rgba(237, 126, 50, 1)',
      backgroundUrl: motorImage
    };
  },
  methods: {
    handleChange(event) {
      this.value = event.value;
    },
  },
};
</script>
