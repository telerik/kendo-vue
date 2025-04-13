<template>
    <ChipList
      :rounded="'full'"
      :default-data-items="types"
      :selection="'multiple'"
      :chip="chip"
    >
      <template v-slot:myChipTemplate="{ props }">
        <custom
          :data-item="props.dataItem"
          :value="props.value"
          :text="props.text"
        />
      </template>
    </ChipList>
  </template>
  <script>
  import { ChipList } from '@progress/kendo-vue-buttons';
  import CustomChip from './CustomChip.vue';
  
  const types = [
    {
      text: 'Base',
      value: 'base',
      type: 'base',
    },
    {
      text: 'Warning',
      value: 'warning',
      type: 'warning',
    },
    {
      text: 'Error',
      value: 'error',
      type: 'error',
    },
    {
      text: 'Info',
      value: 'info',
      type: 'info',
    },
    {
      text: 'Success',
      value: 'success',
      type: 'success',
    },
    {
      text: 'Custom',
      value: 'custom',
      type: null,
    },
  ];
  
  export default {
    components: {
      ChipList,
      custom: CustomChip,
    },
    data() {
      return {
        types: types,
        chip: 'myChipTemplate',
      };
    },
  };
  </script>
  