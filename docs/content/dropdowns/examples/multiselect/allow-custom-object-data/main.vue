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
        :allow-custom="true"
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
const value = ref([]);

function isCustom(item) {
    return item.id === undefined;
}

function addKey(item) {
    item.id = new Date().getTime();
}

function onChange(event) {
    const values = event.target.value;
    const lastItem = values[values.length - 1];

    if (lastItem && isCustom(lastItem)) {
        values.pop();
        const sameItem = values.find((v) => v.text === lastItem.text);
        if (sameItem === undefined) {
            addKey(lastItem);
            values.push(lastItem);
        }
    }

    value.value = values;
}
</script>
