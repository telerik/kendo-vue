<template>
  <div>
    <KTextBox
      :style="{ width: '230px' }"
      :placeholder="'Type some text...'"
      :icon-name="'gear'"
    />
  </div>
</template>
<script>
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";

export default {
  components: {
    KTextBox,
  },
};
</script>
