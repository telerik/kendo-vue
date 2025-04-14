<template>
  <AutoComplete
    :data-items="groupedData"
    :text-field="'name'"
    :placeholder="'Please select ...'"
    :group-field="'position'"
    :style="{
      width: '300px',
    }"
    @change="onFilterChange"
  />
</template>
<script>
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import { groupBy, filterBy } from '@progress/kendo-data-query';
import { employees } from "./grouping-data.js";

export default {
  components: {
    AutoComplete,
  },
  data() {
    return {
      groupedData: groupBy(employees, [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
      ),
    };
  },
  methods: {
    onFilterChange(event) {
      const filter = {
        field: "name",
        ignoreCase: true,
        operator: "contains",
        value: event.value,
      };
      const data = groupBy(filterBy(employees, filter), [
        { field: "position" },
      ]).reduce((res, group) => [...res, ...group.items], []);
      this.groupedData = data;
    },
  },
};
</script>
