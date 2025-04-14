<template>
  <div>
      <MultiSelectTree
        :style="{ width: '300px' }"
        :key="0"
        :dataItems="treeData"
        :value="value"
        @change="onChange"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :checkField="checkField"
        :checkIndeterminateField="checkIndeterminateField"
        :subItemsField="subItemsField"
        :expandField="expandField"
        @expandchange="onExpandChange"
        :header="'header'"
        :footer="'footer'"
      >
      <template v-slot:header>
        <span>
         SomeHeader
        </span>
      </template>
      <template v-slot:footer>
        <span>
         SomeFooter
        </span>
      </template>
    </MultiSelectTree>
    </div>
</template>
<script>
import {
  MultiSelectTree,
  getMultiSelectTreeValue,
} from "@progress/kendo-vue-dropdowns";
import {
  processMultiSelectTreeData,
  expandedState,
} from "./multiselecttree-data-operations";
import { data } from "./tree-data";
const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);

const dataItemKey = "id";
const checkField = "checkField";
const checkIndeterminateField = "checkIndeterminateField";
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";

const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
};

export default {
  components: {
    MultiSelectTree
  },
  data: function () {
    return {
      textField,
      dataItemKey,
      checkField,
      checkIndeterminateField,
      subItemsField,
      expandField,
      dataItems: data,
      value: [],
      expanded: [data[0][dataItemKey]]
    };
  },
  computed: {
    treeData () {
      return  processMultiSelectTreeData(this.dataItems, { expanded: this.expanded, value: this.value, ...fields })
    }
  },
  methods: {
    iconClassName({ text, items }) {
      console.log(text, items)
      if (items !== undefined) {
        return 'k-icon k-i-folder';
      } else if (is(text, 'pdf')) {
        return 'k-icon k-i-file-pdf';
      } else if (is(text, 'html')) {
        return 'k-icon k-i-html';
      } else if (is(text, 'jpg|png')) {
        return 'k-icon k-i-image';
      } else {
        return '';
      }
    },
    onChange (event) {
      this.value = (getMultiSelectTreeValue(this.dataItems, { ...fields, ...event, value: this.value }));
    },
    onExpandChange (event) {
        this.expanded = (expandedState(event.item, dataItemKey, this.expanded))
    }
  }
};
</script>
