<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :loading="loading"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const source = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
const delay = 500;

const countries = ref(source);
const value = ref('');
const loading = ref(false);
let timeout;

function onChange(event) {
    const inputValue = event.target.value;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        countries.value = filterData(inputValue);
        loading.value = false;
    }, delay);

    value.value = inputValue;
    loading.value = true;
}

function filterData(value) {
    const data = source;
    const filter = {
        value: value,
        operator: 'startswith',
        ignoreCase: true,
    };
    return value ? filterBy(data, filter) : data;
}
</script>
