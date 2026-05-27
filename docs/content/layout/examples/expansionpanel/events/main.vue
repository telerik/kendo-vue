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
            <ExpansionPanelContent v-if="expanded[panel.id]">
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
    <Logger title="Events list" :events="eventsList" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-vue-layout';
import Logger from './Logger.vue';
import { Reveal } from '@progress/kendo-vue-animation';
import { data } from './data.js';
import './styles.css';

const expanded = ref([false, false, false, false, false]);
const expansionPanelData = data;
const events = ref([]);

function handleAction(ev, itemId) {
    const expandedItems = expanded.value.map(() => false);
    expandedItems[itemId] = !expanded.value[itemId];
    expanded.value = expandedItems;

    events.value.unshift(
        'Action event triggered for item: ' +
      ev.event.target.firstElementChild.innerText
    );
}

const eventsList = computed(() => events.value);
</script>
