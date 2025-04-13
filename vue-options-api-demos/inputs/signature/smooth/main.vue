<template>
  <Signature :smooth="true" :popup-scale="2" />
</template>
<script>
import { Signature } from "@progress/kendo-vue-inputs";

export default {
  components: {
    Signature,
  },
};
</script>
