<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto', width: '820px' }"
      :table-props="{ style: { width: '800px' } }"
      :navigatable="true"
      :dataItems="processedData"
      :expandField="expandField"
      :subItemsField="subItemsField"
      @rowclick="rowClick"
      @itemchange="onItemChange"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
    >
    </TreeList>
  </div>
</template>

<script>
import employees from './data';
import { Button } from '@progress/kendo-vue-buttons';
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
      dataItems: employees.slice(),
      expanded: [1, 2, 32],
      subItemsField: 'employees',
      expandField: 'expanded',
      columns: [
        {
          field: 'name',
          title: 'Name',
          width: '300px',
          expandable: true,
        },
        {
          field: 'position',
          title: 'Position',
          width: '300px',
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          format: '{0:d}',
          width: '200px',
        },
      ],
    };
  },
  computed: {
    processedData() {
      return mapTree(this.dataItems, this.subItemsField, (item) =>
        extendDataItem(item, this.subItemsField, {
          [this.expandField]: this.expanded.includes(item.id),
          [this.editField]: item.id === this.editId,
        })
      );
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
