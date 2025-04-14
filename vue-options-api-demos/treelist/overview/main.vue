<template>
  <TreeList
    :style="{
      maxHeight: '510px',
      overflow: 'auto',
    }"
    :expand-field="expandField"
    :sub-items-field="subItemsField"
    :data-items="processedData"
    :columns="columns"
    :filter="filter"
    :filterable="true"
    :sort="sort"
    :sortable="true"
    @datastatechange="handleDataStateChange"
    @expandchange="onExpandChange"
  />
</template>

<script>
import employees from './data';
import {
  TreeList,
  filterBy,
  orderBy,
  mapTree,
  extendDataItem,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
  },
  data() {
    return {
      employees,
      subItemsField: 'employees',
      expandField: 'expanded',
      expanded: [1, 2, 32],
      filter: [],
      sort: [
        {
          field: 'name',
          dir: 'asc',
        },
      ],
      columns: [
        {
          field: 'name',
          title: 'Name',
          width: '250px',
          filter: 'text',
          expandable: true,
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          width: '200px',
          format: '{0:d}',
          filter: 'date',
        },
        {
          field: 'timeInPosition',
          title: 'Year(s) in Position',
          width: '200px',
          filter: 'numeric',
        },
        {
          field: 'fullTime',
          title: 'Full Time',
          width: '100px',
          filter: 'boolean',
        },
      ],
    };
  },
  computed: {
    processedData() {
      let data = this.employees;
      let filteredData = filterBy(data, this.filter, this.subItemsField);
      let sortedData = orderBy(filteredData, this.sort, this.subItemsField);
      return this.addExpandField(sortedData);
    },
  },
  methods: {
    onExpandChange(e) {
      this.expanded = e.value
        ? this.expanded.filter((id) => id !== e.dataItem.id)
        : [...this.expanded, e.dataItem.id];
    },
    createAppState: function (dataState) {
      this.sort = dataState.sort;
      this.filter = dataState.filter;
    },
    handleDataStateChange: function (event) {
      this.createAppState(event.data);
    },
    addExpandField(dataTree) {
      const expanded = this.expanded;
      return mapTree(dataTree, this.subItemsField, (item) =>
        extendDataItem(item, this.subItemsField, {
          [this.expandField]: expanded.includes(item.id),
        })
      );
    },
  },
};
</script>
