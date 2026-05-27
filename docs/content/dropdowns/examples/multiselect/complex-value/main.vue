<template>
  <div class="example-wrapper">
    <div>
      <div class="example-config">Selected Values: {{ value }}</div>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sports"
        :value="value"
        @change="onChange"
        :text-field="'text'"
        :data-item-key="'id'"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const sports = [
    { text: "Basketball", id: 1 },
    { text: "Football", id: 2 },
    { text: "Tennis", id: 3 },
    { text: "Volleyball", id: 4 },
];
const value = ref([
    { text: "Football", id: 2 },
    { text: "Tennis", id: 3 },
]);

function onChange(event) {
    value.value = [...event.target.value];
}
</script>
