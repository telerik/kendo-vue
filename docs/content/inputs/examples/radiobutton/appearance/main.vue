<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size:</span>
        <RadioButton :size="'small'" :checked="true" />
      </span>
      <span class="wrapper">
        <span>Medium size:</span>
        <RadioButton :size="'medium'" :checked="true" />
      </span>
      <span class="wrapper">
        <span>Large size:</span>
        <RadioButton :size="'large'" :checked="true" />
      </span>
      <span class="wrapper">
        <span>Custom size:</span>
        <RadioButton :size="null" class="custom-checkbox" :checked="true" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { RadioButton } from "@progress/kendo-vue-inputs";
</script>

<style>
.custom-checkbox input {
  width: 30px;
  height: 30px;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
