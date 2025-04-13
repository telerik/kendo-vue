<template>
  <div>
    <TreeView
      :dataItems="treeDataItems"
      :expandIcons="true"
      @expandchange="onExpandChange"
      @itemclick="onItemClick"
    />
  </div>
</template>

<script>
import { TreeView, processTreeViewItems } from '@progress/kendo-vue-treeview';

export default {
  components: {
    TreeView,
  },
  data() {
    return {
      tree: [
        {
          text: 'Item1',
          items: [
            { text: 'Item1.1' },
            { text: 'Item1.2', items: [{ text: 'Item1.2.1' }] },
          ],
        },
        {
          text: 'Item2',
          disabled: true,
          items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
          ],
        },
        {
          text: 'Item3',
        },
      ],
      select: [],
      expand: {
        ids: ['Item2'],
        idField: 'text',
      },
    };
  },
  computed: {
    treeDataItems() {
      return processTreeViewItems(this.tree, {
        expand: this.expand,
        select: this.select,
      });
    },
  },
  methods: {
    onExpandChange(event) {
      let ids = this.expand.ids.slice();
      const index = ids.indexOf(event.item.text);
      index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
      this.expand = {
        ids,
        idField: 'text',
      };
    },
    onItemClick(event) {
      this.select = [event.itemHierarchicalIndex];
    },
  },
};
</script>
