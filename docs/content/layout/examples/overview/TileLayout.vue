<template>
  <TileLayout
    :columns="3"
    :row-height="150"
    :gap="{ rows: '10px', columns: '10px' }"
    :items="tiles"
  >
    <template #tileOneHeader> Tile 1 </template>
    <template #tileOneBody>
      <p>Reorderable and resizable tile.</p>
    </template>
    <template #tileTwoHeader> Tile 2 </template>
    <template #tileTwoBody>
      <p>Reorderable and horizontally resizable only tile.</p>
    </template>
    <template #tileThreeHeader> Tile 3 </template>
    <template #tileThreeBody>
      <p>Reorderable and vertically resizable only tile.</p>
    </template>
    <template #tileFourHeader> Tile 4 </template>
    <template #tileFourBody>
      <p>Resizable only.</p>
    </template>
  </TileLayout>
</template>

<script setup>
import { ref } from 'vue';
import { TileLayout } from '@progress/kendo-vue-layout';

const tiles = ref([
    {
        defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
        header: 'tileOneHeader',
        body: 'tileOneBody',
    },
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
        header: 'tileTwoHeader',
        body: 'tileTwoBody',
        resizable: 'horizontal',
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 },
        header: 'tileThreeHeader',
        body: 'tileThreeBody',
        resizable: 'vertical',
    },
    {
        defaultPosition: { col: 2, colSpan: 2, rowSpan: 1 },
        header: 'tileFourHeader',
        body: 'tileFourBody',
        reorderable: false,
    },
]);
</script>
