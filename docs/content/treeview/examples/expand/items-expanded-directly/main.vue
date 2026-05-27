<template>
  <div>
    <TreeView
      :dataItems="treeData"
      :expand-icons="true"
      @expandchange="onExpandChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TreeView } from '@progress/kendo-vue-treeview';

const treeData = ref([
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
        items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' },
        ],
    },
]);

function onExpandChange(event) {
    event.item.expanded = !event.item.expanded;
}
</script>
