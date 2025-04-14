<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <kinput :fill-mode="'flat'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <kinput :fill-mode="'solid'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <kinput :fill-mode="'outline'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode: </span>
        <kinput
          :fill-mode="null"
          :class="'custom-input'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { Input } from '@progress/kendo-vue-inputs';

export default {
  components: {
    kinput: Input,
  },
};
</script>

<style>
.custom-input {
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
