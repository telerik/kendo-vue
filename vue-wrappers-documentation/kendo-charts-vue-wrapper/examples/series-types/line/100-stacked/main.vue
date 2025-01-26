<template>
<div>
    <chart ref="chart"
                 :title-text="'Olympic Medals won by USA'"
                 :legend-visible="true"
                 :series-defaults-type="'line'"
                 :series-defaults-stack-type="'100%'"
                 :value-axis-line-visible="false"
                 :value-axis-axis-minor-grid-lines-visible="true"
                 :category-axis-categories="categories"
                 :category-axis-major-grid-lines-visible="false"
                 :tooltip-visible="true"
                 :tooltip-template="tooltiptemplate"
                 :theme="'sass'">
                    <chart-series-item :name="'Gold Medals'"
                                             :data="goldMedalsData"
                                             :color="'#f3ac32'"
                                             :missing-values="'gap'">
                    </chart-series-item>
                    <chart-series-item :name="'Silver Medals'"
                                             :data="silverMedalsData"
                                             :color="'#b8b8b8'"
                                             :missing-values="'gap'">
                    </chart-series-item>
                    <chart-series-item :name="'Bronze Medals'"
                                             :data="bronzeMedalsData"
                                             :color="'#bb6e36'"
                                             :missing-values="'gap'">
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
            goldMedalsData: [40, 32, 34, 36, 45, 33, 34, null, 83, 36, 37, 44, 37, 35, 36, 46],
            silverMedalsData: [19, 25, 21, 26, 28, 31, 35, null, 60, 31, 34, 32, 24, 40, 38, 29],
            bronzeMedalsData: [17, 17, 16, 28, 34, 30, 25, null, 30, 27, 37, 25, 33, 26, 36, 29],
            categories: [1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012],
            tooltiptemplate: '#= series.name #: #= value #',
        }
    }
}
</script>
