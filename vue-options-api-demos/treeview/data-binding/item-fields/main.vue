<template>
  <div>
    <TreeView
      :dataItems="treeData"
      :text-field="'data.text'"
      :expand-icons="true"
      :expand-field="'opened'"
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
          data: { text: 'Furniture' },
          opened: true,
          items: [
            { data: { text: 'Tables & Chairs' } },
            { data: { text: 'Sofas' } },
            { data: { text: 'Occasional Furniture' } },
          ],
        },
        {
          data: { text: 'Decor' },
          opened: true,
          items: [
            { data: { text: 'Bed Linen' } },
            { data: { text: 'Curtains & Blinds' } },
            { data: { text: 'Carpets' } },
          ],
        },
      ],
    };
  },
  methods: {
    onExpandChange(event) {
      event.item.opened = !event.item.opened;
    },
  },
};
</script>
