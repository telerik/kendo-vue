<template>
  <div>
    <k-textarea  :style="{ width: '260px' }" :default-value="'Textarea default value'" :rows="4" />
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
