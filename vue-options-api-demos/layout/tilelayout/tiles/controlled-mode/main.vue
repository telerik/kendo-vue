<template>
  <TileLayout
    :columns="3"
    :gap="{
      rows: 10,
      columns: 10,
    }"
    :positions="positions"
    :items="tiles"
    @reposition="onReposition"
  >
    <template v-slot:firstTile>
      <p :style="styles">1</p>
    </template>
    <template v-slot:secondTile>
      <p :style="styles">2</p>
    </template>
    <template v-slot:thirdTile>
      <p :style="styles">3</p>
    </template>
    <template v-slot:fourthTile>
      <p :style="styles">4</p>
    </template>
    <template v-slot:fifthTile>
      <p :style="styles">5</p>
    </template>
  </TileLayout>
</template>
<script>
import { TileLayout } from '@progress/kendo-vue-layout';

export default {
  components: {
    TileLayout,
  },
  data() {
    return {
      styles: {
        fontSize: '24px',
        textAlign: 'center',
        margin: 'auto',
        userSelect: 'none',
      },
      positions: [
        { col: 1, colSpan: 1, rowSpan: 2 },
        { col: 2, colSpan: 2, rowSpan: 2 },
        { col: 1, colSpan: 3, rowSpan: 1 },
        { col: 1, colSpan: 2, rowSpan: 2 },
        { col: 3, colSpan: 1, rowSpan: 2 },
      ],
      tiles: [
        {
          body: 'firstTile',
        },
        {
          body: 'secondTile',
        },
        {
          body: 'thirdTile',
        },
        {
          body: 'fourthTile',
        },
        {
          body: 'fifthTile',
        },
      ],
    };
  },
  methods: {
    onReposition(e) {
      this.positions = e.value;
    },
  },
};
</script>
