<template>
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
        <Reveal
          :appear="expanded[panel.id]"
          :transition-enter-duration="150"
          :transition-exit-duration="150"
        >
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
</template>

<script setup>
import { ref } from 'vue';
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-vue-layout';
import { Reveal } from '@progress/kendo-vue-animation';
import { data } from './data.js';
import './styles.css';

const expanded = ref([false, false, false, false, false]);
const expansionPanelData = data;

function handleAction(ev, itemId) {
    expanded.value[itemId] = !expanded.value[itemId];
}
</script>
