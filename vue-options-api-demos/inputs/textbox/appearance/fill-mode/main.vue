<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <KTextBox :fill-mode="'flat'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <KTextBox :fill-mode="'solid'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <KTextBox :fill-mode="'outline'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode: </span>
        <KTextBox
          :fill-mode="null"
          :class="'custom-input'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { TextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    KTextBox: TextBox,
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
