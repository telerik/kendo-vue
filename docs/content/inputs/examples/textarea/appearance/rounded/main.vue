<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <TextArea rounded="small" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <TextArea rounded="medium" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <TextArea rounded="large" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <TextArea rounded="full" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Custom roundness: </span>
        <TextArea
          :rounded="'none'"
          class="custom-textarea"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { TextArea } from "@progress/kendo-vue-inputs";
</script>

<style>
.custom-textarea {
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
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
