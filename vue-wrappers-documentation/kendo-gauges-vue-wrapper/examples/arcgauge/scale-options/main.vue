<template>
 <kendo-arcgauge  :scale-min="0"
                        :scale-max="50"
                        :scale-start-angle="42">
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
},
    data: function () {
        return {
            value: 20
        };
    },
    watch: {
        'value': function (newValue){
            this.$refs.arcgauge.kendoWidget().value(newValue)
        }
    }
}
</script>
