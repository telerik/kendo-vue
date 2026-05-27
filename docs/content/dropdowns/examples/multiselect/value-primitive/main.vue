<template>
  <div>
    <div class="example-config">Selected Value: {{ multiSelectValues }}</div>
    <div :style="{ display: 'inline-block', paddingRight: '20px' }">
      value and change
      <br />
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        :value="multiSelectValues"
        @change="handleChange"
      />
    </div>
    <div :style="{ display: 'inline-block' }">
      v-model
      <br />
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        v-model="multiSelectValues"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const multiSelectValues = ref([2]);
const sports = ref([
    { text: "Basketball", id: 1 },
    { text: "Football", id: 2 },
    { text: "Tennis", id: 3 },
    { text: "Volleyball", id: 4 },
]);

function handleChange(event) {
    multiSelectValues.value = event.value;
}
</script>
