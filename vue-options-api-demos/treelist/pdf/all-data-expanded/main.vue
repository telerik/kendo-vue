<template>
  <div>
    <pdfexport ref="treeListPdfExport">
      <TreeList
        :style="{
          maxHeight: '510px',
          overflow: 'auto',
        }"
        :expand-field="expandField"
        :sub-items-field="subItemsField"
        @expandchange="onExpandChange"
        :filter="filter"
        :filterable="filterable"
        :data-items="processedData"
        @filterchange="handleFilterChange"
        :columns="columns"
        :toolbar="'toolbar'"
      >
        <template v-slot:toolbar>
          <div>
            <KButton @click="exportPDFWithComp"
              >Export All TreeList Data To PDF</KButton
            >
          </div>
        </template>
      </TreeList>
    </pdfexport>
  </div>
</template>

<script>
import { TreeListPDFExport } from '@progress/kendo-vue-pdf';
import { Button } from '@progress/kendo-vue-buttons';
import employees from './data';
import {
  TreeList,
  filterBy,
  extendDataItem,
  mapTree,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
    pdfexport: TreeListPDFExport,
    KButton: Button,
  },
  data() {
    return {
      dataItems: [...employees],
      filter: [],
      filterable: true,
      expanded: [1, 2, 32],
      subItemsField: 'employees',
      expandField: 'expanded',
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
        },
        {
          field: 'timeInPosition',
          title: 'Year(s) in Position',
          width: '280px',
          filter: 'numeric',
        },
        {
          field: 'fullTime',
          title: 'Full Time',
          width: '190px',
          filter: 'boolean',
        },
      ],
    };
  },
  computed: {
    processedData() {
      let data = this.dataItems;

      let filteredData = filterBy(data, this.filter, this.subItemsField);
      return this.addExpandField(filteredData);
    },
  },
  methods: {
    exportPDFWithComp: function () {
      this.filterable = false;

      let allDataExpanded = mapTree(
        this.dataItems,
        this.subItemsField,
        (item) =>
          extendDataItem(item, this.subItemsField, {
            [this.expandField]: true,
          })
      );
      this.$refs.treeListPdfExport.save(allDataExpanded);
    },
    exportFinished() {
      this.filterable = true;
    },
    onExpandChange(e) {
      this.expanded = e.value
        ? this.expanded.filter((id) => id !== e.dataItem.id)
        : [...this.expanded, e.dataItem.id];
    },
    handleFilterChange(event) {
      this.filter = event.filter;
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
