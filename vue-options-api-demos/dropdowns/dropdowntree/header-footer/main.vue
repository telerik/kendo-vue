<template>
  <div>
      <DropDownTree
        :style="{ width: '300px' }"
        :key="0"
        :dataItems="treeData"
        :value="value"
        @change="onChange"
        :placeholder="'Please select ...'"
        :textField="textField"
        :dataItemKey="dataItemKey"
        :selectField="selectField"
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
    </DropDownTree>
    </div>
</template>
<script>
import {
  DropDownTree
} from "@progress/kendo-vue-dropdowns";
import { processTreeData, expandedState } from "./tree-data-operations";
import { data } from "./tree-data";
const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);

const dataItemKey = "id";
const selectField = "selected";
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";

const fields = {
  dataItemKey,
  selectField,
  expandField,
  subItemsField,
};

export default {
  components: {
    DropDownTree
  },
  data: function () {
    return {
      textField,
      dataItemKey,
      selectField,
      subItemsField,
      expandField,
      dataItems: data,
      value: null,
      expanded: [data[0][dataItemKey]]
    };
  },
  computed: {
   treeData () {
      return processTreeData(this.dataItems, { expanded: this.expanded, value: this.value }, fields);
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
      this.value = event.value;
    },
    onExpandChange (event) {
        this.expanded = (expandedState(event.item, dataItemKey, this.expanded))
    }
  }
};
</script>
