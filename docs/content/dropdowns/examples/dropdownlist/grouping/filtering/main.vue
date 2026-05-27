<template>
  <div>
    <DropDownList
      :data-items="groupedData"
      text-field="name"
      group-field="position"
      :filterable="true"
      @filterchange="filterChange"
      :style="{ width: '300px' }"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { groupBy, filterBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

const groupedData = ref(
    groupBy(employees, [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
    )
);

function filterChange(event) {
    groupedData.value = filterData(event.filter);
}

function filterData(filter) {
    const data = employees.slice();
    return groupBy(filterBy(data, filter), [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
    );
}
</script>
