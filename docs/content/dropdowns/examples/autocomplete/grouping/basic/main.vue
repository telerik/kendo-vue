<template>
  <AutoComplete
    :data-items="groupedData"
    :text-field="'name'"
    :placeholder="'Please select ...'"
    :group-field="'position'"
    :style="{ width: '300px' }"
  />
</template>

<script setup>
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import { groupBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

const groupedData = groupBy(employees, [{ field: "position" }]).reduce(
    (res, group) => [...res, ...group.items],
    []
);
</script>
