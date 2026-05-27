<template>
  <MultiSelect
    :data-items="groupedData"
    :text-field="'name'"
    :group-field="'position'"
    :style="{ width: '300px' }"
    :adaptive="true"
    :adaptive-title="'Adaptive Grouping'"
  />
</template>
<script setup>
import { computed } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { groupBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

const groupedData = computed(() =>
    groupBy(employees, [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
    )
);
</script>
