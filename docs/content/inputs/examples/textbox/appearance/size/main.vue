<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size: </span>
        <KTextBox :size="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium size: </span>
        <KTextBox :size="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large size: </span>
        <KTextBox :size="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <KTextBox
          :size="null"
          :wrapper-class="'custom-input'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
</script>

<style scoped>
.custom-input {
  padding-block: 20px;
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
