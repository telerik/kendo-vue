<template>
<div>
    <TreeList
      :style="treeListStyles"
      :resizable="true"
      :data-items="tree"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @columnresize="onColumnResize"
      @expandchange="onExpandChange"
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
        treeListWidth: null,
        dataItems: [...employees],
        subItemsField: 'employees',
        expandField: 'expanded',
        expanded: [1, 2, 32],
        columns: [
          {
            field: "name",
            title: "Name",
            width: "310px",
            expandable: true,
          },
          {
            field: "position",
            title: "Position",
            width: "260px",
          },
          {
            field: "hireDate",
            title: "Hire Date",
            width: "160px",
            format: "{0:d}",
          },
          {
            field: "timeInPosition",
            title: "Year(s) in Position",
            width: "160px",
          },
          {
            field: "fullTime",
            title: "Full Time",
            width: "150px",
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
          maxHeight: "510px",
          overflow: "auto",
          display: "inline-block",
          width: this.treeListWidth ? this.treeListWidth + 'px' : this.treeListWidth
        };
      }
    },
    methods: {
        onExpandChange (event) {
          this.expanded = event.value
              ? this.expanded.filter((id) => id !== event.dataItem.id)
              : [...this.expanded, event.dataItem.id];
        },
        onColumnResize (event) {
          this.treeListWidth = event.totalWidth
          if (event.end) {
            this.columns = event.columns;
          }
        }
    }
};

</script>

