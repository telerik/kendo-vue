<template>
    <div>
      <p>Type the name of a European country:</p>
      <dropdownlist
        :style="{ width: '230px' }"
        :data-items="countries"
        :value="selectedCountry"
        :value-render="valueRender"
        @change="onChange"
      >
        <template v-slot:myTemplate="{ props }">
          <custom :value="props.value" @reset="resetValue" />
        </template>
      </dropdownlist>
    </div>
  </template>
  
  <script>
  import countries from './countries';
  import { DropDownList } from '@progress/kendo-vue-dropdowns';
  import ValueRender from './ValueRender';
  
  export default {
    components: {
      dropdownlist: DropDownList,
      custom: ValueRender,
    },
    data() {
      return {
        selectedCountry: countries[0],
        valueRender: 'myTemplate',
        countries: countries,
      };
    },
    methods: {
      onChange(event) {
        this.selectedCountry = event.value;
      },
      resetValue() {
        this.selectedCountry = '';
      },
    },
  };
  </script>
  