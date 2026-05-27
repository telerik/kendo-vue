<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <NumericTextBox :fill-mode="'flat'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <NumericTextBox :fill-mode="'solid'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <NumericTextBox :fill-mode="'outline'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode: </span>
        <NumericTextBox
          :fill-mode="null"
          :class="'custom-numerictextbox'"
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
