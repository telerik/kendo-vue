<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size:</span>
        <Checkbox :size="'small'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Medium size:</span>
        <Checkbox :size="'medium'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Large size:</span>
        <Checkbox :size="'large'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Custom size:</span>
        <Checkbox :size="null" class="custom-checkbox" :default-checked="true" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { Checkbox } from "@progress/kendo-vue-inputs";
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
