<template>
  <div>
    <Grid
      ref="grid"
      :style="{ height: '470px' }"
      :data-items="gridData"
      :columns="columns"
    >
      <template #tickerTemplate="{ props }">
        <td :class="props.class">
          <Ticker :data-item="props.dataItem" :field="props.field" />
        </td>
      </template>
      <template #priceTemplate="{ props }">
        <td :class="['text-center', props.class]">
          <Price :data-item="props.dataItem" :field="props.field" />
        </td>
      </template>
      <template #pricechangepercentageTemplate="{ props }">
        <td :class="['text-center', props.class]">
          <PriceChange
            :data-item="props.dataItem"
            :field="props.field"
          />
        </td>
      </template>
      <template #pricechangeTemplate="{ props }">
        <td :class="['text-center', props.class]">
          <PriceChange
            :data-item="props.dataItem"
            :field="props.field"
          />
        </td>
      </template>
      <template #highpriceTemplate="{ props }">
        <td :class="['text-center', props.class]">
          <Price :data-item="props.dataItem" :field="props.field" />
        </td>
      </template>
      <template #lowpriceTemplate="{ props }">
        <td :class="['text-center', props.class]">
          <Price :data-item="props.dataItem" :field="props.field" />
        </td>
      </template>
      <template #volumeTemplate="{ props }">
        <td :class="['text-center', props.class]">
          <Volume :data-item="props.dataItem" :field="props.field" />
        </td>
      </template>
      <template #ratingTemplate="{ props }">
        <td :class="['text-center', props.class]">
          <Rating :data-item="props.dataItem" :field="props.field" />
        </td>
      </template>
    </Grid>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import Ticker from './TickerComponent.vue';
import Price from './PriceComponent.vue';
import PriceChange from './ChangePriceComponent.vue';
import Volume from './VolumeComponent.vue';
import Rating from './RatingComponent.vue';

defineProps({
    gridData: {
        type: Array,
        default: () => [],
    },
});

const columns = ref([]);
const ADJUST_PADDING = 4;
const COLUMN_MIN = 4;
let minGridWidth = 0;

const columnsData = [
    { field: 'Ticker', minWidth: 140, cell: 'tickerTemplate' },
    { field: 'Price', title: 'LAST', minWidth: 120, cell: 'priceTemplate' },
    { field: 'Change(%)', title: 'CHG %', minWidth: 90, cell: 'pricechangepercentageTemplate' },
    { field: 'Change', title: 'CHG', minWidth: 90, cell: 'pricechangeTemplate' },
    { field: 'High(D)', title: 'High', minWidth: 110, cell: 'highpriceTemplate' },
    { field: 'Low(D)', title: 'LOW', minWidth: 110, cell: 'lowpriceTemplate' },
    { field: 'Volume', title: 'VOL', minWidth: 90, cell: 'volumeTemplate' },
    { title: 'RATING', cell: 'ratingTemplate', minWidth: 130 },
];

const grid = ref(null);
const gridCurrent = ref(0);
const setMinWidth = ref(false);

function defineColumns() {
    columns.value = columnsData.map((column) => ({
        field: column.field,
        title: column.title,
        width: setWidth(column.minWidth),
        cell: column.cell,
    }));
}

function setWidth(minWidth) {
    let width = setMinWidth.value
        ? minWidth
        : minWidth + (gridCurrent.value - minGridWidth) / columns.value.length;
    width = width < COLUMN_MIN ? width : width - ADJUST_PADDING;
    return width;
}

function handleResize() {
    if (grid.value.offsetWidth < minGridWidth && !setMinWidth.value) {
        setMinWidth.value = true;
    } else if (grid.value.offsetWidth > minGridWidth) {
        gridCurrent.value = grid.value.offsetWidth;
        setMinWidth.value = false;
    }
    defineColumns();
}
onBeforeMount(() => {
    defineColumns();
});

onMounted(() => {
    grid.value = document.querySelector('.k-grid');
    window.addEventListener('resize', handleResize);
    columnsData.forEach((item) => {
        minGridWidth += item.minWidth;
    });

    gridCurrent.value = grid.value.offsetWidth;
    setMinWidth.value = grid.value.offsetWidth < minGridWidth;
});
</script>

<style>
td.text-center {
  text-align: center;
}

.red {
  color: #d9534f;
}

.green {
  color: #37b400;
}

.text-bold {
  font-weight: 600;
}
</style>
