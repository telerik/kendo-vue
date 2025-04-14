<template>
  <div>
      <TreeList
        :style="treeListStyles"
        :data-items="tree"
        :expand-field="expandField"
        :sub-items-field="subItemsField"  
        @rowdrop="onRowDrop"
        :reordableRows="true"
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
    moveTreeItem,
    extendDataItem,
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
          expanded: [1, 3],
          columns: [
            {
              field: "name",
              title: "Name",
              width: "34%",
              expandable: true,
            },
            {
              field: "position",
              title: "Position",
              width: "33%",
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
            maxHeight: "540px",
            overflow: "auto",
            width: "100%"
          };
        }
      },
      methods: {
          onExpandChange (event) {
            this.expanded = event.value
                ? this.expanded.filter((id) => id !== event.dataItem.id)
                : [...this.expanded, event.dataItem.id];
          },
          onRowDrop(event) {
              this.dataItems = moveTreeItem(
                  this.dataItems,
                  event.dragged,
                  event.draggedOver,
                  this.subItemsField
                );
          }
      }
  };
  
  </script>
  
  