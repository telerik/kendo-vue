<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="items">
      <template v-slot:first>
        <div>
          <div class="teamMate">
            <img :src="andrewImage" alt="Andrew Fuller" />
            <span class="mate-info">
              <h2>Andrew Fuller</h2>
              <p>Team Lead</p>
            </span>
          </div>
          <div class="teamMate">
            <img :src="nancyImage" alt="Nancy Leverling" />
            <span class="mate-info">
              <h2>Nancy Leverling</h2>
              <p>Sales Associate</p>
            </span>
          </div>
          <div class="teamMate">
            <img :src="robertImage" alt="Robert King" />
            <span class="mate-info">
              <h2>Robert King</h2>
              <p>Business System Analyst</p>
            </span>
          </div>
        </div>
      </template>
    </PanelBar>
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

const andrewImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/andrew.jpg';
const nancyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/nancy.jpg';
const robertImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/robert.jpg';

export default {
  components: {
    PanelBar,
  },
  data() {
    return {
      andrewImage,
      nancyImage,
      robertImage,
      items: [
        {
          expanded: true,
          title: 'My Teammates',
          content: 'first',
        },
        {
          title: 'Projects',
          items: [
            { title: 'New Business Plan' },
            {
              title: 'Sales Forecasts',
              items: [
                { title: 'Q1 Forecast' },
                { title: 'Q2 Forecast' },
                { title: 'Q3 Forecast' },
                { title: 'Q4 Forecast' },
              ],
            },
            { title: 'Sales Reports' },
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
        { title: 'Communication', disabled: true },
      ],
    };
  },
};
</script>
