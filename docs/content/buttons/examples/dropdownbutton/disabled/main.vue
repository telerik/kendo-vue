<template>
  <div>
    <DropDownButton :items="items" text="Enabled Button" /> &nbsp;
    <DropDownButton :disabled="true" :items="items" text="Disabled Button" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DropDownButton } from "@progress/kendo-vue-buttons";

const items = ref(["Item1", "Item2", "Item3"]);
</script>

