<template>
  <div>
    <TreeList
      :wrapperStyle="{
        height: '430px',
        overflow: 'auto',
        width: '720px',
      }"
      :tableProps="{
        style: {
          tableLayout: 'fixed',
          width: numberOfColumns * columnWidth + 'px',
        },
      }"
      :row-height="40"
      :scrollable="'virtual'"
      :column-virtualization="numberOfColumns > 15"
      :data-items="dataItems"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
    />
  </div>
</template>

<script>
import {
  TreeList,
  mapTreeItem,
  extendDataItem,
} from '@progress/kendo-vue-treelist';
import { generateData } from './treelist-data';
const numberOfColumns = 100;
const columnWidth = 200;
const numberOfRows = 25000;
const subItemsField = 'subItems';
const expandField = 'expanded';
const { columns, data } = generateData(
  numberOfColumns,
  columnWidth,
  numberOfRows,
  subItemsField
);

export default {
  components: {
    TreeList,
  },
  data() {
    return {
      dataItems: [...data],
      expanded: [],
      subItemsField,
      expandField,
      columns,
      numberOfColumns,
      columnWidth,
    };
  },
  methods: {
    onExpandChange(event) {
      const expanded = !event.value;
      const tree = [...this.dataItems];
      mapTreeItem(tree, event.level, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
          [expandField]: expanded,
        })
      );
      this.dataItems = tree;
      this.expanded = event.value
        ? this.expanded.filter((id) => id !== event.dataItem.id)
        : [...this.expanded, event.dataItem.id];
    },
  },
};
</script>
