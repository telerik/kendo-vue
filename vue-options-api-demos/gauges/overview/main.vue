<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <RadialGauge :style="gaugeStyles" :pointer="pointer" />
    </div>
    <div class="col-sm-12 col-md-6">
      <ArcGauge
        :style="gaugeStyles"
        :value="value"
        :center-render="'myTemplate'"
      >
        <template v-slot:myTemplate="{ props }">
          <h3
            :style="{
              color: props.color,
            }"
          >
            {{ props.value }}%
          </h3>
        </template>
      </ArcGauge>
    </div>
    <div class="col-sm-12 col-md-6">
      <CircularGauge
        :style="gaugeStyles"
        :value="value"
        :centerRender="'myTemplate'"
      >
        <template v-slot:myTemplate="{ props }">
          <h3
            :style="{
              color: props.color,
            }"
          >
            {{ props.value }}%
          </h3>
        </template>
      </CircularGauge>
    </div>
    <div class="col-sm-12 col-md-6">
      <LinearGauge :style="gaugeStyles" :pointer="pointer" />
    </div>
  </div>
</template>

<script>
import {
  ArcGauge,
  CircularGauge,
  LinearGauge,
  RadialGauge,
} from "@progress/kendo-vue-gauges";

export default {
  components: {
    ArcGauge,
    CircularGauge,
    LinearGauge,
    RadialGauge,
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
        display: "block",
      },
    };
  },
};
</script>
