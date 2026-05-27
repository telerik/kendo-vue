<template>
  <div>
    <TextArea
      :style="{ width: '260px' }"
      :default-value="'Textarea default value'"
      :rows="4"
    />
  </div>
</template>

<script setup>
import { TextArea } from "@progress/kendo-vue-inputs";
</script>
