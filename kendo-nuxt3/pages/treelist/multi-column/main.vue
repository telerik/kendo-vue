<template>
<div>
  111
  <TreeList
      :style="treeListStyles"
      :tableProps="{
        style: {
          tableLayout: 'fixed',
        },
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
              field: "Personal Information",
              children: [
                {
                  field: "name",
                  title: "Name",
                  width: "300px",
                  expandable: true,
                },
                {
                  title: "Contact Information",
                  children: [
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
                  ],
                },
              ],
            },
            {
              title: "Employee Details",
              children: [
                {
                  field: "position",
                  title: "Position",
                  width: "300px",
                },
                {
                  field: "fullTime",
                  title: "Full Time",
                  width: "100px",
                },
              ],
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
        overflow: 'auto',
      };
      }
    },
    methods: {
        onExpandChange (event) {
          this.expanded = event.value
              ? this.expanded.filter((id) => id !== event.dataItem.id)
              : [...this.expanded, event.dataItem.id];
        },
        onColumnReorder (event) {
         this.columns = event.columns;
        }
    }
};

</script>

