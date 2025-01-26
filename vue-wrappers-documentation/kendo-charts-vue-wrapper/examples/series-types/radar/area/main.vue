<template>
<div>
    <chart ref="chart"
            :title-text="'Employment candidate review'"
            :legend-position="'bottom'"
            :series-defaults-type="'radarArea'"
            :value-axis-labels-format="'{0}%'"
            :value-axis-line-visible="false"
            :category-axis-categories="categories"
            :category-axis-major-grid-lines-visible="false"
            :theme="'sass'">
            <chart-series-item :name="'Andrew Dodsworth'" :data="andrewsData"></chart-series-item>
            <chart-series-item :name="'Margaret Peacock'" :data="margaretsData"></chart-series-item>
            <chart-series-item :name="'Nancy Callahan'" :data="nancysData"></chart-series-item>
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
            andrewsData: [10, 3, 3, 10, 2, 10],
            margaretsData: [9, 7, 7, 9, 6, 7],
            nancysData: [4, 10, 10, 5, 5, 4],
            categories: [
                "Experience", "Communication", "Friendliness",
                "Subject knowledge", "Presentation", "Education"
            ]
        }
    }
}
</script>
