<template>
    <TileLayout
      :columns="3"
      :row-height="150"
      :gap="{ rows: '10px', columns: '10px' }"
      :items="tiles"
    >
      <template v-slot:tileOneHeader="{ props }"> Tile 1 </template>
      <template v-slot:tileOneBody="{ props }">
        <p>Reorderable and resizable tile.</p>
      </template>
      <template v-slot:tileTwoHeader="{ props }"> Tile 2 </template>
      <template v-slot:tileTwoBody="{ props }">
        <p>Reorderable and horizontally resizable only tile.</p>
      </template>
      <template v-slot:tileThreeHeader="{ props }"> Tile 3 </template>
      <template v-slot:tileThreeBody="{ props }">
        <p>Reorderable and vertically resizable only tile.</p>
      </template>
      <template v-slot:tileFourHeader="{ props }"> Tile 4 </template>
      <template v-slot:tileFourBody="{ props }">
        <p>Resizable only.</p>
      </template>
    </TileLayout>
  </template>
  
  <script>
  import { TileLayout } from '@progress/kendo-vue-layout';
  
  export default {
    components: {
      TileLayout,
    },
    data: function () {
      return {
        tiles: [
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
        ],
      };
    },
  };
  </script>
  