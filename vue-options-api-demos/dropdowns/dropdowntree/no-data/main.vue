<template>
  <div>
    <DropDownTree
      :style="{ width: '300px' }"
      :listNoData="'listNoData'"
      :textField="textField"
      :dataItemKey="dataItemKey"
    >
      <template v-slot:listNoData>
        <div class="k-nodata">
          <div>
            <h4 :style="{ fontSize: '1em' }">
              <span class="k-icon k-i-warning" :style="{ fontSize: '2.5em' }" />
              <br />
              <br />
              <p>No Data</p>
            </h4>
          </div>
        </div>
      </template>
    </DropDownTree>
  </div>
</template>
<script>
import { DropDownTree } from '@progress/kendo-vue-dropdowns';
import { processTreeData, expandedState } from './tree-data-operations';
const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);

const dataItemKey = 'id';
const selectField = 'selected';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
  dataItemKey,
  selectField,
  expandField,
  subItemsField,
};

export default {
  components: {
    DropDownTree,
  },
  data: function () {
    return {
      textField,
      dataItemKey,
      selectField,
      subItemsField,
      expandField,
      dataItems: [],
      value: null,
      expanded: [],
    };
  },
  computed: {
    treeData() {
      return processTreeData(
        this.dataItems,
        { expanded: this.expanded, value: this.value },
        fields
      );
    },
  },
  methods: {
    iconClassName({ text, items }) {
      console.log(text, items);
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
    onExpandChange(event) {
      this.expanded = expandedState(event.item, dataItemKey, this.expanded);
    },
  },
};
</script>
