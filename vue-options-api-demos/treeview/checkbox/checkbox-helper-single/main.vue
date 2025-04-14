<template>
  <div>
    <TreeView
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

export default {
  components: {
    TreeView,
  },
  data() {
    return {
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
            { text: 'Carpets' },
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
        singleMode: true,
      });
    },
  },
};
</script>
