<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :placeholder="'e.g. Austria'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const source = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];
const countries = ref(source);
const value = ref('');

function onChange(event) {
    value.value = event.target.value;
    countries.value = filterData(event.target.value);
}

function filterData(value) {
    const filter = {
        value: value,
        operator: 'startswith',
        ignoreCase: true,
    };
    return value ? filterBy(source, filter) : source;
}
</script>
