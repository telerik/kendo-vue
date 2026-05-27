<template>
  <div>
    <SplitButton :items="items" :text="'Enabled Button'" /> &nbsp;
    <SplitButton :disabled="true" :items="items" :text="'Disabled Button'" />
  </div>
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import { ref } from "vue";

const items = ref(["Item1", "Item2", "Item3"]);
</script>
