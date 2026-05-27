<template>
  <div>
    <div style="display: flex; align-items: center; gap: 10px">
      <DropDownList
        :style="{ width: '100px' }"
        :data-items="countries"
        :value="selectedCountry"
        text-field="code"
        value-field="code"
        @change="handleCountryChange"
      />
      <MaskedTextBox
        :style="{ width: '300px' }"
        :mask="mask"
        :value="value"
        @change="handleOnChange"
      />
    </div>
    <div v-if="formattedValue">
      <p>Formatted Value: {{ formattedValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MaskedTextBox } from '@progress/kendo-vue-inputs';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const countries = [
    { name: 'Andorra', code: '🇦🇩', mask: '000-000-000', prefix: '+376' },
    { name: 'Germany', code: '🇩🇪', mask: '0000-0000000', prefix: '+49' },
];

const selectedCountry = ref(countries[0]);
const mask = ref(selectedCountry.value.mask);
const value = ref('');
const formattedValue = ref('');

function handleCountryChange(event) {
    selectedCountry.value = event.target.value;
    mask.value = selectedCountry.value ? selectedCountry.value.mask : '';
    value.value = '';
    formattedValue.value = '';
}

function handleOnChange(event) {
    const newValue = event.target.value;
    value.value = newValue;
    const cleanValue = newValue.replace(/[^0-9]/g, '');
    if (selectedCountry.value) {
        formattedValue.value = `${selectedCountry.value.prefix}${cleanValue}`;
    } else {
        formattedValue.value = newValue;
    }
}
</script>
