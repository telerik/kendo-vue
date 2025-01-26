<template>
  <kendo-lineargauge  :scale-min="0"
                        :scale-max="50">
            <kendo-lineargauge-pointer :value="10" :color="'#ff6358'"></kendo-lineargauge-pointer>
    </kendo-lineargauge>
</template>
<script>
import { LinearGauge, LinearGaugePointer } from '@progress/kendo-gauges-vue-wrapper';

export default {
    components: {
        'kendo-lineargauge': LinearGauge,
        'kendo-lineargauge-pointer':LinearGaugePointer
    }
}
</script>
