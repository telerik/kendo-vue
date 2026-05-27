<template>
  <Draggable
    v-if="field === 'reorder'"
    @press="onPress"
    @drag="onDrag"
    @release="onRelease"
    ref="draggable"
  >
    <td :data-itemid="dataItem.ProductID" :class="['k-drag-cell', ...tdClass]" :style="{ cursor: 'move' }">
      <SvgIcon :icon="reorderIcon" size="large" />
    </td>
  </Draggable>
  <td v-else :data-itemid="dataItem.ProductID" :class="tdClass">
    {{ getNestedValue(field, dataItem) }}
  </td>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Draggable, SvgIcon } from '@progress/kendo-vue-common';
import { reorderIcon } from '@progress/kendo-svg-icons';

const draggable = ref(null);
const props = defineProps({
    field: String,
    dataItem: Object,
    className: String,
    dropPosition: String,
});

const emit = defineEmits(['pressHandler', 'dragHandler', 'releaseHandler']);

const isDragged = ref(false);
const tdClass = computed(() => {
    const drop = props.dropPosition === 'above' ? 'above' : 'below';
    return [props.className, drop];
});

function getNestedValue(fieldName, dataItem) {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });
    return data;
}

function onPress(event) {
    const element = draggable.value && draggable.value.element;
    if (!event.isTouch) {
        event.originalEvent.preventDefault();
    }
    isDragged.value = true;
    if (element) {
        emit('pressHandler', props.dataItem, event, element);
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
        emit('dragHandler', props.dataItem, event, element);
    }
}

function onRelease(event) {
    document.getElementsByTagName('body')[0].style.cursor = 'default';
    const element = draggable.value && draggable.value.element;
    isDragged.value = false;
    if (element) {
        emit('releaseHandler', props.dataItem, event, element);
    }
}
</script>

<style scoped>
html .k-grid.dragging tbody tr:hover td.below {
  border-bottom-color: red;
  border-bottom-width: 2px;
}
html .k-grid.dragging tbody tr:hover td.above {
  border-top-color: red;
  border-top-width: 2px;
}
</style>
