<template>
  <div>
    Valid Input Icon:
    <br />
    <TextArea
      :style="{ width: '230px' }"
      :show-validation-icon="true"
      :rows="4"
    />
    <br />
    <br />
    Invalid Input Icon:
    <br />
    <TextArea
      :style="{ width: '230px' }"
      :show-validation-icon="true"
      :valid="false"
      :rows="4"
    />
  </div>
</template>

<script setup>
import { TextArea } from "@progress/kendo-vue-inputs";
</script>
