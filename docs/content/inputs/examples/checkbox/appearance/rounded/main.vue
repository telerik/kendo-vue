<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>No roundness:</span>
        <Checkbox :rounded="'none'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Small roundness:</span>
        <Checkbox :rounded="'small'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Medium roundness:</span>
        <Checkbox :rounded="'medium'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Large roundness:</span>
        <Checkbox :rounded="'large'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <Checkbox
          :rounded="'none'"
          class="custom-checkbox"
          :default-checked="true"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { Checkbox } from "@progress/kendo-vue-inputs";
</script>

<style>
.custom-checkbox input {
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
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
