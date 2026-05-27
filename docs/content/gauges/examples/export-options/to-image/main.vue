<template>
  <div>
    <h5>Export to PNG</h5>
    <div class="example-config">
      <KButton @click="exportLinearGauge">Export Linear Gauge</KButton>
      <KButton @click="exportRadialGauge">Export Radial Gauge</KButton>
      <KButton @click="exportArcGauge">Export Arc Gauge</KButton>
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
          <template #myTemplate="{ props }">
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

<script setup>
import { ref } from 'vue';
import { ArcGauge, LinearGauge, RadialGauge } from '@progress/kendo-vue-gauges';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { exportImage } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

const value = ref(30);
const gaugeStyles = ref({ display: 'block' });
const linearGauge = ref(null);
const radialGauge = ref(null);
const arcGauge = ref(null);

const pointer = ref({
    value: value.value,
});

function exportGaugeVisual(gauge, callback) {
    gauge.exportVisual().then((gaugeVisual) => callback(gaugeVisual));
}

function exportGauge(gauge) {
    exportGaugeVisual(gauge, (gaugeVisual) =>
        exportImage(gaugeVisual).then((dataURI) => saveAs(dataURI, 'gauge.png'))
    );
}

function exportLinearGauge() {
    exportGauge(linearGauge.value);
}

function exportRadialGauge() {
    exportGauge(radialGauge.value);
}

function exportArcGauge() {
    exportGauge(arcGauge.value);
}
</script>
