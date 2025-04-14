<template>
  <div>
    <k-textarea  :style="{ width: '260px' }" :rows="5" />
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
