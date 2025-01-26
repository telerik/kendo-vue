<template>
<div class="example-config">
        <kendo-slider v-model="value"
                      :min="0"
                      :max="50"
                      :small-step="10">
        </kendo-slider>
        <label for="value">Value</label>
    </div>
    <kendo-radialgauge ref="radialgauge"
                       :scale-minor-unit="5"
                       :scale-start-angle="-30"
                       :scale-end-angle="210"
                       :scale-max="50">
        <kendo-radialgauge-pointer :value="20" :color="'#ff6358'"></kendo-radialgauge-pointer>
    </kendo-radialgauge>
</template>
<script>
import { Slider } from '@progress/kendo-inputs-vue-wrapper';
import { RadialGauge, RadialGaugePointer } from '@progress/kendo-gauges-vue-wrapper';

export default {
    components: {
    'kendo-slider': Slider,
    'kendo-radialgauge': RadialGauge,
    'kendo-radialgauge-pointer': RadialGaugePointer
    },
    data: function() {
      return {
        value: 20
      };
    },
    watch: {
        'value': function (newValue){
            this.$refs.radialgauge.kendoWidget().value(newValue)
        }
    }
}
</script>
