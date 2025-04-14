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
    :toolbar="'toolbar'"
  >
    <template v-slot:toolbar>
      <div>
        <span
          >Choose a file name:
          <DropDownList
            :data-items="fileNames"
            :value="fileName"
            :style="{
              'margin-right': '20px',
            }"
            @change="onFileNameChange"
          >
          </DropDownList>

          <KButton :theme-color="'primary'" @click="exportExcel"
            >Export Excel</KButton
          >
        </span>
      </div>
    </template>
  </TreeList>
</template>

<script>
import employees from './data';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
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
    DropDownList,
  },
  data() {
    return {
      fileName: 'MyFile',
      fileNames: ['MyFile', 'EmployeeData', 'TestData'],
      employees,
      subItemsField: 'employees',
      expandField: 'expanded',
      expanded: [1, 2, 32],
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
    onFileNameChange(e) {
      this.fileName = e.value;
    },
    exportExcel() {
      saveExcel({
        fileName: this.fileName,
        data: treeToFlat(
          this.processedData,
          this.expandField,
          this.subItemsField
        ),
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
