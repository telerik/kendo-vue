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
      @itemchange="onItemChange"
      @expandchange="onExpandChange"
      :columns="columns"
      :toolbar="'toolbar'"
      >
      <template v-slot:toolbar>
            <KButton
              :title="'Add new'"
              :theme-color="'primary'"
              @click="addRecord"
            >
              Add new
            </KButton>
    </template>
    <template v-slot:commandCell="{props}">
          <CommandCell :data-item="props.dataItem" 
                  :editField="editField"
                  @edit="enterEdit"
                  @save="save" 
                  @remove="remove"
                  @cancel="cancel"
                  @addchild="addChild"/>
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
import CommandCell from './CommandCell.vue';
import {
  TreeList,
  mapTree,
  extendDataItem,
  modifySubItems,
  removeItems,
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
    CommandCell
  },
  data() {
    return {
      dataItems: employees.slice(),
      expanded: [1, 2, 32],
      inEdit: [],
      subItemsField: 'employees',
      expandField: 'expanded',
      editField: 'inEdit',
      columns: [
        {
          field: "name",
          title: "Name",
          width: "280px",
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
          field: "fullTime",
          title: "Full Time",
          width: "160px",
          editCell: 'booleanEditor',
        },
        {
          cell: 'commandCell',
          width: "360px",
        },
      ]
    };
  },
  computed: {
    processedData() {
      return mapTree(this.dataItems, this.subItemsField, (item) =>
        extendDataItem(item, this.subItemsField, {
          [this.expandField]: this.expanded.includes(item.id),
          [this.editField]: Boolean(this.inEdit.find((i) => i.id === item.id)),
        })
      )
    }
  },
  methods: {
    addChild (dataItem) {
      const newRecord = this.createNewItem();
      this.inEdit = [...this.inEdit, newRecord];
      this.expanded = [...this.expanded, dataItem.id];
      this.dataItems = modifySubItems(
          this.dataItems,
          this.subItemsField,
          (item) => item.id === dataItem.id,
          (subItems) => [newRecord, ...subItems]
        );
    },
    enterEdit (dataItem) {
      this.inEdit = [...this.inEdit, extendDataItem(dataItem, this.subItemsField)];
    },
    save (dataItem) {
      const { isNew, inEdit, ...itemToSave } = dataItem;
      
      this.dataItems = mapTree(this.dataItems, this.subItemsField, (item) =>
          item.id === itemToSave.id ? itemToSave : item
        );
      this.inEdit = this.inEdit.filter((i) => i.id !== itemToSave.id);
    },
    cancel (editedItem) {
      if (editedItem.isNew) {
        return this.remove(editedItem);
      }

      this.dataItems = mapTree(this.dataItems, this.subItemsField, (item) =>
          item.id === editedItem.id ? this.inEdit.find((i) => i.id === item.id) : item
        );
      this.inEdit = this.inEdit.filter((i) => i.id !== editedItem.id);
    },
    remove (dataItem) {
        this.dataItems = removeItems(this.dataItems, this.subItemsField, (i) => i.id === dataItem.id);
        this.inEdit = this.inEdit.filter((i) => i.id !== dataItem.id);
    },
    onExpandChange (e) {
      this.expanded = e.value
          ? this.expanded.filter((id) => id !== e.dataItem.id)
          : [...this.expanded, e.dataItem.id];
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
    addRecord () {
      const newRecord = this.createNewItem();
      
      this.dataItems = [newRecord, ...this.dataItems];
      this.inEdit = [...this.inEdit, { ...newRecord }];
    },
    createNewItem ()  {
      const timestamp = new Date().getTime();
      return {
        id: timestamp,
        isNew: true,
      };
    }
  },
};
</script>
