<template>
  <div>
    <div class="example-config">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <label>
            <Switch :checked="showLabels" @change="onShowLabelChange" />
            &nbsp;Show Labels
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <Switch :checked="showTicks" @change="onShowTicksChange" />
            &nbsp;Show Ticks
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <input type="color" :value="ticksColor" @change="onTicksColorChange" />
            &nbsp;Ticks Color
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <input type="color" :value="labelsColor" @change="onLabelsColorChange" />
            &nbsp;Labels Color
          </label>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <label>
            <NumericTextBox
              :width="80"
              @change="onRangeSizeChange"
              :value="rangeSize"
              :min="1"
              :max="30"
            />
            &nbsp;Range Size
          </label>
        </div>
        <div class="col-sm-12 col-md-4">
          <label>
            <DropDownList
              :style="{ width: 80 }"
              :data-items="['round', 'butt']"
              @change="onRangeLineCapChange"
              :value="rangeLineCap"
            />
            &nbsp;Range Line Cap
          </label>
        </div>
        <div class="col-sm-12 col-md-4">
          <label>
            <input
              type="color"
              :value="rangePlaceholderColor"
              @change="onRangePlaceholderColorChange"
            />
            &nbsp;Range Placeholder Color
          </label>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <label>
            <Slider
              :min="-90"
              :max="90"
              :value="startAngle"
              :style="{ verticalAlign: 'middle' }"
              @change="onStartAngleChange"
            />
            &nbsp;Start angle
          </label>
        </div>
        <div class="col-sm-12 col-md-6">
          <label>
            <Slider
              :min="90"
              :max="270"
              :value="endAngle"
              :style="{ verticalAlign: 'middle' }"
              @change="onEndAngleChange"
            />
            &nbsp;End angle
          </label>
        </div>
      </div>
      <hr />
      <label>
        <Switch :checked="reverse" @change="onReverseChange" />
        &nbsp;Reverse
      </label>
    </div>
    <ArcGauge :value="30" :transitions="false" :scale="arcScaleConfig" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ArcGauge } from '@progress/kendo-vue-gauges';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { NumericTextBox, Switch } from '@progress/kendo-vue-inputs';
import { Slider } from '@progress/kendo-vue-inputs';

const showLabels = ref(true);
const showTicks = ref(true);
const ticksColor = ref('#f44ad2');
const labelsColor = ref('#0000ff');
const rangeSize = ref(15);
const rangeLineCap = ref('round');
const rangePlaceholderColor = ref('#e6e5e5');
const startAngle = ref(0);
const endAngle = ref(180);
const reverse = ref(false);

const arcScaleConfig = computed(() => ({
    labels: {
        format: 'c',
        color: labelsColor.value,
        visible: showLabels.value,
    },
    majorTicks: {
        visible: showTicks.value,
        color: ticksColor.value,
    },
    minorTicks: {
        visible: showTicks.value,
        color: ticksColor.value,
    },
    rangeSize: rangeSize.value,
    rangeLineCap: rangeLineCap.value,
    rangePlaceholderColor: rangePlaceholderColor.value,
    startAngle: startAngle.value,
    endAngle: endAngle.value,
    reverse: reverse.value,
}));

function onShowLabelChange() {
    showLabels.value = !showLabels.value;
}

function onShowTicksChange() {
    showTicks.value = !showTicks.value;
}

function onRangeSizeChange(e) {
    rangeSize.value = e.value;
}

function onRangeLineCapChange(e) {
    rangeLineCap.value = e.value;
}

function onStartAngleChange(e) {
    startAngle.value = parseInt(e.value, 10);
}

function onEndAngleChange(e) {
    endAngle.value = parseInt(e.value, 10);
}

function onReverseChange() {
    reverse.value = !reverse.value;
}

function onTicksColorChange(e) {
    ticksColor.value = e.target.value;
}

function onLabelsColorChange(e) {
    labelsColor.value = e.target.value;
}

function onRangePlaceholderColorChange(e) {
    rangePlaceholderColor.value = e.target.value;
}
</script>
