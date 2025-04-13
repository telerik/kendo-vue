<template>
  <div>
    <k-switch :on-label="'I'" :off-label="'O'" />
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
