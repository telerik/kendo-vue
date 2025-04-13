<template>
  <div>
    <div class="k-d-flex k-justify-content-center k-pt-11">
      <div>
        <ExpansionPanel
          v-for="(panel, index) in expansionPanelData"
          :title="panel.country"
          :subtitle="panel.continent"
          :expanded="expanded[panel.id]"
          :tab-index="index"
          :key="panel.id"
          @action="(ev) => handleAction(ev, panel.id)"
        >
          <Reveal :appear="expanded[panel.id]">
            <ExpansionPanelContent v-if="expanded">
              <div class="content">
                <div class="image-container">
                  <img :src="panel.imageUrl" :alt="panel.country" />
                </div>
                <span class="content-text">{{ panel.text }}</span>
              </div>
            </ExpansionPanelContent>
          </Reveal>
        </ExpansionPanel>
      </div>
    </div>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import {
  ExpansionPanel,
  ExpansionPanelContent,
} from '@progress/kendo-vue-layout';
import Logger from './Logger.vue';

import { Reveal } from '@progress/kendo-vue-animation';
import { data } from './data.js';
import './styles.css';

export default {
  components: {
    ExpansionPanel,
    ExpansionPanelContent,
    Reveal,
    Logger,
  },
  data() {
    return {
      expanded: [false, false, false, false, false],
      expansionPanelData: data,
      events: [],
    };
  },
  methods: {
    handleAction(ev, itemId) {
      let expandedItems = this.expanded.slice();
      expandedItems = expandedItems.map((el) => (el = false));
      expandedItems[itemId] = !this.expanded[itemId];
      this.expanded = expandedItems;

      this.events.unshift(
        'Action event triggered for item: ' +
          ev.event.target.firstElementChild.innerText
      );
    },
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
};
</script>
