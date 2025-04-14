<template>
  <div>
    <TreeList
      @pagechange="onPageChange"
      :skip="skip"
      :take="take"
      :pageable="true"
      :data-items="dataItems"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
    />
  </div>
</template>

<script>
import { generateData } from './treelist-data';
import {
  TreeList,
  mapTreeItem,
  extendDataItem,
} from '@progress/kendo-vue-treelist';

const numberOfColumns = 4;
const columnWidth = 200;
const numberOfRows = 5000;
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
      skip: 0,
      take: 8,
      columns,
      expandField,
      subItemsField,
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
      (this.dataItems = tree),
        (this.expanded = event.value
          ? this.expanded.filter((id) => id !== event.dataItem.id)
          : [...this.expanded, event.dataItem.id]);
    },
    onPageChange(event) {
      const { skip, take } = event;
      this.skip = skip;
      this.take = take;
    },
  },
};
</script>
