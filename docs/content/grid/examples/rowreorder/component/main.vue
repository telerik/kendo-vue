<template>
  <div>
    <Grid
      :data-items="items"
      :columns="columns"
      :cell-render="'myTemplate'"
      :class="isDragging"
    >
      <template #myTemplate="{ props }">
        <CustomCell
          :className="props.class"
          :data-item="props.dataItem"
          :field="props.field"
          @dragHandler="dragHandler"
          @pressHandler="pressHandler"
          @releaseHandler="releaseHandler"
        />
      </template>
    </Grid>
    <DragClue
      v-if="showDropHints"
      :top="top"
      :left="left"
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
import { Grid } from '@progress/kendo-vue-grid';
import CustomCell from './CustomCell.vue';
import DragClue from './DragClue.vue';
import DragPointer from './DragPointer.vue';
import { reorderData, getTargetTopOffSet } from './common';

const top = ref(0);
const left = ref(0);
const targetTopOffset = ref(null);
const targetLeftOffset = ref(null);
const showDropHints = ref(false);
const showDragClueContent = ref(null);
const dropPosition = ref('');
const items = ref([]);
const activeItem = ref({});
const columns = [
    { field: 'reorder', title: '', width: '80px' },
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

const isDragging = computed(() => ({
    dragging: activeItem.value.ProductID,
}));

function createRandomData(count) {
    const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk',
    ];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName: productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
}

function dragHandler(dataItem, event) {
    top.value = event.pageY + 10;
    left.value = event.pageX;
    targetLeftOffset.value =
    getGridReference().offsetLeft + getGridReference().offsetLeft / 2;
    targetTopOffset.value = getTargetTopOffSet(event);
    dropPosition.value = getDropPosition(event);
    showDropHints.value = true;
}

function getDropPosition(event) {
    return event.offsetY >=
    event.originalEvent.target.parentElement.clientHeight / 2
        ? 'below'
        : 'above';
}

function pressHandler(dataItem) {
    activeItem.value = dataItem;
}

function releaseHandler(dataItem, event) {
    showDropHints.value = false;
    const reorderedData = reorderData(
        event,
        items.value,
        activeItem.value,
        dropPosition.value
    );
    items.value = reorderedData;
    activeItem.value = {};
}

function gridMouseover() {
    showDragClueContent.value = true;
}

function gridMouseout() {
    showDragClueContent.value = false;
}

function getGridReference() {
    return document.querySelector('.k-grid');
}

onMounted(() => {
    items.value = createRandomData(10);

    const gridBody = document.getElementsByClassName('k-grid-content')[0];
    gridBody.addEventListener('mouseover', gridMouseover, false);
    gridBody.addEventListener('mouseout', gridMouseout, false);
});

onUnmounted(() => {
    const gridBody = document.getElementsByClassName('k-grid-content')[0];
    gridBody.removeEventListener('mouseover', gridMouseover, false);
    gridBody.removeEventListener('mouseout', gridMouseout, false);
});
</script>

