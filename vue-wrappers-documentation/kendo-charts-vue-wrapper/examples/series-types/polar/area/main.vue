<template>
<div>
    <chart ref="chart"
            :title-text="'Polar area'"
            :legend-position="'bottom'"
            :theme="'sass'">
            <chart-series-item :type="'polarArea'"
                                        :data="sampleData">
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
        return {
            sampleData: [
                [10, 10], [30, 20], [50, 30],
                [70, 20], [90, 10], [90, 0],
                [230, 10], [235, 20], [240, 30],
                [245, 20], [250, 10]
            ]
        }
    }
}
</script>
