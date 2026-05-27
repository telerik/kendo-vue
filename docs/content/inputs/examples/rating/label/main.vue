<template>
  <Rating
    :value="value"
    :defaultValue="value"
    :precision="'half'"
    :label="value ? value + ' out of 5' : 'please select value'"
    @change="handleValueChange"
  />
</template>

<script setup>
import { ref } from "vue";
import { Rating } from "@progress/kendo-vue-inputs";

const value = ref(2);

function handleValueChange(event) {
    value.value = event.value;
}
</script>
