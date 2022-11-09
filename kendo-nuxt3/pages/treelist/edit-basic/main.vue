<template>
  <div>
  editId :{{editId}}
  <TreeList
      :style="{
        maxHeight: '510px',
        overflow: 'auto',
      }"
      :navigatable="true"
      :dataItems="processedData"
      :editField="editField"
      :expandField="expandField"
      :subItemsField="subItemsField"
      @rowclick="rowClick"
      @itemchange="onItemChange"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
      >
      <template v-slot:toolbar>
          <div @click="closeEdit">
            <KButton
              :title="'Add new'"
              :theme-color="'primary'"
              @click="addRecord"
            >
              Add new
            </KButton>
          </div>
    </template>
    <template v-slot:textEditor={props}>
          <TreeListTextEditor v-bind="props" @change="props.onChange" />
    </template>
    <template v-slot:numericEditor={props}>
          <TreeListNumericEditor v-bind="props" @change="props.onChange" />
    </template>
    <template v-slot:dateEditor={props}>
          <TreeListDateEditor v-bind="props" @change="props.onChange" />
    </template>
    <template v-slot:booleanEditor={props}>
          <TreeListBooleanEditor v-bind="props" @change="props.onChange" />
    </template>
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
  TreeListTextEditor,
  TreeListNumericEditor,
  TreeListDateEditor,
  TreeListBooleanEditor,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
    KButton: Button,
    TreeListTextEditor,
    TreeListNumericEditor,
    TreeListDateEditor,
    TreeListBooleanEditor,
  },
  data() {
    return {
        dataItems: employees.slice(),
        expanded: [1, 2, 32],
        editId: null,
        subItemsField: "employees",
        expandField: "expanded",
        editField: "inEdit",
        columns: [
          {
            field: "name",
            title: "Name",
            width: "280px",
            editor: 'text',
          //  editCell: TreeListTextEditor,
            expandable: true,
          },
          {
            field: "position",
            title: "Position",
            width: "260px",
            editCell: 'textEditor',
          },
          {
            field: "hireDate",
            title: "Hire Date",
            format: "{0:d}",
            width: "170px",
            editCell: 'dateEditor',
          },
          {
            field: "timeInPosition",
            title: "Year(s) in Position",
            width: "170px",
            editCell: 'numericEditor',
          },
          {
            field: "fullTime",
            title: "Full Time",
            width: "160px",
            editCell: 'booleanEditor',
          },
        ]
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
    }
  },
  methods: {
    rowClick (event) {
      this.editId = this.editId === event.dataItem.id ? null : event.dataItem.id;
    },
    onExpandChange (event) {
      this.expanded = event.value
        ? this.expanded.filter((id) => id !== event.dataItem.id)
        : [...this.expanded, event.dataItem.id];
    },
    onItemChange (event) {
      const field = event.field;
      this.dataItems = mapTree(this.dataItems, this.subItemsField, (item) =>
          item.id === event.dataItem.id
            ? extendDataItem(item, this.subItemsField, {
                [field]: event.value,
              })
            : item
        );
    },
    closeEdit (event) {
        if (event.target === event.currentTarget) {
          this.editId = null;
        }
    },
    addRecord () {
      const newRecord = {
        id: new Date().getTime(),
      };
      this.dataItems = [newRecord, ...this.dataItems];
      this.editId =  newRecord.id;
    }
  },
};
</script>
