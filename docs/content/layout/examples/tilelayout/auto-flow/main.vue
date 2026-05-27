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
            :gap="{ rows: 10, columns: 10 }"
            :items="tiles"
            :auto-flow="flow"
          >
            <template #firstTile>
              <span :style="styles">Tile 1</span>
            </template>
            <template #secondTile>
              <span :style="styles">Tile 2</span>
            </template>
            <template #thirdTile>
              <span :style="styles">Tile 3</span>
            </template>
            <template #fourthTile>
              <span :style="styles">Tile 4</span>
            </template>
            <template #fifthTile>
              <span :style="styles">Tile 5</span>
            </template>
          </TileLayout>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TileLayout } from '@progress/kendo-vue-layout';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const flow = ref('column');
const autoFlows = ['column', 'column dense', 'row', 'row dense', 'unset'];

const styles = {
    fontSize: '24px',
    textAlign: 'center',
    margin: 'auto',
    userSelect: 'none',
};

const tiles = [
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
];

function handleChange(e) {
    flow.value = e.value;
}
</script>
