<template>
  <div>
<TreeList
      :style="{
        maxHeight: '510px',
        overflow: 'auto',
      }"
      :data-items="processedData"
      :selected-field="selectedField"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      :data-item-key="dataItemKey"
      @selectionchange="onSelectionChange"
      @headerselectionchange="onHeaderSelectionChange"
      @expandchange="onExpandChange"
      :columns="columns"
    />
  </div>
</template>

<script>
import dataItems from "./data";
import {
 TreeList,
 mapTree,
  extendDataItem,
    } from '@progress/kendo-vue-treelist';

const DATA_ITEM_KEY = "id";
const SUB_ITEMS_FIELD = "employees";
const EXPAND_FIELD = "expanded";
const SELECTED_FIELD = "selected";

export default {
    components: {
      TreeList
    },
    data() {
      return {
        expanded: {
          1: true,
          2: true,
          32: true,
        },
        selected:{},
        dataItems,
        dataItemKey: DATA_ITEM_KEY,
        subItemsField: SUB_ITEMS_FIELD,
        expandField: EXPAND_FIELD,
        selectedField: SELECTED_FIELD
      };
    },
    computed: {
      columns() {
        return [
          {
            field: "selected",
            width: "7%",
            headerSelectionValue: this.headerSelectionValue,
          },
          {
            field: "name",
            title: "Name",
            expandable: true,
            width: "31%",
          },
          {
            field: "position",
            title: "Position",
            width: "31%",
          },
          {
            field: "hireDate",
            title: "Hire Date",
            format: "{0:d}",
            width: "31%",
          },
        ];
      },
      headerSelectionValue () {
        let allSelected = true;

        mapTree(this.dataItems, SUB_ITEMS_FIELD, (item) => {
          allSelected = allSelected && this.selected[item[DATA_ITEM_KEY]];
          return item;
        });
        return allSelected;
      },
      processedData () {
        return this.addExpandField(this.dataItems);
      }
    },
    methods: {
      onExpandChange (e){
        this.expanded = {
          ...this.expanded,
          [e.dataItem.id]: !e.value,
        };
      },
      onSelectionChange (e) {
          this.selected = {
            ...this.selected,
            [e.dataItem.id]: e.event.target.checked ? true : undefined,
          };
      },
      onHeaderSelectionChange(event) {
        const checkboxElement = event.event.target;
        const checked = checkboxElement.checked;
        const newSelectedState = {};
        mapTree(this.dataItems, SUB_ITEMS_FIELD, (item) => {
          newSelectedState[item.id] = checked ? true : undefined;
          return item;
        });
        this.selected = newSelectedState;
      },
      addExpandField (dataTree) {
        const expanded = this.expanded;
        const selected = this.selected;
        return mapTree(dataTree, this.subItemsField, (item) =>
          extendDataItem(item, this.subItemsField, {
            [this.expandField]: expanded[item.id],
            [this.selectedField]: selected[item.id],
          })
        );
      }
    }
};

</script>

