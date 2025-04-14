<template>
    <div class="example-wrapper">
      <ColorPicker
        :adaptive="true"
        :adaptive-title="'Choose color'"
        :default-value="defaultValue"
      />
    </div>
  </template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";

export default {
    components: {
        ColorPicker
    },
    data() {
        return {
            defaultValue: "rgba(237, 126, 50, 1)",
        };
    },
};
</script>
