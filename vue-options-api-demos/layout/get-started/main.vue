<template>
    <div class="panelbar-wrapper">
      <PanelBar :expand-mode="'single'" :items="items">
        <template v-slot:competitionOverview>
          <div style="padding: 10px">
            A very demanding competition with more than 5000 participants.
          </div>
        </template>
      </PanelBar>
    </div>
  </template>
  
  <script>
  import { PanelBar } from '@progress/kendo-vue-layout';
  
  export default {
    components: {
      PanelBar,
    },
    data() {
      return {
        items: [
          {
            title: 'Competition',
            content: 'competitionOverview',
          },
          {
            title: 'Winners',
            items: [
              { title: 'Winners 2022' },
              { title: 'Winner 2021' },
              { title: 'Winner 2020' },
            ],
          },
        ],
      };
    },
  };
  </script>
  <style>
  .k-content {
    padding: 4px 8px;
  }
  </style>