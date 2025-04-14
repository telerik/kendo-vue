<template>
  <div>
    <k-textarea  :style="{ width: '260px' }" :auto-size="true" :rows="2" />
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
