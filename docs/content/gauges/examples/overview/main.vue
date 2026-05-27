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
        <template #myTemplate="{ props }">
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
        <template #myTemplate="{ props }">
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

<script setup>
import { ref, computed } from 'vue';
import { ArcGauge, CircularGauge, LinearGauge, RadialGauge } from '@progress/kendo-vue-gauges';

const value = ref(30);

const pointer = computed(() => ({
    value: value.value,
}));

const gaugeStyles = ref({
    display: 'block',
});
</script>
