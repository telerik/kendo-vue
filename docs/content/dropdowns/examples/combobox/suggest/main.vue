<template>
  <div class="example-wrapper">
    <div class="col-xs-12 col-sm-6 example-col">
      <p>ComboBox in Uncontrolled Mode</p>
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="countriesList"
        suggest
        placeholder="e.g. Austria"
      />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>ComboBox in Controlled Mode</p>
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="countriesList"
        :suggest="suggest"
        placeholder="e.g. Austria"
        :value="value"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import countries from './countries';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const value = ref(null);
const suggest = ref(null);
const countriesList = ref(countries);

function handleChange(event) {
    value.value = event.target.value;
    suggest.value = event.suggestion ? event.suggestion.value : '';
}
</script>
