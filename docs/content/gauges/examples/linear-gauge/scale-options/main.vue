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
        <div class="col-sm-12 col-md-3">
          <label>
            <NumericTextBox @change="onLineWidthChange" :value="lineWidth" :min="1" :max="30" />
            &nbsp;Line Width
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <input type="color" :value="lineColor" @change="onLineColorChange" />
            &nbsp;Line Color
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <NumericTextBox @change="onRangeSizeChange" :value="rangeSize" :min="1" :max="30" />
            &nbsp;Range Size
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <input type="color" :value="rangeColor" @change="onRangeColorChange" />
            &nbsp;Range Color
          </label>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <label>
            <Switch :checked="vertical" @change="onVerticalChange" />
            &nbsp;Vertical
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <Switch :checked="reverse" @change="onReverseChange" />
            &nbsp;Reverse
          </label>
        </div>
      </div>
    </div>
    <LinearGauge :pointer="pointer" :transitions="false" :scale="linearScaleConfig" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { LinearGauge } from '@progress/kendo-vue-gauges';
import { NumericTextBox, Switch } from '@progress/kendo-vue-inputs';

const pointer = ref({ value: 30 });
const showLabels = ref(true);
const showTicks = ref(true);
const ticksColor = ref('#008000');
const labelsColor = ref('#0000ff');
const rangeSize = ref(4);
const rangeColor = ref('#ff6358');
const lineWidth = ref(2);
const lineColor = ref('#656565');
const reverse = ref(false);
const vertical = ref(true);

const linearScaleConfig = computed(() => ({
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
    reverse: reverse.value,
    vertical: vertical.value,
    ranges: [
        {
            from: 0,
            to: 30,
            color: rangeColor.value,
        },
    ],
    line: {
        color: lineColor.value,
        width: lineWidth.value,
    },
}));

function onShowLabelChange() {
    showLabels.value = !showLabels.value;
}

function onShowTicksChange() {
    showTicks.value = !showTicks.value;
}

function onLineWidthChange(e) {
    lineWidth.value = e.value;
}

function onRangeSizeChange(e) {
    rangeSize.value = e.value;
}

function onReverseChange() {
    reverse.value = !reverse.value;
}

function onVerticalChange() {
    vertical.value = !vertical.value;
}

function onTicksColorChange(e) {
    ticksColor.value = e.target.value;
}

function onLabelsColorChange(e) {
    labelsColor.value = e.target.value;
}

function onLineColorChange(e) {
    lineColor.value = e.target.value;
}

function onRangeColorChange(e) {
    rangeColor.value = e.target.value;
}
</script>
