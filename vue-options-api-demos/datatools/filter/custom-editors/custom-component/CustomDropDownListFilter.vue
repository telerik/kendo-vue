<template>
   <dropdownlist
    :style="{ width: '230px' }"
    :data-items="filterOptions"
    :text-field="'text'"
    :data-item-key="'value'"
    :default-item="{ text: 'Choose Category ...', value: null }"
    @change="handleFilter"
  >
  </dropdownlist>
</template>

<script>
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    dropdownlist: DropDownList,
  },
  props: {  
    filter: [Array, Object],
    filterOptions: [Array],
  },
  methods: {
    handleFilter(e) {
      const nextFilterToEmit = { nextFilter: this.filter };
      nextFilterToEmit.nextFilter.value = e.value.value;
      this.$emit("filterchange", nextFilterToEmit);
    },
  },
};
</script>
