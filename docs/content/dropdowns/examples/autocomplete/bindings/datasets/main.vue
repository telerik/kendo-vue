<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      :text-field="'text'"
      @change="onChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';

const countries = ref([
    { text: "Albania", id: "Alb" },
    { text: "Andorra", id: "And" },
    { text: "Armenia", id: "Arm" },
    { text: "Austria", id: "Aus" },
    { text: "Azerbaijan", id: "Aze" },
]);
const value = ref('');

function onChange(event) {
    value.value = event.target.value;
}
</script>
