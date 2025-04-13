<template>
  <Signature :value="value" :popup-scale="2.2" @change="onChange" />
</template>
<script>
import { Signature } from '@progress/kendo-vue-inputs';
import { sampleSignature } from './sample-signature';

export default {
  components: {
    Signature,
  },
  data() {
    return {
      value: sampleSignature,
    };
  },
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
</script>
