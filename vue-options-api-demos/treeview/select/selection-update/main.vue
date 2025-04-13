<template>
  <div>
    <TreeView :dataItems="treeData" @itemclick="onItemChange" />
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
      selectedItem: undefined,
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
    onItemChange(event) {
      if (this.selectedItem) {
        this.selectedItem.selected = false;
      }

      event.item.selected = true;
      this.selectedItem = event.item;
    },
  },
};
</script>
