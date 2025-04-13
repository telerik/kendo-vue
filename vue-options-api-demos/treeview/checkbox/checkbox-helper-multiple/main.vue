<template>
  <div>
    <TreeView
      :checkField="checkField"
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
const checkField = 'marked';
export default {
  components: {
    TreeView,
  },
  data() {
    return {
      checkField,
      check: { idField: 'text', operationField: checkField, ids: [] },
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
      const settings = { checkChildren: true, checkParents: true };
      this.check = handleTreeViewCheckChange(
        event,
        this.check,
        this.tree,
        settings
      );
    },
  },
};
</script>
