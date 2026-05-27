<template>
  <div>
    <TreeList
      :style="treeListStyles"
      :data-items="processedData"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      :columns="columns"
      :class="isDragging"
      @expandchange="onExpandChange"
    >
      <template #myTemplate="{ props }">
        <CustomCell
          :data-item="props.dataItem"
          :field="props.field"
          :level="props.level"
          :expandable="props.expandable"
          :has-children="props.hasChildren"
          :expanded="props.expanded"
          @dragHandler="dragHandler"
          @pressHandler="pressHandler"
          @releaseHandler="releaseHandler"
          @expandchange="onExpandChange"
        />
      </template>
    </TreeList>
    <DragClue
      v-if="showDropHints"
      :top="clueTop"
      :left="clueLeft"
      :data-item="activeItem"
      :showContent="showDragClueContent"
    />
    <DragPointer
      v-if="showDropHints && showDragClueContent"
      :targetLeftOffset="targetLeftOffset"
      :targetTopOffset="targetTopOffset"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import employees from './data';
import {
  TreeList,
  mapTree,
  extendDataItem,
} from '@progress/kendo-vue-treelist';
import CustomCell from './CustomCell.vue';
import DragClue from './DragClue.vue';
import DragPointer from './DragPointer.vue';

const subItemsField = 'employees';
const expandField = 'expanded';
const expanded = ref([]);
const dataItems = ref(JSON.parse(JSON.stringify(employees)));

const clueTop = ref(0);
const clueLeft = ref(0);
const targetTopOffset = ref(null);
const targetLeftOffset = ref(null);
const showDropHints = ref(false);
const showDragClueContent = ref(null);
const dropPosition = ref('');
const activeItem = ref({});
const activeLevel = ref(null);

const columns = [
  { field: 'reorder', title: ' ', width: '80px', cell: 'myTemplate' },
  {
    field: 'name',
    title: 'Name',
    width: '250px',
    expandable: true,
    cell: 'myTemplate',
  },
  { field: 'position', title: 'Position', width: '250px', cell: 'myTemplate' },
  { field: 'phone', title: 'Phone', width: '200px', cell: 'myTemplate' },
];

const isDragging = computed(() => ({
  dragging: activeItem.value.id,
}));

const treeListStyles = {
  maxHeight: '540px',
  overflow: 'auto',
  width: '100%',
};

const processedData = computed(() =>
  mapTree(dataItems.value, subItemsField, (item) =>
    extendDataItem(item, subItemsField, {
      [expandField]: expanded.value.includes(item.id),
    })
  )
);

function onExpandChange(event) {
  expanded.value = event.value
    ? expanded.value.filter((id) => id !== event.dataItem.id)
    : [...expanded.value, event.dataItem.id];
}

function dragHandler(dataItem, level, event) {
  clueTop.value = event.pageY + 10;
  clueLeft.value = event.pageX;
  const treeListEl = getTreeListReference();
  if (treeListEl) {
    targetLeftOffset.value = treeListEl.offsetLeft + treeListEl.offsetLeft / 2;
  }
  targetTopOffset.value = getTargetTopOffset(event);
  dropPosition.value = getDropPosition(event);
  showDropHints.value = true;
}

function getDropPosition(event) {
  const parentEl = event.originalEvent.target.parentElement;
  if (!parentEl) {
    return 'below';
  }
  return event.offsetY >= parentEl.clientHeight / 2 ? 'below' : 'above';
}

function getTargetTopOffset(event) {
  const target = event.originalEvent.target;
  if (
    target.className !== 'k-drop-hint-line' &&
    target.className !== 'k-drop-hint k-drop-hint-h'
  ) {
    const parentEl = target.parentElement;
    if (!parentEl) {
      return null;
    }
    const treeListEl = getTreeListReference();
    const headerEl = treeListEl && treeListEl.querySelector('.k-grid-header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;
    const treeListTop = treeListEl ? treeListEl.offsetTop : 0;

    return event.offsetY >= parentEl.clientHeight / 2
      ? parentEl.offsetTop + headerHeight + treeListTop + parentEl.clientHeight
      : parentEl.offsetTop + headerHeight + treeListTop;
  }
  return null;
}

function pressHandler(dataItem, level) {
  activeItem.value = dataItem;
  activeLevel.value = level;
}

function releaseHandler(dataItem, level, event) {
  showDropHints.value = false;

  let droppedLevel = getDroppedLevel(event.originalEvent.target);

  // If the drop target is a child row, resolve to its root-level ancestor
  // so that dragging over any row in a group reorders relative to that root item.
  if (droppedLevel && droppedLevel.length > 1) {
    droppedLevel = [droppedLevel[0]];
  }

  // Only allow reordering among root-level items
  if (
    droppedLevel &&
    activeLevel.value &&
    activeLevel.value.length === 1 &&
    droppedLevel.length === 1 &&
    activeLevel.value[0] !== droppedLevel[0]
  ) {
    dataItems.value = reorderRootItems(
      dataItems.value,
      activeLevel.value[0],
      droppedLevel[0],
      dropPosition.value
    );
  }

  activeItem.value = {};
  activeLevel.value = null;
}

/**
 * Reorders root-level items in the tree data.
 * Only moves items within the top-level array, preserving all child hierarchies.
 */
function reorderRootItems(data, sourceIndex, destIndex, position) {
  const tree = [...data.map((item) => ({ ...item }))];
  const [sourceItem] = tree.splice(sourceIndex, 1);

  let insertIndex = destIndex;

  // Adjust if source was before destination (array shifted after removal)
  if (sourceIndex < destIndex) {
    insertIndex--;
  }

  if (position === 'below') {
    insertIndex++;
  }

  tree.splice(insertIndex, 0, sourceItem);
  return tree;
}

function getDroppedLevel(target) {
  if (target.getAttribute('data-level')) {
    try {
      return JSON.parse(target.getAttribute('data-level'));
    } catch {
      return null;
    }
  } else if (target.parentElement) {
    return getDroppedLevel(target.parentElement);
  }
  return null;
}

function treeListMouseover() {
  showDragClueContent.value = true;
}

function treeListMouseout() {
  showDragClueContent.value = false;
}

function getTreeListReference() {
  return document.querySelector('.k-treelist');
}

onMounted(() => {
  const treeListBody = document.querySelector('.k-treelist .k-grid-content');
  if (treeListBody) {
    treeListBody.addEventListener('mouseover', treeListMouseover, false);
    treeListBody.addEventListener('mouseout', treeListMouseout, false);
  }
});

onUnmounted(() => {
  const treeListBody = document.querySelector('.k-treelist .k-grid-content');
  if (treeListBody) {
    treeListBody.removeEventListener('mouseover', treeListMouseover, false);
    treeListBody.removeEventListener('mouseout', treeListMouseout, false);
  }
});
</script>
