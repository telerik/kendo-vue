<template>
  <div>
    <DropDownList
    :data-items="groupedData"
    :text-field="'name'"
    :group-field="'position'"
    :filterable="true"
    @filterchange="filterChange"
    :style="{
      width: '300px',
    }"
  />
</div>
</template>
<script>
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { groupBy, filterBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

export default {
  components: {
    DropDownList,
  },
  methods: {
    filterChange(event) {
      this.groupedData = this.filterData(event.filter);
    },
    filterData(filter) {
      const data = employees.slice();
      return groupBy(filterBy(data, filter), [
        { field: "position" },
      ]).reduce((res, group) => [...res, ...group.items], []);
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
