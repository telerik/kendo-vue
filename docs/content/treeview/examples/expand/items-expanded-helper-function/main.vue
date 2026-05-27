<template>
  <div>
    <TreeView
      :dataItems="treeDataItems"
      :expandIcons="true"
      @expandchange="onExpandChange"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { TreeView, processTreeViewItems } from '@progress/kendo-vue-treeview';

const tree = ref([
    {
        text: 'Item1',
        items: [
            { text: 'Item1.1' },
            { text: 'Item1.2', items: [{ text: 'Item1.2.1' }] },
        ],
    },
    {
        text: 'Item2',
        disabled: true,
        items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
        ],
    },
    {
        text: 'Item3',
    },
]);

const expand = ref({
    ids: ['Item2'],
    idField: 'text',
});

const treeDataItems = computed(() =>
    processTreeViewItems(tree.value, {
        expand: expand.value,
    })
);

function onExpandChange(event) {
    const ids = [...expand.value.ids];
    const index = ids.indexOf(event.item.text);
    index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
    expand.value = {
        ids,
        idField: 'text',
    };
}
</script>
