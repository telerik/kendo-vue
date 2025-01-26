<template>
 <div class="example-config">
        <kendo-slider v-model="currentValue"
                    :min="0"
                    :max="50"
                    :small-step="10">
        </kendo-slider>
        <label for="value">Value</label>
    </div>
    <kendo-lineargauge ref="lineargauge" :gauge-area-width="250"
                       :scale-major-unit="20"
                       :scale-minor-unit="2"
                       :scale-min="0"
                       :value="20"
                       :scale-max="50"
                       :scale-vertical="true">
        <kendo-lineargauge-pointer :value="20" :color="'#ff6358'"></kendo-lineargauge-pointer>
    </kendo-lineargauge>
</template>
<script>
import { Slider } from '@progress/kendo-inputs-vue-wrapper';
import { LinearGauge, LinearGaugePointer } from '@progress/kendo-gauges-vue-wrapper';

export default {
    name: 'App',
    components: {
        'kendo-slider': Slider,
        'kendo-lineargauge': LinearGauge,
        'kendo-lineargauge-pointer':LinearGaugePointer
    },
    data: function () {
        return {
            currentValue: 20
        };
    },
    watch: {
        'currentValue': function (newValue){
            this.$refs.lineargauge.kendoWidget().value(newValue)
        }
    }
}
</script>
