<template>
  <div>
    <k-textarea  :style="{ width: '260px' }" :disabled="true" placeholder="'Disabled textarea'" :rows="4" />
  </div>
</template>

<script>
import { TextArea } from "@progress/kendo-vue-inputs";

export default {
  components: {
    "k-textarea": TextArea,
  },
};
</script>
