<template>
<kendo-arcgauge :value="42"
                    :scale-max="100">
        <kendo-arcgauge-color :to="25" :color="'#0058e9'"></kendo-arcgauge-color>
        <kendo-arcgauge-color :from="25" :to="50" :color="'#37b400'"></kendo-arcgauge-color>
        <kendo-arcgauge-color :from="50" :to="75" :color="'#ffc000'"></kendo-arcgauge-color>
        <kendo-arcgauge-color :from="75" :color="'#f31700'"></kendo-arcgauge-color>
    </kendo-arcgauge>
</template>
<script>
import { Slider } from '@progress/kendo-inputs-vue-wrapper';
import { ArcGauge, ArcGaugeColor } from '@progress/kendo-gauges-vue-wrapper';

export default {
name: 'App',
components: {
  'kendo-slider': Slider,
  'kendo-arcgauge':ArcGauge,
  'kendo-arcgauge-color': ArcGaugeColor
}
}
</script>
