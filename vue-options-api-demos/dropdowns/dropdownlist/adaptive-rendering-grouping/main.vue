<template>
  <DropDownList
    :data-items="groupedData"
    :text-field="'name'"
    :group-field="'position'"
    :style="{
      width: '300px',
    }"
    :adaptive="true"
    :adaptive-title="'Adaptive Grouping'"
  />
</template>
<script>
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { groupBy } from '@progress/kendo-data-query';
import { employees } from './grouping-data.js';

export default {
  components: {
    DropDownList
},
  data() {
    return {
      groupedData: groupBy(employees, [{ field: 'position' }]).reduce((res, group) =>  [...res, ...group.items], [])
    };
  },
};
</script>