<template>
<div>
  <TreeList
      :style="treeListStyles"
      :tableProps="{
        style: {
          width: '1500px'
        }
      }"
      :expandField="expandField"
      :subItemsField="subItemsField"
      @expandchange="onExpandChange"
      :data-items="tree"
      :columns="columns"
    />
    </div>
</template>

<script>
import employees from "./data";
import {
  TreeList,
  mapTree,
  extendDataItem
    } from '@progress/kendo-vue-treelist';

export default {
    components: {
      TreeList
    },
    data() {
      return {
        dataItems: [...employees],
        subItemsField: 'employees',
        expandField: 'expanded',
        expanded: [1, 2, 32],
        columns: [
          {
            field: "name",
            title: "Name",
            width: "300px",
            expandable: true,
            locked: true,
          },
          {
            field: "position",
            title: "Position",
            width: "300px",
          },
          {
            field: "hireDate",
            title: "Hire Date",
            width: "200px",
            format: "{0:d}",
          },
          {
            field: "phone",
            title: "Phone",
            width: "200px",
          },
          {
            field: "extension",
            title: "Extension",
            width: "200px",
          },
          {
            field: "fullTime",
            title: "Full Time",
            width: "100px",
            locked: true,
          },
          {
            field: "timeInPosition",
            title: "Year(s) in Position",
            width: "200px",
          },
        ]
      };
    },
    computed: {
      tree() {
        return mapTree(this.dataItems, this.subItemsField, (item) =>
            extendDataItem(item, this.subItemsField, {
              [this.expandField]: this.expanded.includes(item.id),
            })
          );
      },
      treeListStyles() {
        return {
          maxHeight: '510px',
          width: '720px',
          overflow: 'auto'
        };
      }
    },
    methods: {
        onExpandChange (event) {
          this.expanded = event.value
              ? this.expanded.filter((id) => id !== event.dataItem.id)
              : [...this.expanded, event.dataItem.id];
        }
    }
};

</script>

