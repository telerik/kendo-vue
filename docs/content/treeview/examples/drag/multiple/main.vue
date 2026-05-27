<template>
  <div>
    <TreeView
      :dataItems="tree1"
      :draggable="true"
      @itemdragover="onItemDragOver"
      @itemdragend="onItemDragEnd"
      :expandIcons="true"
      @expandchange="onExpandChange"
      @itemclick="onItemClick"
      :id="'firstTree'"
    />
    <hr />
    <TreeView
      :dataItems="tree2"
      :draggable="true"
      @itemdragover="onItemDragOver"
      @itemdragend="onItemDragEnd"
      :expandIcons="true"
      @expandchange="onExpandChange"
      @itemclick="onItemClick"
      :id="'secondTree'"
    />
    <TreeViewDragClue ref="dragClue" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    TreeView,
    TreeViewDragClue,
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
const tree1 = ref([
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

const tree2 = ref([
    {
        text: 'Storage',
        expanded: true,
        items: [
            { text: 'Wall Shelving' },
            { text: 'Floor Shelving' },
            { text: 'Kids Storage' },
        ],
    },
    {
        text: 'Lights',
        expanded: true,
        items: [
            { text: 'Ceiling' },
            { text: 'Table' },
            { text: 'Floor' },
        ],
    },
]);

const dragOverCnt = ref(0);
const isDragDrop = ref(false);

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
    const { itemHierarchicalIndex: itemIndex, treeViewGuid } =
    eventAnalyzer.destinationMeta;
    if (eventAnalyzer.isDropAllowed) {
        switch (eventAnalyzer.getDropOperation()) {
            case 'child':
                return plusIcon;
            case 'before':
                return itemIndex === '0' || itemIndex.endsWith(`${SEPARATOR}0`)
                    ? insertTopIcon
                    : insertMiddleIcon;
            case 'after':{
                const siblings = getSiblings(itemIndex, resolveData(treeViewGuid));
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

function resolveData(treeViewGuid) {
    return treeViewGuid === 'firstTree' ? tree1.value : tree2.value;
}

function resolveDataKey(treeViewGuid) {
    return treeViewGuid === 'firstTree' ? 'tree1' : 'tree2';
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
        const { sourceData, targetData } = moveTreeViewItem(
            event.itemHierarchicalIndex,
            resolveData(event.target.guid()),
            eventAnalyzer.getDropOperation(),
            eventAnalyzer.destinationMeta.itemHierarchicalIndex,
            resolveData(eventAnalyzer.destinationMeta.treeViewGuid)
        );

        if (resolveDataKey(event.target.guid()) === 'tree1') {
            tree1.value = sourceData;
            tree2.value = targetData;
        } else {
            tree1.value = targetData;
            tree2.value = sourceData;
        }
    }
}

function onItemClick(event) {
    if (!isDragDrop.value) {
        event.item.selected = !event.item.selected;
    }
}

function onExpandChange(event) {
    event.item.expanded = !event.item.expanded;
}
</script>
