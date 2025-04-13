<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <knumeric :fill-mode="'flat'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <knumeric :fill-mode="'solid'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <knumeric :fill-mode="'outline'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode: </span>
        <knumeric
          :fill-mode="null"
          :class="'custom-numerictextbox'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    knumeric: NumericTextBox,
  },
};
</script>

<style>
.custom-numerictextbox {
  background-color: #00aead;
  border: 2px solid #bfd843;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
