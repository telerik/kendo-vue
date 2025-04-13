<template>
  <div>
    <MultiSelect
      :data-items="groupedData"
      :text-field="'name'"
      :data-item-key="'id'"
      :group-field="'role'"
      :filterable="true"
      @filterchange="filterChange"
      :style="{
        width: '300px',
      }"
    />
  </div>
</template>
<script>
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { groupBy, filterBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

export default {
  components: {
    MultiSelect,
  },
  methods: {
    filterChange(event) {
      this.groupedData = this.filterData(event.filter);
    },
    filterData(filter) {
      const data = employees.slice();
      return groupBy(filterBy(data, filter), [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
      );
    },
  },
  data() {
    return {
      groupedData: groupBy(employees, [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
      ),
    };
  },
};
</script>
