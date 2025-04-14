<template>
  <div>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
      <div :style="{ display: 'flex', justifyContent: 'center' }">
        <span
          class="k-color-primary"
          :style="{ textTransform: 'uppercase', padding: '4px 0' }"
          >Configurator</span
        >
      </div>
      <div
        class="example-config"
        :style="{
          display: 'flex',
          flexWrap: 'wrap',
        }"
      >
        <div>
          <b>Select data refresh rate:</b>
          <radiogroup
            :data-items="radioGroupItems"
            :value="radiogroupValue"
            @change="radioChange"
          />
        </div>
      </div>
    </div>
    <grid :grid-data="data"></grid>
  </div>
</template>

<script>
import { RadioGroup } from '@progress/kendo-vue-inputs';
import Grid from './Grid.vue';
import { FinancialData } from './financial-data';
import { updateRandomPrices } from './services';

export default {
  components: {
    Grid: Grid,
    radiogroup: RadioGroup,
  },
  data() {
    return {
      data: [],
      intervalRef: null,
      radiogroupValue: 50,
      radioGroupItems: [
        {
          label: '1000 milliseconds',
          value: 1000,
        },
        {
          label: '500 milliseconds',
          value: 500,
        },
        {
          label: '50 milliseconds',
          value: 50,
        },

        {
          label: '1 millisecond',
          value: 1,
        },
        {
          label: '2000 milliseconds',
          value: 2000,
        },
      ],
    };
  },
  created() {
    this.startDataGeneration(this.radiogroupValue);
  },
  methods: {
    radioChange(e) {
      this.radiogroupValue = e.value;
      this.startDataGeneration(this.radiogroupValue);
    },
    startDataGeneration() {
      this.dataReset();
      this.startLiveUpdate(this.radiogroupValue);
    },
    dataReset(volume = 10) {
      clearInterval(this.intervalRef);
      const financialData = new FinancialData();
      this.data = financialData.generateData(volume);
    },
    startLiveUpdate(interval) {
      clearInterval(this.intervalRef);
      this.intervalRef = setInterval(() => {
        this.data = updateRandomPrices(this.data);
      }, interval);
    },
  },
};
</script>

<style></style>
