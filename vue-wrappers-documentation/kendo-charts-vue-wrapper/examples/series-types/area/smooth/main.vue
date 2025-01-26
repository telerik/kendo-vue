<template>
<div>
    <chart ref="chart"
            :title-text="'Analog signal'"
            :legend-visible="false"
            :value-axis-max="22"
            :value-axis-title-text="'voltage'"
            :value-axis-major-grid-lines-visible="true"
            :value-axis-visible="false"
            :category-axis-title-text="'time'"
            :category-axis-major-grid-lines-visible="false"
            :category-axis-major-ticks-visible="false"
            :theme="'sass'">
            <chart-series-item :data="series"
                                        :type="'area'"
                                        :line-style="'smooth'">
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
            series: [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8]
        }
    }
}
</script>
