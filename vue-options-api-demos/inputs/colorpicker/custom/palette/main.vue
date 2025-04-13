<template>
  <div>
    <ColorPicker
      :default-value="selectedColor"
      :palette-settings="paletteSettings"
      :view="'palette'"
    />
  </div>
</template>
<script>
import { ColorPicker } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ColorPicker,
  },
  data() {
    return {
      selectedColor: 'rgba(237, 126, 50, 1)',
      paletteSettings: {
        palette: [
          '#f0d0c9',
          '#e2a293',
          '#d4735e',
          '#65281a',
          '#eddfda',
          '#dcc0b6',
          '#cba092',
          '#7b4b3a',
          '#fcecd5',
          '#f9d9ab',
          '#f6c781',
          '#c87d0e',
          '#e1dca5',
          '#d0c974',
          '#a29a36',
          '#514d1b',
          '#c6d9f0',
          '#8db3e2',
          '#548dd4',
          '#17365d',
        ],
        columns: 5,
        tileSize: 30,
      },
    };
  },
  methods: {
    handleForegroundChange(e) {
      this.foregroundColor = e.value;
    },
    handleBackgroundChange(e) {
      this.backgroundColor = e.value;
    },
  },
};
</script>
