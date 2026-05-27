<template>
  <div>
    <RadioGroup ref="radioGroup" :data-items="dataItems" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RadioGroup } from "@progress/kendo-vue-inputs";

const radioGroup = ref(null);

const dataItems = [
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Other", value: "other" },
];

onMounted(() => {
    radioGroup.value.focusElement();
});
</script>
