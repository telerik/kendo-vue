<template>
  <div>
    <TextArea
      :style="{ width: '260px' }"
      :disabled="true"
      placeholder="Disabled textarea"
      :rows="4"
    />
  </div>
</template>

<script setup>
import { TextArea } from "@progress/kendo-vue-inputs";
</script>
