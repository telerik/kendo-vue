<template>
 <kendo-radialgauge  :scale-min="0"
                        :scale-max="50">
            <kendo-radialgauge-pointer :value="10" :color="'#ff6358'"></kendo-radialgauge-pointer>
    </kendo-radialgauge>
</template>
<script>
import { RadialGauge, RadialGaugePointer } from '@progress/kendo-gauges-vue-wrapper';

export default {
    components: {
    'kendo-radialgauge': RadialGauge,
    'kendo-radialgauge-pointer': RadialGaugePointer
    }
}
</script>
