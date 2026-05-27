<template>
  <div>
    <ComboBox
      :data-items="groupedData"
      :text-field="'name'"
      :group-field="'position'"
      :style="{ width: '300px' }"
    />
  </div>
</template>

<script setup>
import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { groupBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

const groupedData = groupBy(employees, [{ field: "position" }]).reduce(
    (res, group) => [...res, ...group.items],
    []
);
</script>
