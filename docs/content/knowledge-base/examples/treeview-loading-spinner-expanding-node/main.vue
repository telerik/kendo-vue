<template>
  <div>
    <h4>Please select a node in the TreeView</h4>
    <span>Currently selected node: </span>
    <b>{{ currentPath }}</b>
    <br />
    <br />
    <br />
    <TreeView
      :data-items="treeDataItems"
      :expand-icons="true"
      @expandchange="onExpandChange"
      aria-multiselectable="true"
      @itemclick="onItemClick"
    >
      <template #item="{ props }">
        <span>
          <span class="k-icon k-i-star" key="0" />
          {{ props.item.text }}
        </span>
      </template>
    </TreeView>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { TreeView, processTreeViewItems } from '@progress/kendo-vue-treeview';

const tree = ref([
    {
        text: 'Furniture',
        items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' },
        ],
    },
    {
        text: 'Decor',
        items: [
            {
                text: 'Bed Linen',
                items: [
                    { text: 'Item 1' },
                    { text: 'Item 2' },
                    { text: 'Item 3' },
                ],
            },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' },
        ],
    },
]);

const expand = ref({ ids: [], idField: 'text' });
const select = ref(['']);
const currentPath = ref('Node is not selected');

const treeDataItems = computed(() =>
    processTreeViewItems(tree.value, {
        select: select.value,
        expand: expand.value,
    })
);

function getParents(indexArray, index, tree) {
    if (tree[indexArray[index]]) {
        currentPath.value +=
      tree[indexArray[index]].text +
      (index + 1 !== indexArray.length ? ' > ' : '');
    }

    if (index < indexArray.length && tree[indexArray[index]].items) {
        getParents(indexArray, index + 1, tree[indexArray[index]].items);
    }
}

function onItemClick(event) {
    currentPath.value = '';
    getParents(
        event.itemHierarchicalIndex.split('_').map(Number),
        0,
        tree.value
    );
    select.value = [event.itemHierarchicalIndex];
}

function onExpandChange(event) {
    const ids = [...expand.value.ids];
    const index = ids.indexOf(event.item.text);
    index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
    expand.value = { ids, idField: 'text' };
}
</script>
