<template>
<div>
    <chart ref="chart"
            :title-text="'Buck spread'"
            :legend-position="'bottom'"
            :series-defaults-type="'polarScatter'"
            :y-axis-max="10"
            :theme="'sass'">
            <chart-series-item :name="'at 3 ft'"
                                        :data="threeFeetData">
            </chart-series-item>
            <chart-series-item :name="'at 7 ft'"
                                        :data="sevenFeetData">
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
            threeFeetData: [
                [150, 3], [150, 3.1], [152, 3.2], [152, 3.1], [151, 3.2], [153, 3.3], [149, 3]
            ],
            sevenFeetData: [
                [270, 5], [250, 7], [259, 4], [270, 7], [265, 5], [250, 7], [263, 8], [261, 5]
            ]
        }
    }
}
</script>
