<template>
  <div>
    <TreeView :dataItems="treeData" />
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
          expanded: true,
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
};
</script>
