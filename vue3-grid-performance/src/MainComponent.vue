<template>
  <div>
    <div class='row m-3'>
      <div class='col-3'>
        <div :style="{ minWidth: '140px' }">
          <Switch @change="onColumnMenuChange" :checked="showColumnMenu" />
          &nbsp;Column Menu
        </div>
      </div>
      <div class='col-3'>
        <div :style="{ minWidth: '140px' }">
          <Switch @change="onColumnVirtualizationChange" :checked="enableColumnVirtualization" />
          &nbsp;Column Virtualization
        </div>
      </div>
      <div class='col-3'>
        <div :style="{ minWidth: '140px' }">
          <Switch @change="onGroupingChange" />
          &nbsp;Grouping
        </div>
      </div>
    </div>
    <div class='row m-3'>
      <div class='col-3'>
        <label>
          Records: {{ currentValue }} <br />
          <Slider :min="0" :max="1000000" :step="VOLUME_STEP" :defaultValue="VOLUME_INITIAL" @change="onVolumeChange"
            :disabled="liveUpdating" />
        </label>
      </div>
      <div class='col-3'>
        <label>
          Frequency: {{ currentFrequency }} ms <br />
          <Slider :min="100" :max="3000" :step="10" :defaultValue="FREQUENCY_STEP" @change="onFrequencyChange"
            :disabled="liveUpdating" />
        </label>
      </div>
    </div>
    <div class='row m-3'>
      <div class='col'>
        <ButtonGroup>
          <KButton v-for="(btn, key) in buttonsData" :toggable="true" :icon="btn.icon" :key="key"
            :style="{ width: '200px' }" :name="key" @click="onButtonGroupClick"> {{ btn.title }}</KButton>
        </ButtonGroup>
      </div>
    </div>
  </div>
  <grid :grid-data="data" :show-column-menu="showColumnMenu" :groupable="groupable"
    :enable-column-virtualization="enableColumnVirtualization"></grid>

</template>

<script>
import Grid from './components/Grid.vue';
import { Slider, Switch } from "@progress/kendo-vue-inputs";
import { Button, ButtonGroup } from "@progress/kendo-vue-buttons";
import { FinancialData } from './data-service/financial-data';
import { updateRandomPrices, updateAllPrices } from './data-service/services';


export default {
  components: {
    Grid,
    Slider, Switch,
    KButton: Button,
    ButtonGroup
  },
  data() {
    return {
      data: [],
      intervalRef: null,
      showColumnMenu: true,
      enableColumnVirtualization: true,
      liveUpdating: false,
      VOLUME_STEP: 1000,
      VOLUME_INITIAL: 10000,
      FREQUENCY_STEP: 100,
      currentFrequency: 100,
      currentValue: 100,
      groupable: false,
      buttonsData: {
        live: {
          title: 'Live Prices',
          icon: 'refresh'
        },
        liveAll: {
          title: 'Live All Prices',
          icon: 'refresh'
        },
        stop: {
          title: 'Stop',
          icon: 'stop'
        }
      },
    }
  },
  created() {
    this.generateNewData();
  },
  methods: {
    generateNewData() {
      const financialData = new FinancialData();
      this.data = financialData.generateData(this.currentValue);
    },
    onFrequencyChange(e) {
      this.currentFrequency =
        Math.floor(e.value / this.FREQUENCY_STEP) * this.FREQUENCY_STEP
    },
    startDataGeneration() {
      this.dataReset();
      this.startLiveUpdate(this.currentFrequency);
    },
    dataReset() {
      clearInterval(this.intervalRef);
    },
    startLiveUpdate(interval) {
      clearInterval(this.intervalRef);
      this.intervalRef = setInterval(() => {
        this.gridData = updateRandomPrices(this.data);
      }, interval);
    },
    startLiveUpdateAll(interval) {
      console.log(this.intervalRef)
      clearInterval(this.intervalRef);
      this.intervalRef = setInterval(() => {
        this.gridData = updateAllPrices(this.data);
      }, interval);
    },
    stopLiveUpdate() {
      clearInterval(this.intervalRef);
    },
    onColumnMenuChange() {
      this.showColumnMenu = !this.showColumnMenu;
    },
    onColumnVirtualizationChange() {
      this.enableColumnVirtualization = !this.enableColumnVirtualization;
    },
    onGroupingChange() {
      this.groupable = !this.groupable;
    },
    onVolumeChange(e) {
      this.currentValue = Math.floor(e.value / this.VOLUME_STEP) * this.VOLUME_STEP;
      this.generateNewData();
    },
    onButtonGroupClick(event) {
      const currentButton = event.currentTarget.name;

      this.selectedButton = currentButton;
      switch (currentButton) {
        case "live":
          this.startLiveUpdate(this.currentFrequency);
          this.liveUpdating = true;
          break;
        case "liveAll":
          this.startLiveUpdateAll(this.currentFrequency);
          this.liveUpdating = true;
          break;
        case "stop":
          this.stopLiveUpdate();
          this.liveUpdating = false;
          break;
        default:
      }
    }
  },
};
</script>