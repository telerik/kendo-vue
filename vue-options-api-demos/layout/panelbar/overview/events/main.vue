<template>
  <div>
    <div class="panelbar-wrapper">
      <PanelBar :expand-mode="'single'" :items="items" @select="onSelect">
      </PanelBar>
    </div>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';
import Logger from './Logger.vue';
import './styles.css';

export default {
  components: {
    PanelBar,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      events: [],
      items: [
        {
          title: 'Sales Forecasts',
          items: [
            { title: 'Q1 Forecast' },
            { title: 'Q2 Forecast' },
            { title: 'Q3 Forecast' },
            { title: 'Q4 Forecast' },
          ],
        },
        {
          title: 'Programs',
          items: [
            { title: 'Monday' },
            { title: 'Tuesday' },
            { title: 'Wednesday' },
            { title: 'Thursday' },
            { title: 'Friday' },
          ],
        },
      ],
    };
  },
  methods: {
    onSelect(event) {
      this.events.unshift('Item ' + event.target.title + ' was selected.');
    },
  },
};
</script>
