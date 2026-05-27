<template>
  <TileLayout
    :columns="4"
    :row-height="200"
    :column-width="240"
    :auto-flow="'column dense'"
    :gap="{ rows: 10, columns: 10 }"
    :items="tiles"
  >
    <template #firstTileBody>
      <p>Reorderable and resizable tile.</p>
    </template>
    <template #secondTileBody>
      <p>Reorderable and horizontally resizable only tile.</p>
    </template>
    <template #thirdTileBody>
      <p>Reorderable and vertically resizable only tile.</p>
    </template>
    <template #fourthTileBody>
      <p>Resizable only.</p>
    </template>
    <template #fifthTileBody>
      <p>Non-resizable and non-reorderable.</p>
    </template>
    <template #sixthTileBody>
      <p>Reorderable and resizable tile.</p>
    </template>
    <template #firstTileHeader> Tile 1 </template>
    <template #secondTileHeader> Tile 2 </template>
    <template #thirdTileHeader> Tile 3 </template>
    <template #fourthTileHeader> Tile 4 </template>
    <template #fifthTileHeader> Tile 5 </template>
    <template #sixthTileHeader> Tile 6 </template>
  </TileLayout>
</template>

<script setup>
import { ref } from 'vue';
import { TileLayout } from '@progress/kendo-vue-layout';

const tiles = ref([
    {
        defaultPosition: { col: 1, colSpan: 3, rowSpan: 1 },
        header: 'firstTileHeader',
        body: 'firstTileBody',
    },
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 2 },
        header: 'secondTileHeader',
        body: 'secondTileBody',
        resizable: 'horizontal',
    },
    {
        defaultPosition: { col: 4, colSpan: 1, rowSpan: 1 },
        header: 'thirdTileHeader',
        body: 'thirdTileBody',
        resizable: 'vertical',
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        header: 'fourthTileHeader',
        body: 'fourthTileBody',
        reorderable: false,
    },
    {
        defaultPosition: { col: 3, colSpan: 2, rowSpan: 1 },
        header: 'fifthTileHeader',
        body: 'fifthTileBody',
        resizable: false,
        reorderable: false,
    },
    {
        defaultPosition: { col: 2, colSpan: 3, rowSpan: 1 },
        header: 'sixthTileHeader',
        body: 'sixthTileBody',
    },
]);
</script>
