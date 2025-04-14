<template>
  <div>
    <k-switch :default-checked="true" />
  </div>
</template>

<script>
import { Switch } from "@progress/kendo-vue-inputs";

export default {
  components: {
    "k-switch": Switch,
  },
};
</script>
