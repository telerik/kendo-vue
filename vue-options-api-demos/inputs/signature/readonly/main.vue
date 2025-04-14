<template>
  <Signature :value="value" :read-only="true" />
</template>
<script>
import { Signature } from "@progress/kendo-vue-inputs";
import { sampleSignature } from "./sample-signature";

export default {
  components: {
    Signature,
  },
  data() {
    return {
      value: sampleSignature,
    };
  },
};
</script>
