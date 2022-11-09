<template>
  <div>
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
      @rowmousedown="handleRowMousedown"
      @rowfocus="handleRowFocus"
      @rowblur="handleRowBlur"
      @cellclick="handleCellClick"
      @itemchange="itemChange"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
      >
      <template v-slot:toolbar>
        <div>
          <KButton
            :title="'Save Changes'"
            @click="saveChanges"
            :disabled="!changes"
          >
            Save Changes
          </KButton>
          <KButton
            :title="'Cancel Changes'"
            @click="cancelChanges"
            :disabled="!changes"
          >
            Cancel Changes
          </KButton>
        </div>
    </template>
    <template v-slot:textEditor={props}>
          <TreeListTextEditor v-bind="props" :focusInputOnMount="true" @change="props.onChange" />
    </template>
    <template v-slot:numericEditor={props}>
          <TreeListNumericEditor v-bind="props" :focusInputOnMount="true" @change="props.onChange" />
    </template>
    <template v-slot:dateEditor={props}>
          <TreeListDateEditor v-bind="props" :focusInputOnMount="true" @change="props.onChange" />
    </template>
    <template v-slot:booleanEditor={props}>
          <TreeListBooleanEditor v-bind="props" :focusInputOnMount="true" @change="props.onChange" />
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
        editItem: undefined,
        editItemField: undefined,
        changes: false,
        subItemsField: "employees",
        expandField: "expanded",
        editField: "inEdit",
        initColumns: [
          {
            field: "name",
            title: "Name",
            width: "280px",
            editor: 'text',
            editCell: 'textEditor',
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
    editItemId() {
      return this.editItem ? this.editItem.id : null;
    },
    columns() {
      return this.initColumns.map((column) => ({
        ...column,
        editCell: this.editItemField === column.field ? column.editCell : undefined,
      }))
    },
    processedData() {
      return mapTree(this.dataItems, this.subItemsField, (item) =>
        extendDataItem(item, this.subItemsField, {
          [this.expandField]: this.expanded.includes(item.id),
          [this.editField]: item.id === this.editItemId ? this.editItemField : undefined,
        })
      )
    }
  },
  methods: {
    handleRowMousedown() {
      this.preventExit = true;
        clearTimeout(this.preventExitTimeout);
        this.preventExitTimeout = setTimeout(() => {
          this.preventExit = undefined;
        });
    },
    handleRowBlur() {
        clearTimeout(this.blurTimeout);

        if (!this.preventExit) {
          this.blurTimeout = setTimeout(() => {
            this.exitEdit();
          });
        }
      },
    handleRowFocus() {
      clearTimeout(this.blurTimeout);
    },
    handleCellClick(event) {
      const targetClasses = event.event.target.classList;

      if (
        targetClasses &&
        (targetClasses.contains("k-i-caret-alt-right") ||
          targetClasses.contains("k-i-caret-alt-down"))
      ) {
        return;
      }

      this.enterEdit(event.dataItem, event.field);
    },
    enterEdit (dataItem, field) {
      this.editItem = { ...dataItem };
      this.editItemField = field;
    },
    exitEdit () {
      this.editItem = undefined;
      this.editItemField = undefined;
    },
    onExpandChange (event) {
      this.expanded = event.value
        ? this.expanded.filter((id) => id !== event.dataItem.id)
        : [...this.expanded, event.dataItem.id];
    },
    saveChanges () {
      employees.splice(0, employees.length, ...this.dataItems);
      this.editItem = undefined;
      this.editItemField = undefined;
      this.changes = false;
    },
    cancelChanges () {
      this.dataItems = [...employees];
      this.editItem = undefined;
      this.editItemField = undefined;
      this.changes = false;
    },
    itemChange (event) {
      const field = event.field;
      
      this.changes = true;
      this.dataItems = mapTree(this.dataItems, this.subItemsField, (item) =>
          event.dataItem.id === item.id
            ? extendDataItem(item, this.subItemsField, {
                [field]: event.value,
              })
            : item
        );
    }
  },
};
</script>
