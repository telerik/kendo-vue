<template>
  <Toolbar>
    <KButton
      :svg-icon="pencilIcon"
      :theme-color="'primary'"
      @click="onEditBtnClick"
    >
      {{ reorderable ? 'Save' : 'Edit' }}
    </KButton>
    <KButton
      v-if="reorderable"
      :theme-color="'info'"
      @click="handleClick"
    >
      Add New Tile
    </KButton>
  </Toolbar>
  <TileLayout
    :columns="maxColumnNumber"
    :rowHeight="255"
    :positions="dataItems"
    :gap="{ rows: 10, columns: 10 }"
    :items="tiles"
    @reposition="handleReposition"
    @tileresize="handleResize"
  >
    <template #customHeader="{ props }">
      <span :style="{ display: 'flex', justifyContent: 'space-between' }">
        <h5 class="k-card-title">{{ props.headerText }}</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
        />
      </span>
    </template>
    <template #pageviews="{ props }">
      <PageViewsChart :key="props.tile.uniqueKey" :dataItems="pageViews" />
    </template>
    <template #pageviewsHeader="{ props }">
      <span :style="{ display: 'flex', justifyContent: 'space-between' }">
        <h5 class="k-card-title">Visitors</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
        />
      </span>
    </template>
    <template #popularpageschart="{ props }">
      <PopularPagesChart :key="props.tile.uniqueKey" :dataItems="pageViews" />
    </template>
    <template #popularpageschartHeader="{ props }">
      <span :style="{ display: 'flex', justifyContent: 'space-between' }">
        <h5 class="k-card-title">Most Visited Pages</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
        />
      </span>
    </template>
    <template #visitors="{ props }">
      <VisitorsDonut :key="props.tile.uniqueKey" :dataItems="visitors" />
    </template>
    <template #visitorsHeader="{ props }">
      <span :style="{ display: 'flex', justifyContent: 'space-between' }">
        <h5 class="k-card-title">Page Views</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
        />
      </span>
    </template>
  </TileLayout>
  <WindowContent
    :show-form="showAddForm"
    :max-column-number="maxColumnNumber"
    @close="handleClick"
    @addChart="addChart"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { TileLayout } from '@progress/kendo-vue-layout';
import { Toolbar, Button as KButton } from '@progress/kendo-vue-buttons';
import { SvgIcon } from '@progress/kendo-vue-common';
import { xIcon, pencilIcon } from '@progress/kendo-svg-icons';
import PageViewsChart from './PageViews.vue';
import PopularPagesChart from './PopularPagesChart.vue';
import VisitorsDonut from './VisitorsDonut.vue';
import WindowContent from './WindowContent.vue';
import {
    pageViews,
    visitors,
} from './tilelayout-data';

const maxColumnNumber = 4;
const showAddForm = ref(false);
const reorderable = ref(false);

const dataItems = ref([
    { col: 1, colSpan: 2, rowSpan: 1, id: 1 },
    { col: 3, colSpan: 2, rowSpan: 1, id: 2 },
    { col: 1, colSpan: 2, rowSpan: 2, id: 3 },
]);

const tilesBase = ref([
    { body: 'pageviews', header: 'pageviewsHeader', uniqueKey: 0, id: 1 },
    { header: 'popularpageschartHeader', body: 'popularpageschart', uniqueKey: 0, id: 2 },
    { header: 'visitorsHeader', body: 'visitors', uniqueKey: 0, id: 3 },
]);

const tiles = computed(() =>
    tilesBase.value.map((el) => ({
        ...el,
        reorderable: reorderable.value,
        class: reorderable.value ? undefined : 'custom',
    }))
);

function removeTile(id) {
    tilesBase.value = tilesBase.value.filter((el) => el.id !== id);
    dataItems.value = dataItems.value.filter((el) => el.id !== id);
}

function handleClick() {
    showAddForm.value = !showAddForm.value;
}

function handleReposition(e) {
    dataItems.value = e.value;
}

function handleResize(e) {
    dataItems.value = e.value;
    setTimeout(() => {
        tilesBase.value[e.index].uniqueKey += 1;
    }, 500);
}

function onEditBtnClick() {
    reorderable.value = !reorderable.value;
}

function addChart(e) {
    const getMaxTileId = Math.max(...tilesBase.value.map((tile) => tile.id));

    if (e.insertPosition === 'start') {
        dataItems.value.unshift({
            col: 1,
            colSpan: e.colspan,
            rowSpan: 1,
            id: getMaxTileId + 1,
        });
        tilesBase.value.unshift({
            headerText: e.title,
            header: 'customHeader',
            body: e.tileTemplate,
            id: getMaxTileId + 1,
            uniqueKey: 0,
        });
    } else {
        dataItems.value.push({
            col: 1,
            colSpan: e.colspan,
            rowSpan: 1,
            row: dataItems.value.length,
            id: getMaxTileId + 1,
        });
        tilesBase.value.push({
            headerText: e.title,
            body: e.tileTemplate,
            id: getMaxTileId + 1,
            uniqueKey: 0,
        });
    }
}
</script>

<style>
div.custom .k-resize-handle {
  display: none;
}
</style>
