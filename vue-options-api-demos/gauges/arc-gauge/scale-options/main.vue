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
    <ArcGauge :value="30" :transitions="false" :scale="arcScaleConfig" />
  </div>
</template>

<script>
import { ArcGauge } from "@progress/kendo-vue-gauges";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { NumericTextBox, Switch } from "@progress/kendo-vue-inputs";
import { Slider } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ArcGauge,
    DropDownList,
    NumericTextBox,
    Switch,
    Slider,
  },
  computed: {
    arcScaleConfig() {
      return {
        labels: {
          format: "c",
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
        rangeLineCap: this.rangeLineCap,
        rangePlaceholderColor: this.rangePlaceholderColor,
        startAngle: this.startAngle,
        endAngle: this.endAngle,
        reverse: this.reverse,
      };
    },
  },
  data() {
    return {
      showLabels: true,
      showTicks: true,
      ticksColor: "#f44ad2",
      labelsColor: "#0000ff",
      rangeSize: 15,
      rangeLineCap: "round",
      rangePlaceholderColor: "#e6e5e5",
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
    onRangeLineCapChange(e) {
      this.rangeLineCap = e.value;
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
    onRangePlaceholderColorChange(e) {
      this.rangePlaceholderColor = e.target.value;
    },
  },
};
</script>
