<template>
<div>
    <chart ref="chart"
                 :title-text="'Budget report'"
                 :legend-position="'bottom'"
                 :series-defaults-type="'radarLine'"
                 :series-defaults-style="'smooth'"
                 :value-axis-labels-format="'${0}'"
                 :tooltip-visible="true"
                 :tooltip-format="'${0} bln'"
                 :theme="'sass'">
                    <chart-series-item :name="'Market value as of 2007'" :data="marketOldData"></chart-series-item>
                    <chart-series-item :name="'Market value as of 2009'" :data="marketNewData"></chart-series-item>
    </chart>
</div>
</template>

<script>
import { Chart, ChartSeriesItem } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart,
        'chart-series-item': ChartSeriesItem
    },
    data: function() {
        return {
            marketOldData: [116, 165, 215, 75, 100, 49, 80, 116, 108, 90, 67, 76, 91, 255, 120],
            marketNewData: [64, 85, 97, 27, 16, 26, 35, 32, 26, 17, 10, 7, 19, 5]
        }
    }
}
</script>
