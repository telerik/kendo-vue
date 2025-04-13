<template>
    <div>
      <div>T-shirt size:</div>
      <DropDownList
        :data-items="data"
        :text-field="'text'"
        :data-item-key="'id'"
        :filterable="true"
        @filterchange="handleFilterchange"
        :adaptive="true"
        :adaptive-title="'Choose size'"
        :style="{
          width: '300px'
        }"
      />
    </div>
</template>
<script>
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { filterBy } from '@progress/kendo-data-query';

const allData = [
  {
    id: 1,
    text: "Small",
  },
  {
    id: 2,
    text: "Medium",
  },
  {
    id: 3,
    text: "Large",
  },
]

export default {
  components: {
    DropDownList
  },
  data: function () {
    return {
      data: allData,
    };
  },
  methods: {
    filterData(filter) {
      const filteredData = allData.slice();
      return filterBy(filteredData, filter);
    },
    handleFilterchange(event) {
      this.data = this.filterData(event.filter)
    }
  },
};
</script>
