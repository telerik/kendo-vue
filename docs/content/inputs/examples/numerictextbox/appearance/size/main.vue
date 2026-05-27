<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size: </span>
        <NumericTextBox :size="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium size: </span>
        <NumericTextBox :size="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large size: </span>
        <NumericTextBox :size="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <NumericTextBox
          :size="null"
          class="custom-numerictextbox"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
</script>

<style>
.custom-numerictextbox input {
  line-height: 2;
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
