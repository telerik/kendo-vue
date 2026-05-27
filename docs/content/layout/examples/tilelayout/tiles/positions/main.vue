<template>
  <TileLayout
    :columns="3"
    :rowHeight="150"
    :gap="{ rows: 10, columns: 10 }"
    :items="tiles"
  >
    <template #firstTile>
      <p :style="styles">
        Tile is 1st in order. It's on the first column. Spans across two columns
        and one row.
      </p>
    </template>
    <template #secondTile>
      <p :style="styles">
        Tile is 2nd in order. It's on the first column. Spans across one column
        and one row.
      </p>
    </template>
    <template #thirdTile>
      <p :style="styles">
        Tile is 3rd in order. It's on the first column. Spans across three
        columns and one row.
      </p>
    </template>
    <template #fourthTile>
      <p :style="styles">
        Tile is 4th in order. It's on the second column and row unset. Spans
        across one column and one row.
      </p>
    </template>
    <template #fifthTile>
      <p :style="styles">
        Tile is 5th in order. It's on the third column and row unset. Spans
        across one column and two rows.
      </p>
    </template>
  </TileLayout>
</template>

<script setup>
import { TileLayout } from '@progress/kendo-vue-layout';

const styles = { padding: '10px', margin: 'auto', userSelect: 'none' };

const tiles = [
    {
        defaultPosition: { col: 1, colSpan: 2, rowSpan: 1, order: 1 },
        item: 'firstTile',
    },
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1, order: 2 },
        item: 'secondTile',
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 2, order: 5 },
        item: 'thirdTile',
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1, order: 4 },
        item: 'fourthTile',
    },
    {
        defaultPosition: { col: 1, colSpan: 3, rowSpan: 1, order: 3 },
        item: 'fifthTile',
    },
];
</script>
