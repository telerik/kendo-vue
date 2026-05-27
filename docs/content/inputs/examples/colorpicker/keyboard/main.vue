<template>
  <div class="example-wrapper">
    <ColorPicker ref="colorPickerRef" :default-value="value" />
    <p>
      (use Alt+<code>↓</code> to open the popup, <code>←↓↑→</code> to navigate,
      <code>enter</code> to select the value)
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const value = ref("rgba(237, 126, 50, 1)");
const colorPickerRef = ref(null);

onMounted(() => {
    colorPickerRef.value.focusElement();
});
</script>
