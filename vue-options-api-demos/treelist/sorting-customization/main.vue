<template>
  <div>
    <div className="example-config">
      <KCheckbox
        id="unsort"
        :checked="allowUnsort"
        :label="'Enable unsorting'"
        @change="allowUnsortChange"
      />
      <br />
      <KCheckbox
        id="multiSort"
        :checked="multiple"
        :label="'Enable multiple columns sorting'"
        @change="multiSortChange"
      />
    </div>
    <TreeList
      :style="{ maxHeight: '510px', overflow: 'auto' }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :sort="sort"
      :sortable="sortableConfig"
      :data-items="processedData"
      @sortchange="handleSortChange"
      :columns="columns"
    />
  </div>
</template>

<script>
import { Checkbox } from '@progress/kendo-vue-inputs';
import employees from './data';
import {
  TreeList,
  orderBy,
  extendDataItem,
  mapTree,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
    KCheckbox: Checkbox,
  },
  data() {
    return {
      allowUnsort: true,
      multiple: true,
      dataItems: [...employees],
      expanded: [1, 2, 32],
      subItemsField: 'employees',
      expandField: 'expanded',
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
          width: '310px',
          expandable: true,
        },
        {
          field: 'position',
          title: 'Position',
          width: '260px',
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          width: '160px',
          format: '{0:d}',
        },
        {
          field: 'timeInPosition',
          title: 'Year(s) in Position',
          width: '160px',
        },
        {
          field: 'fullTime',
          title: 'Full Time',
          width: '150px',
        },
      ],
    };
  },
  computed: {
    processedData() {
      let data = this.dataItems;
      return this.addExpandField(orderBy(data, this.sort, this.subItemsField));
    },
    sortableConfig() {
      return {
        allowUnsort: this.allowUnsort,
        mode: this.multiple ? 'multiple' : 'single',
      };
    },
  },
  methods: {
    allowUnsortChange(e) {
      this.allowUnsort = e.value;
    },
    multiSortChange(e) {
      this.multiple = e.value;
    },
    handleSortChange(event) {
      this.sort = event.sort;
    },
    onExpandChange(e) {
      this.expanded = e.value
        ? this.expanded.filter((id) => id !== e.dataItem.id)
        : [...this.expanded, e.dataItem.id];
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
