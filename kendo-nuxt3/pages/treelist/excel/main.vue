<template>
<div>
    <KButton :theme-color="'primary'" @click="exportExcel">Export Excel</KButton>
   <TreeList
      :style="{
        maxHeight: '510px',
        overflow: 'auto',
      }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      :data-items="dataItems"
      :columns="columns"
    />
</div>
</template>

<script>
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import dataItems from "./data";
import {
  treeToFlat,
 TreeList
    } from '@progress/kendo-vue-treelist';

export default {
    components: {
      TreeList,
      KButton
    },
    methods: {
      exportExcel () {
        saveExcel({
            fileName: "myFile",
            data: treeToFlat(this.dataItems, this.expandField, this.subItemsField),
            columns: this.columns,
            hierarchy: true
         });
      }
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

