<template>
  <div class="example-wrapper">
    <div>
      <div>Favorite sports:</div>
      <MultiSelect
        :style="{ width: '300px' }"
        :data-items="sports"
        v-model="value"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const sports = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
];
const value = ref([]);
</script>
