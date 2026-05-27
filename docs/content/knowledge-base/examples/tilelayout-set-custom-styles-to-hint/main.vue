<template>
  <TileLayout
    :columns="4"
    :row-height="255"
    :positions="dataItems"
    :gap="{ rows: 10, columns: 10 }"
    :items="tiles"
    @reposition="handleReposition"
  >
    <template #tile1>
      <div>
        <h3>Tile 1 Content</h3>
        <p>This is the content for tile 1.</p>
      </div>
    </template>
    <template #tile2>
      <div>
        <h3>Tile 2 Content</h3>
        <p>This is the content for tile 2.</p>
      </div>
    </template>
  </TileLayout>
</template>

<script setup>
import { ref } from 'vue';
import { TileLayout } from '@progress/kendo-vue-layout';

const dataItems = ref([
    { col: 1, colSpan: 2, rowSpan: 1 },
    { col: 3, colSpan: 1, rowSpan: 2 },
]);

const tiles = ref([
    {
        headerText: 'Tile 1',
        body: 'tile1',
        hintStyle: {
            backgroundColor: '#E3F2FD',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
            cursor: 'grab',
        },
    },
    {
        headerText: 'Tile 2',
        body: 'tile2',
        hintStyle: {
            backgroundColor: '#FFF8E1',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
            cursor: 'grab',
        },
    },
]);

function handleReposition(e) {
    dataItems.value = e.value;
}
</script>
