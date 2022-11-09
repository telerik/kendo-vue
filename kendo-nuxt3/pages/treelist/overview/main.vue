<template>
 <TreeList
      :style="{
        maxHeight: '510px',
        overflow: 'auto',
      }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      :data-items="dataItems"
      :columns="columns"
    >
    </TreeList>
    no records
    <TreeList
      :style="{
        maxHeight: '510px',
        overflow: 'auto',
      }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      :data-items="[]"
      :columns="columns"
    >
    <template v-slot:norecords>
            <b>NO Items!</b>
        </template>
    </TreeList>
</template>

<script>
import dataItems from "./simple-data";
import {
 TreeList
    } from '@progress/kendo-vue-treelist';

export default {
    components: {
      TreeList
    },
    data() {
      return {
        dataItems,
        subItemsField: "employees",
        expandField: "expanded",
        columns: [
            {
              field: "name",
              title: "Name",
              width: "250px",
              expandable: true,
            },
            {
              field: "title",
              title: "Title",
            }
          ]
      };
    }
};

</script>

