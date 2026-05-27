<template>
  <div>
    <div class="example-config">
      <button @click="selectAll" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
        Select all
      </button>
      <button @click="unselectAll" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
        Deselect all
      </button>
    </div>
    <TreeView :dataItems="dataItems" @itemclick="onItemClick" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { TreeView, processTreeViewItems } from '@progress/kendo-vue-treeview';

const tree = ref([
    {
        text: 'Item1',
        expanded: true,
        items: [
            { text: 'Item1.1' },
            { text: 'Item1.2' },
        ],
    },
    {
        text: 'Item2',
        expanded: true,
        items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
        ],
    },
    {
        text: 'Item3',
        expanded: true,
        items: [
            { text: 'Item3.1' },
            { text: 'Item3.2' },
        ],
    },
]);

const select = ref([]);

const dataItems = computed(() =>
    processTreeViewItems(tree.value, {
        select: select.value,
    })
);

function selectAll() {
    select.value = ['0', '0_0', '0_1', '1', '1_0', '1_1', '2', '2_0', '2_1'];
}

function unselectAll() {
    select.value = [];
}

function onItemClick(event) {
    const selected = [...select.value];
    const index = selected.indexOf(event.itemHierarchicalIndex);
    index === -1 ? selected.push(event.itemHierarchicalIndex) : selected.splice(index, 1);
    select.value = selected;
}
</script>

