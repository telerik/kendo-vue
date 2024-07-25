<template>
    <TileLayout
      :columns="4"
      :rowHeight="255"
      :positions="dataItems"
      :gap="{ rows: 10, columns: 10 }"
      :items="tiles"
      @reposition="handleReposition"
    >
      <template v-slot:tile1>
        <div>
          <h3>Tile 1 Content</h3>
          <p>This is the content for tile 1.</p>
        </div>
      </template>
      <template v-slot:tile2>
        <div>
          <h3>Tile 2 Content</h3>
          <p>This is the content for tile 2.</p>
        </div>
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
        dataItems: [
          { col: 1, colSpan: 2, rowSpan: 1 },
          { col: 3, colSpan: 1, rowSpan: 2 },
        ],
        tiles: [
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
        ],
      };
    },
    methods: {
      handleReposition(e) {
        this.dataItems = e.value;
      },
    },
  };
  </script>
  