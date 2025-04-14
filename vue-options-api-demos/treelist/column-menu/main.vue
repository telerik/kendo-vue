<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :data-items="tree"
      :expand-field="expandField"
      :columnMenuFilter="filter"
      @columnmenufilterchange="handleFilterChange"
      @sortchange="onSortChange"
      :sort="sort"
      :filter="filter"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
      :column-menu="true"
    />
  </div>
</template>

<script>
import employees from './data';
import {
  TreeList,
  filterBy,
  orderBy,
  extendDataItem,
  mapTree,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
  },
  data() {
    return {
      dataItems: [...employees],
      subItemsField: 'employees',
      expandField: 'expanded',
      filter: [],
      sort: [],
      expanded: [1, 2, 32],
      columns: [
        {
          field: 'name',
          title: 'Name',
          width: '320px',
          expandable: true,
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          width: '280px',
          format: '{0:d}',
          filter: 'date',
          columnMenu: true,
        },
        {
          field: 'timeInPosition',
          title: 'Year(s) in Position',
          width: '280px',
          filter: 'numeric',
          columnMenu: true,
        },
        {
          field: 'fullTime',
          title: 'Full Time',
          width: '190px',
          filter: 'boolean',
          columnMenu: true,
        },
      ],
    };
  },
  computed: {
    tree() {
      return mapTree(this.processedData, this.subItemsField, (item) =>
        extendDataItem(item, this.subItemsField, {
          [this.expandField]: this.expanded.includes(item.id),
        })
      );
    },
    processedData() {
      const dataTree = orderBy(
        filterBy(this.dataItems, this.filter, this.subItemsField),
        this.sort,
        this.subItemsField
      );
      return dataTree;
    },
    treeListStyles() {
      return {
        maxHeight: '510px',
        overflow: 'auto',
      };
    },
  },
  methods: {
    onExpandChange(event) {
      this.expanded = event.value
        ? this.expanded.filter((id) => id !== event.dataItem.id)
        : [...this.expanded, event.dataItem.id];
    },
    onSortChange(event) {
      this.sort = event.sort;
    },
    handleFilterChange(event) {
      this.filter = event.filter;
    },
  },
};
</script>
