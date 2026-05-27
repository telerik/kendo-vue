<template>
  <div>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
      <div :style="{ display: 'flex', justifyContent: 'center' }">
        <span
          class="k-color-primary"
          :style="{ textTransform: 'uppercase', padding: '4px 0' }"
        >
          Configurator
        </span>
      </div>
      <div
        class="example-config"
        :style="{ display: 'flex', flexWrap: 'wrap' }"
      >
        <div>
          <b>Select data refresh rate:</b>
          <RadioGroup
            :data-items="radioGroupItems"
            v-model="radiogroupValue"
            @change="radioChange"
          />
        </div>
      </div>
    </div>
    <Grid :grid-data="data" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import Grid from './Grid.vue';
import { FinancialData } from './financial-data';
import { updateRandomPrices } from './services';

const data = ref([]);
const intervalRef = ref(null);
const radiogroupValue = ref(50);
const radioGroupItems = [
    { label: '1000 milliseconds', value: 1000 },
    { label: '500 milliseconds', value: 500 },
    { label: '50 milliseconds', value: 50 },
    { label: '1 millisecond', value: 1 },
    { label: '2000 milliseconds', value: 2000 },
];

function radioChange(e) {
    radiogroupValue.value = e.value;
    startDataGeneration(radiogroupValue.value);
}

function startDataGeneration() {
    dataReset();
    startLiveUpdate(radiogroupValue.value);
}

function dataReset(volume = 10) {
    clearInterval(intervalRef.value);
    const financialData = new FinancialData();
    data.value = financialData.generateData(volume);
}

function startLiveUpdate(interval) {
    clearInterval(intervalRef.value);
    intervalRef.value = setInterval(() => {
        data.value = updateRandomPrices(data.value);
    }, interval);
}

onMounted(() => {
    startDataGeneration(radiogroupValue.value);
});
</script>

<style></style>
