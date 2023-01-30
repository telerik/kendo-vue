<template>
  <div>
    <TreeView
      :animate="animate"
      :dataItems="treeDataItems"
      :expandIcons="true"
      @expandchange="onExpandChange"
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
            { text: 'Item1.2', items: [{ text: 'Item1.2.1', items: [{ text: 'Item1.2.1.1', items: [{ text: 'Item1.2.1.1.1' }] }] }] },
          ],
        },
        {
          text: 'Item2',
          items: [
            {
              text: 'Item2.1',
              items: [{ text: 'Item2.1.1' }],
            },
            {
              text: 'Item2.2',
              items: [{ text: 'Item2.2.1' }],
            },
            {
              text: 'Item2.3',
              items: [{ text: 'Item2.3.1' }],
            },
          ],
        },
        {
          text: 'Item3',
        },
        {
          text: 'Item4',
          items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
          ],
        },
        {
          text: 'Item5',
          items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
          ],
        },
        {
          text: 'Item6',
          items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
          ],
        },
        {
          text: 'Item7',
          items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
          ],
        },
      ],
      expand: {
        ids: ['Item1', 'Item1.2', 'Item2', 'Item2.3', 'Item1.2.1', 'Item1.2.1.1'],
        idField: 'text',
      },
      animate: true,
    };
  },
  computed: {
    treeDataItems() {
      return processTreeViewItems(this.tree, {
        expand: this.expand,
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
  },
};
</script>
