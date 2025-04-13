<template>
  <div>
    <TreeView
      :animate="false"
      :dataItems="treeDataItems"
      :expandIcons="true"
      :children-field="'subCategories'"
      :text-field="'title'"
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
          id: 1,
          title: 'TreeView Item 1',
          subCategories: [
            {
              id: 2,
              title: 'TreeView Item 2',
              subCategories: [
                {
                  id: 4,
                  title: 'TreeView Item 2.1',
                },
                {
                  id: 5,
                  title: 'TreeView Item 2.2',
                },
                {
                  id: 6,
                  title: 'TreeView Item 2.3',
                },
                {
                  id: 7,
                  title: 'TreeView Item 2.4',
                },
                {
                  id: 8,
                  title: 'TreeView Item 2.5',
                },
              ],
            },
            {
              id: 3,
              title: 'TreeView Item 3',
              subCategories: [
                {
                  id: 9,
                  title: 'TreeView Item 3.1',
                },
                {
                  id: 10,
                  title: 'TreeView Item 3.2',
                },
                {
                  id: 11,
                  title: 'TreeView Item 3.3',
                },
              ],
            },
          ],
        },
      ],
      expand: {
        ids: ['TreeView Item 2'],
        idField: 'title',
      },
    };
  },
  computed: {
    treeDataItems() {
      return processTreeViewItems(this.tree, {
        expand: this.expand,
        childrenField: 'subCategories',
      });
    },
  },
  methods: {
    onExpandChange(event) {
      let ids = this.expand.ids.slice();
      const index = ids.indexOf(event.item.title);
      index === -1 ? ids.push(event.item.title) : ids.splice(index, 1);
      this.expand = {
        ids,
        idField: 'title',
      };
    },
  },
};
</script>
