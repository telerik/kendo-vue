<template>
  <TileLayout
    :columns="3"
    :rowHeight="150"
    :gap="{
      rows: 10,
      columns: 10,
    }"
    :items="tiles"
    @reposition="onReposition"
  >
    <template v-slot:firstTileBody>
      <p :style="styles">
        Tile is 1st in order. It's on the first column. Spans across two columns
        and one row.
      </p>
    </template>
    <template v-slot:secondTileBody>
      <p :style="styles">
        Tile is 2nd in order. It's on the first column. Spans across one column
        and one row.
      </p>
    </template>
    <template v-slot:thirdTileBody>
      <p :style="styles">
        Tile is 3th in order. It's on the first column. Spans across three
        columns and one row.
      </p>
    </template>
    <template v-slot:fourthTileBody>
      <p :style="styles">
        Tile is 4th in order. It's on the second column and row unset. Spans
        across one column and one row.
      </p>
    </template>
    <template v-slot:fifthTileBody>
      <p :style="styles">
        Tile is 5th in order. It's on the third column and row unset. Spans
        across one column and two rows.
      </p>
    </template>
    <template v-slot:firstTileHeader> Tile 1 </template>
    <template v-slot:secondTileHeader> Tile 2 </template>
    <template v-slot:thirdTileHeader> Tile 3 </template>
    <template v-slot:fourthTileHeader> Tile 4 </template>
    <template v-slot:fifthTileHeader> Tile 5 </template>
  </TileLayout>
  <br />
  <br />
  <Logger :title="'Events list'" :events="eventsList" />
</template>
<script>
import { TileLayout } from '@progress/kendo-vue-layout';
import Logger from './Logger.vue';

export default {
  components: {
    TileLayout,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data() {
    return {
      events: [],
      styles: { padding: '10px', fontSize: '12px' },
      tiles: [
        {
          defaultPosition: { col: 1, colSpan: 2, rowSpan: 1, order: 1 },
          header: 'firstTileHeader',
          body: 'firstTileBody',
        },
        {
          defaultPosition: { col: 1, colSpan: 1, rowSpan: 1, order: 2 },
          header: 'secondTileHeader',
          body: 'secondTileBody',
        },
        {
          defaultPosition: { col: 3, colSpan: 1, rowSpan: 2, order: 5 },
          header: 'thirdTileHeader',
          body: 'thirdTileBody',
        },
        {
          defaultPosition: { col: 2, colSpan: 1, rowSpan: 1, order: 4 },
          header: 'fourthTileHeader',
          body: 'fourthTileBody',
        },
        {
          defaultPosition: { col: 1, colSpan: 3, rowSpan: 1, order: 3 },
          header: 'fifthTileHeader',
          body: 'fifthTileBody',
        },
      ],
    };
  },
  methods: {
    onReposition(e) {
      console.log(e.value);
      this.events.unshift('Reposition event triggered.');
    },
  },
};
</script>
