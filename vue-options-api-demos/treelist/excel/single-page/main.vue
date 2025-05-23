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
    @expandchange="onExpandChange"
    @pagechange="onPageChange"
    :skip="skip"
    :take="take"
    :pageable="true"
    :toolbar="'toolbar'"
  >
    <template v-slot:toolbar>
      <KButton :theme-color="'primary'" @click="exportExcel"
        >Export Excel</KButton
      >
    </template>
  </TreeList>
</template>

<script>
import employees from './data';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button } from '@progress/kendo-vue-buttons';
import {
  TreeList,
  treeToFlat,
  mapTree,
  extendDataItem,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
    KButton: Button,
  },
  data() {
    return {
      employees,
      subItemsField: 'employees',
      expandField: 'expanded',
      expanded: [1, 2, 32],
      skip: 0,
      take: 8,
      columns: [
        {
          field: 'name',
          title: 'Name',
          width: '250px',
          expandable: true,
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          width: '200px',
          format: '{0:d}',
        },
        {
          field: 'timeInPosition',
          title: 'Year(s) in Position',
          width: '200px',
        },
        {
          field: 'fullTime',
          title: 'Full Time',
          width: '100px',
        },
      ],
    };
  },
  computed: {
    processedData() {
      let data = this.employees;
      return this.addExpandField(data);
    },
  },
  methods: {
    onPageChange(event) {
      const { skip, take } = event;
      this.skip = skip;
      this.take = take;
    },
    exportExcel() {
      saveExcel({
        fileName: 'myFile',
        data: treeToFlat(
          this.processedData,
          this.expandField,
          this.subItemsField
        ).slice(this.skip, this.skip + this.take),
        columns: this.columns,
        hierarchy: true,
      });
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
