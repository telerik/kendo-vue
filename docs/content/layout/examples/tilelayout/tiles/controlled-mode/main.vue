<template>
  <TileLayout
    :columns="3"
    :gap="{ rows: 10, columns: 10 }"
    :positions="positions"
    :items="tiles"
    @reposition="onReposition"
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
    <template #fifthTile>
      <p :style="styles">5</p>
    </template>
  </TileLayout>
</template>

<script setup>
import { ref } from 'vue';
import { TileLayout } from '@progress/kendo-vue-layout';

const styles = {
    fontSize: '24px',
    textAlign: 'center',
    margin: 'auto',
    userSelect: 'none',
};

const positions = ref([
    { col: 1, colSpan: 1, rowSpan: 2 },
    { col: 2, colSpan: 2, rowSpan: 2 },
    { col: 1, colSpan: 3, rowSpan: 1 },
    { col: 1, colSpan: 2, rowSpan: 2 },
    { col: 3, colSpan: 1, rowSpan: 2 },
]);

const tiles = [
    { body: 'firstTile' },
    { body: 'secondTile' },
    { body: 'thirdTile' },
    { body: 'fourthTile' },
    { body: 'fifthTile' },
];

function onReposition(e) {
    positions.value = e.value;
}
</script>
