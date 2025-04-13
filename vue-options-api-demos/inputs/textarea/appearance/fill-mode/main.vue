<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <ktextarea :fill-mode="'flat'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <ktextarea :fill-mode="'solid'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <ktextarea :fill-mode="'outline'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode: </span>
        <ktextarea
          :fill-mode="null"
          :class="'custom-textarea'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { TextArea } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ktextarea: TextArea,
  },
};
</script>

<style>
.custom-textarea {
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
