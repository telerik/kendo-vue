<template>
  <div>
    <k-switch ref="switch" />
  </div>
</template>

<script>
import { Switch } from "@progress/kendo-vue-inputs";

export default {
  components: {
    "k-switch": Switch,
  },
  mounted() {
    this.$refs.switch.focus();
  },
};
</script>
