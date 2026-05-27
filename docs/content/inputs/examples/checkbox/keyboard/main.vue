<template>
  <div>
    <Checkbox ref="checkboxRef" :label="'Initially focused'" />
    <br />
    <Checkbox :label="'Secondary focused'" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Checkbox } from "@progress/kendo-vue-inputs";

const checkboxRef = ref(null);

onMounted(() => {
    checkboxRef.value.focusElement();
});
</script>

