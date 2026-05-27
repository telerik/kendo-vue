<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :placeholder="'e.g. Andorra'"
    />
    <br />
    <br />
    Selected country: {{ value }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';

const countries = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
const value = ref('');

function onChange(event) {
    value.value = event.target.value;
}
</script>
