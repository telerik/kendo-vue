<template>
  <TileLayout
    :columns="3"
    :rowHeight="200"
    :gap="{ rows: 10, columns: 10 }"
    :items="tiles"
  >
    <template #firstTile>
      <p :style="styles">1</p>
    </template>
    <template #secondTile>
      <p :style="styles">2</p>
    </template>
    <template #thirdTile>
      <p :style="styles">3</p>
    </template>
    <template #fourthTile>
      <p :style="styles">4</p>
    </template>
  </TileLayout>
</template>

<script setup>
import { TileLayout } from '@progress/kendo-vue-layout';

const styles = {
    fontSize: '24px',
    textAlign: 'center',
    margin: 'auto',
    userSelect: 'none',
};

const tiles = [
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
        headerText: 'Tile 1',
        body: 'firstTile',
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        headerText: 'Tile 2',
        body: 'secondTile',
        resizable: false,
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 2 },
        headerText: 'Tile 3',
        body: 'thirdTile',
        resizable: 'vertical',
    },
    {
        defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
        headerText: 'Tile 4',
        body: 'fourthTile',
        resizable: 'horizontal',
    },
];
</script>
