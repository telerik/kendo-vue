<template>
   <combobox
          :style="{ width: '230px' }"
    :data-items="items"
    :text-field="'text'"
    :filterable="true"
    @change="handleChange"
    @filterchange="filterChange"
  ></combobox>
</template>
<script>
import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

export default {
  components: {
    combobox: ComboBox,
  },
  emits: {
    change: null,
  },
  props: {
    filter: [Array, Object],
    filterOptions: [Array],
  },
  data: function () {
    return {
      items: [],
    };
  },
  mounted() {
    this.items = this.$props.filterOptions.slice();
  },
  methods: {
    handleChange(e) {
      const nextFilterToEmit = {
        nextFilter: {
          ...this.filter,
          value: e.value ? e.value.text : "",
        },
      };
      this.$emit("change", nextFilterToEmit);
    },
    filterChange(event) {
      this.items = this.filterData(event.filter);
    },
    filterData(filter) {
      const data = this.$props.filterOptions.slice();
      return filterBy(data, filter);
    },
  },
};
</script>
