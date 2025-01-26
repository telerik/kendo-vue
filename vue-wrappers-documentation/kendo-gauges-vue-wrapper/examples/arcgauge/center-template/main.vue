<template>
 <kendo-arcgauge :value="42"
                    :center-template="'#: value #%'">
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
