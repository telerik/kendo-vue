<template>
  <div>
    <p>Type the name of a European country:</p>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="selectedCountry"
      :value-render="valueRender"
      @change="onChange"
    >
      <template #myTemplate="{ props }">
        <ValueRender :value="props.value" @reset="resetValue" />
      </template>
    </DropDownList>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import ValueRender from './ValueRender.vue';
import countries from './countries';

const selectedCountry = ref(countries[0]);
const valueRender = 'myTemplate';

function onChange(event) {
    selectedCountry.value = event.value;
}

function resetValue() {
    selectedCountry.value = '';
}
</script>
