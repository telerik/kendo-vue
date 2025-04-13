<template>
  <MultiSelect
    :data-items="groupedData"
    :text-field="'name'"
    :data-item-key="'id'"
    :group-field="'position'"
    :style="{
      width: '300px',
    }"
  />
</template>
<script>
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { groupBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

export default {
  components: {
    MultiSelect,
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
