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
            <input type="color" :value="rangeColor" @change="onRangeColorChange" />
            &nbsp;Range Color
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
    <RadialGauge :pointer="pointer" :transitions="false" :scale="radialScaleConfig" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RadialGauge } from '@progress/kendo-vue-gauges';
import { NumericTextBox, Switch, Slider } from '@progress/kendo-vue-inputs';

const pointer = ref({ value: 30 });
const showLabels = ref(true);
const showTicks = ref(true);
const ticksColor = ref('#008000');
const labelsColor = ref('#0000ff');
const rangeSize = ref(10);
const rangeColor = ref('#ffcccc');
const startAngle = ref(0);
const endAngle = ref(180);
const reverse = ref(false);

const radialScaleConfig = computed(() => ({
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
    startAngle: startAngle.value,
    endAngle: endAngle.value,
    reverse: reverse.value,
    ranges: [
        {
            from: 0,
            to: 50,
            color: rangeColor.value,
        },
    ],
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

function onRangeColorChange(e) {
    rangeColor.value = e.target.value;
}
</script>
