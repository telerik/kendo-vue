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
            <input
              type="color"
              :value="ticksColor"
              @change="onTicksColorChange"
            />
            &nbsp;Ticks Color
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <input
              type="color"
              :value="labelsColor"
              @change="onLabelsColorChange"
            />
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
            <input
              type="color"
              :value="rangeColor"
              @change="onRangeColorChange"
            />
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
              :style="{
                verticalAlign: 'middle',
              }"
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
              :style="{
                verticalAlign: 'middle',
              }"
              @change="onEndAngleChange"
            />
            &nbsp;End angle
          </label>
        </div>
      </div>
      <hr />
      <label>
        <Switch @checked="reverse" @change="onReverseChange" />
        &nbsp;Reverse
      </label>
    </div>
    <RadialGauge
      :pointer="pointer"
      :transitions="false"
      :scale="radialScaleConfig"
    />
  </div>
</template>

<script lang="ts">
import { RadialGauge } from '@progress/kendo-vue-gauges';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { NumericTextBox, Switch } from '@progress/kendo-vue-inputs';
import { Slider } from '@progress/kendo-vue-inputs';

export default {
  components: {
    RadialGauge,
    DropDownList,
    NumericTextBox,
    Switch,
    Slider,
  },
  computed: {
    radialScaleConfig() {
      return {
        labels: {
          format: 'c',
          color: this.labelsColor,
          visible: this.showLabels,
        },
        majorTicks: {
          visible: this.showTicks,
          color: this.ticksColor,
        },
        minorTicks: {
          visible: this.showTicks,
          color: this.ticksColor,
        },
        rangeSize: this.rangeSize,
        startAngle: this.startAngle,
        endAngle: this.endAngle,
        reverse: this.reverse,
        ranges: [
          {
            from: 0,
            to: 50,
            color: this.rangeColor,
          },
        ],
      };
    },
  },
  data() {
    return {
      pointer: {
        value: 30,
      },
      showLabels: true,
      showTicks: true,
      ticksColor: '#008000',
      labelsColor: '#0000ff',
      rangeSize: 10,
      rangeLineCap: 'round',
      rangeColor: '#ffcccc',
      startAngle: 0,
      endAngle: 180,
      reverse: false,
    };
  },
  methods: {
    onShowLabelChange() {
      this.showLabels = !this.showLabels;
    },
    onShowTicksChange() {
      this.showTicks = !this.showTicks;
    },
    onRangeSizeChange(e) {
      this.rangeSize = e.value;
    },
    onStartAngleChange(e) {
      this.startAngle = parseInt(e.value, 10);
    },
    onEndAngleChange(e) {
      this.endAngle = parseInt(e.value, 10);
    },
    onReverseChange() {
      this.reverse = !this.reverse;
    },
    onTicksColorChange(e) {
      this.ticksColor = e.target.value;
    },
    onLabelsColorChange(e) {
      this.labelsColor = e.target.value;
    },
    onRangeColorChange(e) {
      this.rangeColor = e.target.value;
    },
  },
};
</script>