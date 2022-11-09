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
        <div class="col-sm-12 col-md-3">
          <label>
            <NumericTextBox
              @change="onLineWidthChange"
              :value="lineWidth"
              :min="1"
              :max="30"
            />
            &nbsp;Line Width
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <input
              type="color"
              :value="lineColor"
              @change="onLineColorChange"
            />
            &nbsp;Line Color
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
          <label>
            <NumericTextBox
              @change="onRangeSizeChange"
              :value="rangeSize"
              :min="1"
              :max="30"
            />
            &nbsp;Range Size
          </label>
        </div>
        <div class="col-sm-12 col-md-3">
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
        <div className="col-sm-12 col-md-3">
          <label>
            <Switch @checked="vertical" @change="onVerticalChange" />
            &nbsp;Vertical
          </label>
        </div>
        <div className="col-sm-12 col-md-3">
          <label>
            <Switch @checked="reverse" @change="onReverseChange" />
            &nbsp;Reverse
          </label>
        </div>
      </div>
    </div>
    <LinearGauge
      :pointer="pointer"
      :transitions="false"
      :scale="linearScaleConfig"
    />
  </div>
</template>

<script lang="ts">
import { LinearGauge } from "@progress/kendo-vue-gauges";
import { NumericTextBox, Switch } from "@progress/kendo-vue-inputs";

export default {
  components: {
    LinearGauge,
    NumericTextBox,
    Switch,
  },
  computed: {
    linearScaleConfig() {
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
        reverse: this.reverse,
        vertical: this.vertical,
        ranges: [
          {
            from: 0,
            to: 30,
            color: this.rangeColor,
          },
        ],
        line: {
          color: this.lineColor,
          width: this.lineWidth,
        },
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
      ticksColor: "#008000",
      labelsColor: "#0000ff",
      rangeSize: 4,
      rangeColor: "#ff6358",
      lineWidth: 2,
      lineColor: "#656565",
      reverse: false,
      vertical: true,
    };
  },
  methods: {
    onShowLabelChange() {
      this.showLabels = !this.showLabels;
    },
    onShowTicksChange() {
      this.showTicks = !this.showTicks;
    },
    onLineWidthChange(e) {
      this.lineWidth = e.value;
    },
    onRangeSizeChange(e) {
      this.rangeSize = e.value;
    },
    onReverseChange() {
      this.reverse = !this.reverse;
    },
    onVerticalChange() {
      this.vertical = !this.vertical;
    },
    onTicksColorChange(e) {
      this.ticksColor = e.target.value;
    },
    onLabelsColorChange(e) {
      this.labelsColor = e.target.value;
    },
    onLineColorChange(e) {
      this.lineColor = e.target.value;
    },
    onRangeColorChange(e) {
      this.rangeColor = e.target.value;
    },
  },
};
</script>

<style scoped>
.k-numerictextbox {
  width: 80px;
}
</style>