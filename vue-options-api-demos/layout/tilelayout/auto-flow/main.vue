<template>
  <div class="example">
    <div class="example-wrap">
      <div class="row" :style="{ 'margin-bottom': '30px' }">
        <div class="col">
          <DropDownList
            :data-items="autoFlows"
            :value="flow"
            @change="handleChange"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TileLayout
            :columns="3"
            :rowHeight="100"
            :gap="{
              rows: 10,
              columns: 10,
            }"
            :items="tiles"
            :auto-flow="flow"
          >
            <template v-slot:firstTile>
              <span :style="styles">Tile 1</span>
            </template>
            <template v-slot:secondTile>
              <span :style="styles">Tile 2</span>
            </template>
            <template v-slot:thirdTile>
              <span :style="styles">Tile 3</span>
            </template>
            <template v-slot:fourthTile>
              <span :style="styles">Tile 4</span>
            </template>
            <template v-slot:fifthTile>
              <span :style="styles">Tile 5</span>
            </template>
          </TileLayout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { TileLayout } from '@progress/kendo-vue-layout';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    TileLayout,
    DropDownList,
  },
  data() {
    return {
      flow: 'column',
      autoFlows: ['column', 'column dense', 'row', 'row dense', 'unset'],
      styles: {
        fontSize: '24px',
        'text-align': 'center',
        margin: 'auto',
        userSelect: 'none',
      },
      tiles: [
        {
          defaultPosition: { row: 3, colSpan: 1, rowSpan: 1 },
          item: 'firstTile',
          resizable: false,
          reorderable: false,
        },
        {
          defaultPosition: { colSpan: 1, rowSpan: 1 },
          item: 'secondTile',
          resizable: false,
          reorderable: false,
        },
        {
          defaultPosition: { colSpan: 1, rowSpan: 1 },
          item: 'thirdTile',
          resizable: false,
          reorderable: false,
        },
        {
          defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
          item: 'fourthTile',
          resizable: false,
          reorderable: false,
        },
        {
          defaultPosition: { colSpan: 1, rowSpan: 1 },
          item: 'fifthTile',
          resizable: false,
          reorderable: false,
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      this.flow = e.value;
    },
  },
};
</script>
