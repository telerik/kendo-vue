<template>
  <div>
    <TreeView :dataItems="tree" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TreeView } from '@progress/kendo-vue-treeview';

const tree = ref([
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
]);
</script>
