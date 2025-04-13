<template>
    <DropDownList
      :data-items="data"
      :default-item="defaultItem"
      @change="onChange"
    />
  </template>
  <script>
  import { DropDownList } from '@progress/kendo-vue-dropdowns';
  export default {
    components: { DropDownList },
    props: {
      dataItem: Object,
      data: Array,
      defaultItem: String,
    },
    emits: ['change'],
    methods: {
      onChange(e) {
        this.$emit('change', { value: e.value, syntheticEvent: e.event });
      },
    },
  };
  </script>
  