<template>
  <div>
    <Switch ref="switchRef" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Switch } from "@progress/kendo-vue-inputs";

const switchRef = ref(null);

onMounted(() => {
    switchRef.value.focus();
});
</script>
