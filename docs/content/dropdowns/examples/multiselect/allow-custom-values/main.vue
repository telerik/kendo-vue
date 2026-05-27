<template>
  <div class="example-wrapper">
    <div>
      <div>Favorite sports: {{ value }}</div>
      <MultiSelect
        :style="{ width: '300px' }"
        :data-items="sports"
        :value="value"
        @change="handleChange"
        :allow-custom="true"
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

function handleChange(event) {
    const values = event.target.value;
    const lastItem = values[values.length - 1];

    if (lastItem) {
        values.pop();
        const sameItem = values.find((value) => value === lastItem);
        if (sameItem === undefined) {
            values.push(lastItem);
        }
    }

    value.value = values;
}
</script>
