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
      :backgroundColor="'rgba(255,255,255,1)'"
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

export default {
  components: {
    ColorGradient,
  },
  data() {
    return {
      value: 'rgba(49,118,122,1)',
      backgroundUrl:
        'https://demos.telerik.com/kendo-ui/content/web/colorpicker/motor.png',
    };
  },
  methods: {
    handleChange(event) {
      this.value = event.value;
    },
  },
};
</script>
