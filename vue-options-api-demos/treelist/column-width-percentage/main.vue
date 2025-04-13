<template>
  <div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto', width: '70%' }"
      :table-props="{ style: { width: '900px' } }"
      :navigatable="true"
      :dataItems="processedData"
      :expandField="expandField"
      :subItemsField="subItemsField"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
    >
    </TreeList>
  </div>
</template>

<script>
import employees from './data';
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
          width: '40%',
          expandable: true,
        },
        {
          field: 'position',
          title: 'Position',
          width: '40%',
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          format: '{0:d}',
          width: '20%',
        },
      ],
    };
  },
  computed: {
    processedData() {
      return mapTree(this.dataItems, this.subItemsField, (item) =>
        extendDataItem(item, this.subItemsField, {
          [this.expandField]: this.expanded.includes(item.id),
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
