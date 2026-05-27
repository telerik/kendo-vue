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

<script setup>
import { ref } from 'vue';
import { TreeView } from '@progress/kendo-vue-treeview';

const treeData = ref([
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
            { data: { text: 'Bed Linen' }},
            { data: { text: 'Curtains & Blinds' } },
            { data: { text: 'Carpets' } },
        ],
    },
]);

function onExpandChange(event) {
    event.item.opened = !event.item.opened;
}
</script>
