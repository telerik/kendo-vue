<template>
  <AutoComplete
    :data-items="groupedData"
    :text-field="'name'"
    :placeholder="'Please select ...'"
    :group-field="'position'"
    :style="{ width: '300px' }"
    @change="onFilterChange"
  />
</template>

<script setup>
import { ref } from "vue";
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import { groupBy, filterBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

const groupedData = ref(
    groupBy(employees, [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
    )
);

function onFilterChange(event) {
    const filter = {
        field: "name",
        ignoreCase: true,
        operator: "contains",
        value: event.value,
    };
    groupedData.value = groupBy(filterBy(employees, filter), [
        { field: "position" },
    ]).reduce((res, group) => [...res, ...group.items], []);
}
</script>
