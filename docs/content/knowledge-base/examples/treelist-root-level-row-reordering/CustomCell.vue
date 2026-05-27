<template>
  <!-- Reorder drag handle column (root-level items only) -->
  <Draggable
    v-if="field === 'reorder' && isRootLevel"
    @press="onPress"
    @drag="onDrag"
    @release="onRelease"
    ref="draggable"
  >
    <td :data-level="JSON.stringify(level)" :data-itemid="dataItem.id">
      <span :style="{ cursor: 'move' }" data-drag-handle="true">
        <SvgIcon :style="{ pointerEvents: 'none' }" :icon="reorderIcon" />
      </span>
    </td>
  </Draggable>
  <!-- Empty reorder column for child items -->
  <td
    v-else-if="field === 'reorder'"
    :data-level="JSON.stringify(level)"
    :data-itemid="dataItem.id"
  ></td>

  <!-- Expandable tree column (e.g. Name) with indentation and expand/collapse icons -->
  <td
    v-else-if="expandable"
    :data-level="JSON.stringify(level)"
    :data-itemid="dataItem.id"
  >
    <span
      v-for="(_, index) in level.slice(1)"
      :key="index"
      class="k-icon k-svg-icon k-treelist-toggle"
    ></span>
    <span
      :style="{ cursor: hasChildren ? 'pointer' : 'default' }"
      @click="onExpandClick"
      :data-prevent-selection="true"
    >
      <SvgIcon
        v-if="hasChildren"
        :icon="expanded ? chevronDownIcon : chevronRightIcon"
      />
      <span v-else class="k-icon k-svg-icon k-treelist-toggle"></span>
    </span>
    {{ getNestedValue(field, dataItem) }}
  </td>

  <!-- Regular data column -->
  <td v-else :data-level="JSON.stringify(level)" :data-itemid="dataItem.id">
    {{ getNestedValue(field, dataItem) }}
  </td>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Draggable, SvgIcon } from '@progress/kendo-vue-common';
import {
  reorderIcon,
  chevronDownIcon,
  chevronRightIcon,
} from '@progress/kendo-svg-icons';

const draggable = ref(null);

const props = defineProps({
  field: String,
  dataItem: Object,
  level: Array,
  expandable: Boolean,
  hasChildren: Boolean,
  expanded: Boolean,
});

const isRootLevel = computed(() => props.level && props.level.length === 1);

const emit = defineEmits([
  'pressHandler',
  'dragHandler',
  'releaseHandler',
  'expandchange',
]);

function getNestedValue(fieldName, dataItem) {
  const path = fieldName.split('.');
  let data = dataItem;
  path.forEach((p) => {
    data = data ? data[p] : undefined;
  });
  return data;
}

function onExpandClick() {
  if (props.hasChildren) {
    emit('expandchange', {
      dataItem: props.dataItem,
      value: props.expanded,
    });
  }
}

function onPress(event) {
  const element = draggable.value && draggable.value.element;
  if (!event.isTouch) {
    event.originalEvent.preventDefault();
  }
  if (element) {
    emit('pressHandler', props.dataItem, props.level, event, element);
  }
}

function onDrag(event) {
  document.getElementsByTagName('body')[0].style.cursor = 'move';
  const element = draggable.value && draggable.value.element;
  if (!event.isTouch) {
    event.originalEvent.preventDefault();
  }
  event.originalEvent.stopPropagation();
  if (element) {
    emit('dragHandler', props.dataItem, props.level, event, element);
  }
}

function onRelease(event) {
  document.getElementsByTagName('body')[0].style.cursor = 'default';
  const element = draggable.value && draggable.value.element;
  if (element) {
    emit('releaseHandler', props.dataItem, props.level, event, element);
  }
}
</script>
