<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :tableProps="{
        style: {
          tableLayout: 'fixed',
        },
      }"
      :columns="columns"
      :expandField="expandField"
      :subItemsField="subItemsField"
      @expandchange="onExpandChange"
      :data-items="tree"
      :columnVirtualization="true"
    />
  </div>
</template>

<script>
import { generateData } from './treelist-data';
const numberOfColumns = 100;
const columnWidth = 150;
const numberOfRows = 7;
const subItemsField = 'subItems';
const expandField = 'expanded';
const { columns, data } = generateData(
  numberOfColumns,
  columnWidth,
  numberOfRows,
  subItemsField
);

import {
  TreeList,
  mapTree,
  extendDataItem,
} from '@progress/kendo-vue-treelist';
export default {
  components: {
    TreeList,
  },
  data() {
    return {
      dataItems: [...data],
      subItemsField,
      expandField,
      expanded: [],
      columns,
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
        overflow: 'auto',
        width: '720px',
      };
    },
  },
  methods: {
    onExpandChange(event) {
      this.expanded = event.value
        ? this.expanded.filter((id) => id !== event.dataItem.id)
        : [...this.expanded, event.dataItem.id];
    },
  },
};
</script>
