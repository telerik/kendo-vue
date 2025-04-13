<template>
  <div>
    <ButtonStyleConfigurator
      :shape="shape"
      @shapechange="setShape"
      :size="size"
      @sizechange="setSize"
      :theme-color="themeColor"
      @themecolorchange="setThemeColor"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <KButton
      :shape="shape"
      :size="size"
      :theme-color="themeColor"
      :fill-mode="fillMode"
      :rounded="rounded"
    >
      Button
    </KButton>
  </div>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';
import ButtonStyleConfigurator from './ButtonStyleConfigurator.vue';

export default {
  components: {
    ButtonStyleConfigurator,
    KButton: Button,
  },
  data() {
    return {
      shape: 'rectangle',
      size: 'medium',
      themeColor: 'base',
      fillMode: 'solid',
      rounded: 'medium',
    };
  },
  methods: {
    setShape(shape) {
      this.shape = shape;
    },
    setSize(event) {
      this.size = event.value;
    },
    setThemeColor(event) {
      this.themeColor = event.value;
    },
    setFillMode(event) {
      this.fillMode = event.value;
    },
    setRounded(event) {
      this.rounded = event.value;
    },
  },
};
</script>
