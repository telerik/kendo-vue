<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <ComboBox
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :placeholder="'e.g. Andorra'"
    ></ComboBox>
    <br />
    <br />
    Selected country: {{ value }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const countries = ref(['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan']);
const value = ref(null);

function onChange(event) {
    value.value = event.target.value;
}
</script>
