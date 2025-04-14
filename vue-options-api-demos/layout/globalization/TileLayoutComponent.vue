<template>
  <div :dir="'rtl'">
    <TileLayout
      :columns="3"
      :rowHeight="200"
      :gap="{
        rows: 10,
        columns: 10,
      }"
      :items="tiles"
    >
      <template v-slot:firstTile>
        <p>Reorderable tile.</p>
      </template>
      <template v-slot:secondTile>
        <p>Reorderable tile.</p>
      </template>
      <template v-slot:thirdTile>
        <p>Reorderable tile.</p>
      </template>
    </TileLayout>
  </div>
</template>
<script>
import { TileLayout } from '@progress/kendo-vue-layout';

export default {
  components: {
    TileLayout,
  },
  data() {
    return {
      tiles: [
        {
          defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
          headerText: 'Tile 1',
          body: 'firstTile',
        },
        {
          defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
          headerText: 'Tile 2',
          body: 'secondTile',
        },
        {
          defaultPosition: { col: 3, colSpan: 1, rowSpan: 2 },
          headerText: 'Tile 3',
          body: 'thirdTile',
          reorderable: false,
        },
      ],
    };
  },
};
</script>
