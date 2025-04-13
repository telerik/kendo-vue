<template>
  <div>
    <k-textarea  :style="{ width: '260px' }" :value="value" @change="handleChange" :rows="2" />
  </div>
</template>

<script>
import { TextArea } from "@progress/kendo-vue-inputs";

export default {
  components: {
    "k-textarea": TextArea,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleChange(e) {
      this.value = e.value;
    },
  },
};
</script>
