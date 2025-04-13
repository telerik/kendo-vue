<template>
  <div>
    <h5>Export to PNG</h5>
    <div class="example-config">
      <Button @click="exportLinearGauge">Export Linear Gauge</Button>
      <Button @click="exportRadialGauge">Export Radial Gauge</Button>
      <Button @click="exportArcGauge">Export Arc Gauge</Button>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <LinearGauge
          ref="linearGauge"
          :style="gaugeStyles"
          :pointer="pointer"
        />
      </div>
      <div class="col-sm-12 col-md-5">
        <RadialGauge
          ref="radialGauge"
          :style="gaugeStyles"
          :pointer="pointer"
        />
      </div>
      <div class="col-sm-12 col-md-5">
        <ArcGauge
          ref="arcGauge"
          :center-render="'myTemplate'"
          :style="gaugeStyles"
          :value="value"
        >
          <template v-slot:myTemplate="{ props }">
            <div
              :style="{
                color: props.color,
              }"
            >
              {{ props.value }}%
            </div>
          </template>
        </ArcGauge>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ArcGauge,
  LinearGauge,
  RadialGauge,
} from '@progress/kendo-vue-gauges';
import { Button } from '@progress/kendo-vue-buttons';
import { exportImage } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

export default {
  components: {
    ArcGauge,
    LinearGauge,
    RadialGauge,
    Button,
  },
  computed: {
    pointer() {
      return { value: this.value };
    },
  },
  data() {
    return {
      value: 30,
      gaugeStyles: {
        display: 'block',
      },
    };
  },
  methods: {
    exportGaugeVisual(gauge, callback) {
      gauge.exportVisual().then((gaugeVisual) => callback(gaugeVisual));
    },
    exportGauge(gauge) {
      this.exportGaugeVisual(gauge, (gaugeVisual) =>
        exportImage(gaugeVisual).then((dataURI) => saveAs(dataURI, 'gauge.png'))
      );
    },
    exportLinearGauge() {
      this.exportGauge(this.$refs.linearGauge);
    },
    exportRadialGauge() {
      this.exportGauge(this.$refs.radialGauge);
    },
    exportArcGauge() {
      this.exportGauge(this.$refs.arcGauge);
    },
  },
};
</script>
