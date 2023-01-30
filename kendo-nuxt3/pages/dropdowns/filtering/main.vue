<template>
    <div style="height: 100vh">
      <div style="height: calc(100vh - 200px)"></div>
      <input type="text" /><br />
      <input type="text" /><br />
      <input type="text" /><br />
      <combobox
        ref="combo"
        :style="{ width: '230px' }"
        :data-items="items"
        :text-field="'text'"
        :filterable="true"
        @filterchange="filterChange"
      ></combobox>
    </div>
  </template>
  <script>
  import { ComboBox } from '@progress/kendo-vue-dropdowns';
  import { filterBy } from '@progress/kendo-data-query';
  
  const source = [
    { text: 'Small', id: 1 },
    { text: 'Medium', id: 2 },
    { text: 'Large', id: 3 },
    { text: 'Large2', id: 4 },
    { text: 'Large3', id: 5 },
    { text: 'Large4', id: 6 },
  ];
  
  export default {
    components: {
      combobox: ComboBox,
    },
    data: function () {
      return {
        items: source.slice(),
      };
    },
    methods: {
      filterChange(event) {
        this.items = this.filterData(event.filter);
      },
      filterData(filter) {
        const data = source.slice();

        return filterBy(data, filter);
      },
    },
  };
  </script>
  