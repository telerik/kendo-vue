<template>
  <div class="example-wrapper">
    <div class="col-xs-12 col-sm-6 example-col">
      <p>AutoComplete in Uncontrolled Mode</p>
      <AutoComplete
        :style="{ width: '230px' }"
        :data-items="countriesList"
        :suggest="true"
        :placeholder="'e.g. Austria'"
      ></AutoComplete>
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>AutoComplete in Controlled Mode</p>
      <AutoComplete
        :style="{ width: '230px' }"
        :data-items="countriesList"
        :suggest="suggest"
        :placeholder="'e.g. Austria'"
        :value="value"
        @change="handleChange"
      ></AutoComplete>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import countries from './countries';

const value = ref('');
const suggest = ref('');
const countriesList = ref(countries);

function handleChange(event) {
    value.value = event.target.value;
    suggest.value = event.suggestion ? event.suggestion.value : '';
}
</script>
