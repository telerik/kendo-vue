<template>
  <div>
    <TreeView
      :draggable="true"
      @itemdragover="onItemDragOver"
      @itemdragend="onItemDragEnd"
      :dataItems="dataItems"
      :expandIcons="true"
      @expandchange="onExpandChange"
      @itemclick="onItemClick"
    />
    <TreeViewDragClue ref="dragClue" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    TreeView,
    TreeViewDragClue,
    processTreeViewItems,
    moveTreeViewItem,
    TreeViewDragAnalyzer,
} from '@progress/kendo-vue-treeview';
import {
    plusIcon,
    insertTopIcon,
    insertMiddleIcon,
    insertBottomIcon,
    cancelIcon,
} from '@progress/kendo-svg-icons';

const SEPARATOR = '_';

const dragClue = ref(null);
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

const expand = ref({
    ids: [],
    idField: 'text',
});
const selected = ref({
    ids: [],
    idField: 'text',
});

const dragOverCnt = ref(0);
const isDragDrop = ref(false);

const dataItems = computed(() =>
    processTreeViewItems(tree.value, {
        expand: expand.value,
        select: selected.value,
    })
);

function getSiblings(itemIndex, data) {
    let result = data;
    const indices = itemIndex.split(SEPARATOR).map((index) => Number(index));
    for (let i = 0; i < indices.length - 1; i++) {
        result = result[indices[i]].items || [];
    }
    return result;
}

function getClueIcon(event) {
    const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
    const { itemHierarchicalIndex: itemIndex } = eventAnalyzer.destinationMeta;
    if (eventAnalyzer.isDropAllowed) {
        switch (eventAnalyzer.getDropOperation()) {
            case 'child':
                return plusIcon;
            case 'before':
                return itemIndex === '0' || itemIndex.endsWith(`${SEPARATOR}0`)
                    ? insertTopIcon
                    : insertMiddleIcon;
            case 'after':{
                const siblings = getSiblings(itemIndex, tree.value);
                const lastIndex = Number(itemIndex.split(SEPARATOR).pop());
                return lastIndex < siblings.length - 1
                    ? insertMiddleIcon
                    : insertBottomIcon;
            }
            default:
                break;
        }
    }
    return cancelIcon;
}

function onItemDragOver(event) {
    dragOverCnt.value++;
    dragClue.value.show(event.pageY + 10, event.pageX, event.item.text, getClueIcon(event));
}

function onItemDragEnd(event) {
    isDragDrop.value = dragOverCnt.value > 0;
    dragOverCnt.value = 0;
    dragClue.value.hide();
    const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
    if (eventAnalyzer.isDropAllowed) {
        const updatedTree = moveTreeViewItem(
            event.itemHierarchicalIndex,
            tree.value,
            eventAnalyzer.getDropOperation() || 'child',
            eventAnalyzer.destinationMeta.itemHierarchicalIndex
        );
        tree.value = updatedTree;
    }
}

function onItemClick(event) {
    if (!isDragDrop.value) {
        const ids = [...selected.value.ids];
        const index = ids.indexOf(event.item.text);
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        selected.value = {
            ids,
            idField: 'text',
        };
    }
}

function onExpandChange(event) {
    event.item.expanded = !event.item.expanded;
}
</script>
