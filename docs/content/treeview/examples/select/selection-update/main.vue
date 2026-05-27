<template>
  <div>
    <TreeView :dataItems="treeData" @itemclick="onItemChange" />
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

const selectedItem = ref();

function onItemChange(event) {
    if (selectedItem.value) {
        selectedItem.value.selected = false;
    }
    event.item.selected = true;
    selectedItem.value = event.item;
}
</script>
