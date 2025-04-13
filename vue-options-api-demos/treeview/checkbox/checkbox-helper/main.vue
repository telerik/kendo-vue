<template>
  <div>
    <div className="example-config">
      <h5>Check Settings</h5>
      <kcheckbox
        :value="singleMode"
        :label="'Single Mode'"
        @change="onSingleModeChange"
      />
      &nbsp
      <kcheckbox
        :value="checkChildren"
        :label="'Check All Children'"
        @change="onCheckAllChildrenChange"
      />
      &nbsp
      <kcheckbox
        :value="checkAllParents"
        :label="'Check all parents when children are checked'"
        @change="onCheckAllParentsChange"
      />
    </div>
    <TreeView
      :animate="false"
      :checkIndeterminateField="checkIndeterminateField"
      :checkboxes="true"
      @checkchange="onCheckChange"
      :dataItems="dataItems"
    />
    <div :style="{ marginTop: '5px' }">
      <i>Press SPACE to check/uncheck the active item</i>
      <div class="example-config">Checked IDs: {{ check.ids.join(',') }}</div>
    </div>
  </div>
</template>

<script>
import {
  TreeView,
  processTreeViewItems,
  handleTreeViewCheckChange,
} from '@progress/kendo-vue-treeview';

import { Checkbox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    TreeView,
    kcheckbox: Checkbox,
  },
  data() {
    return {
      singleMode: false,
      checkChildren: false,
      checkAllParents: false,
      checkIndeterminateField: 'checkUnknown',
      check: {
        idField: 'text',
        applyCheckIndeterminate: true,
        checkIndeterminateField: 'checkUnknown',
        ids: [],
      },
      tree: [
        {
          text: 'Furniture',
          expanded: true,
          items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' },
          ],
        },
        {
          text: 'Decor',
          expanded: true,
          items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            {
              text: 'Carpets',
              expanded: true,
              items: [{ text: 'Yellow' }, { text: 'Blue' }, { text: 'Red' }],
            },
          ],
        },
      ],
    };
  },
  computed: {
    dataItems() {
      return processTreeViewItems(this.tree, { check: this.check });
    },
  },
  methods: {
    onCheckChange(event) {
      this.check = handleTreeViewCheckChange(event, this.check, this.tree, {
        singleMode: this.singleMode,
        checkChildren: this.checkChildren,
        checkParents: this.checkAllParents,
      });
    },
    onSingleModeChange() {
      this.singleMode = !this.singleMode;
    },
    onCheckAllChildrenChange() {
      this.checkChildren = !this.checkChildren;
    },
    onCheckAllParentsChange() {
      this.checkAllParents = !this.checkAllParents;
    },
  },
};
</script>
