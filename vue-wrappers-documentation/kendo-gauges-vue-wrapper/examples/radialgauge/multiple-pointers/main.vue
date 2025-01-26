<template>
 <kendo-radialgauge  :scale-min="0"
                        :scale-max="50">
        <kendo-radialgauge-pointer :value="30" :color="'blue'"></kendo-radialgauge-pointer>
        <kendo-radialgauge-pointer :value="20" :color="'red'"></kendo-radialgauge-pointer>
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
