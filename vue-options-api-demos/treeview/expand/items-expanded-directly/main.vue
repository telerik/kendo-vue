<template>
  <div>
    <TreeView
      :dataItems="treeData"
      :expand-icons="true"
      @expandchange="onExpandChange"
    />
  </div>
</template>

<script>
import { TreeView } from '@progress/kendo-vue-treeview';

export default {
  components: {
    TreeView,
  },
  data() {
    return {
      treeData: [
        {
          text: 'Furniture',
          expanded: true,
          items: [
            {
              text: 'Tables & Chairs',
            },
            {
              text: 'Sofas',
            },
            {
              text: 'Occasional Furniture',
            },
          ],
        },
        {
          text: 'Decor',
          items: [
            {
              text: 'Bed Linen',
            },
            {
              text: 'Curtains & Blinds',
            },
            {
              text: 'Carpets',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onExpandChange(event) {
      event.item.expanded = !event.item.expanded;
    },
  },
};
</script>
