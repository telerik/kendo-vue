<template>
<div>
    <chart ref="chart"
                 :title-text="'Charge current vs. charge time'"
                 :legend-visible="true"
                 :series-defaults-type="'scatterLine'"
                 :series-defaults-style="'smooth'"
                 :x-axis-max="90"
                 :x-axis-title-text="'Time'"
                 :x-axis-labels-format="'{0}m'"
                 :y-axis-max="100"
                 :y-axis-title-text="'Charge'"
                 :y-axis-labels-format="'{0}%'"
                 :tooltip-visible="true"
                 :tooltip-format="'{1}% in {0} minutes'"
                 :theme="'sass'">
        <chart-series-item :name="'0.8C'"
                                 :data="[[10, 10], [15, 20], [20, 25], [32, 15], [43, 50], [55, 30], [60, 70], [70, 50], [90, 100]]">
        </chart-series-item>
        <chart-series-item :name="'1.6C'"
                                 :data="[[10, 40], [17, 50], [22, 70], [35, 60], [47, 95], [60, 100]]">
        </chart-series-item>
        <chart-series-item :name="'3.1C'"
                                 :data="[[10, 70], [13, 90], [25, 100]]">
        </chart-series-item>
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
        return {}
    }
}
</script>
