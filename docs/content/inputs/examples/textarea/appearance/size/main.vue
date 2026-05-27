<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size: </span>
        <TextArea size="small" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium size: </span>
        <TextArea size="medium" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large size: </span>
        <TextArea size="large" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <TextArea
          :size="null"
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

<style scoped>
input.custom-textarea {
  font-size: 30px;
  line-height: 30px;
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
