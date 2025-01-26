<template>
<div>
    <chart ref="chart"
                 :title-text="'Browser Usage Trends'"
                 :legend-position="'bottom'"
                 :series-defaults-type="'area'"
                 :series-defaults-stack-type="'100%'"
                 :value-axis-line-visible="false"
                 :category-axis-categories="categories"
                 :category-axis-major-grid-lines-visible="false"
                 :tooltip-visible="true"
                 :tooltip-template-format="'{0}%'"
                 :tooltip-template="tooltipTemplate"
                 :theme="'sass'">
                    <chart-series-item :name="'Chrome'"
                                             :data="chromeData">
                    </chart-series-item>
                    <chart-series-item :name="'Firefox'"
                                             :data="firefoxData">
                    </chart-series-item>
                    <chart-series-item :name="'Internet Explorer'"
                                             :data="ieData">
                    </chart-series-item>
                    <chart-series-item :name="'Mozilla'"
                                             :data="mozillaData">
                    </chart-series-item>
                    <chart-series-item :name="'Opera'"
                                             :data="operaData">
                    </chart-series-item>
                    <chart-series-item :name="'Safari'"
                                             :data="safariData">
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
            chromeData: [0, 0, 0, 0, 3.6, 9.8, 22.4, 34.6],
            firefoxData: [0, 23.6, 29.9, 36.3, 44.4, 46.4, 43.5, 37.7],
            ieData: [76.2, 68.9, 60.6, 56.0, 46.0, 37.2, 27.5, 20.2],
            mozillaData: [16.5, 2.8, 2.5, 1.2, 0, 0, 0, 0],
            operaData: [1.6, 1.5, 1.5, 1.6, 2.4, 2.3, 2.2, 2.5],
            safariData: [0, 0, 0, 1.8, 2.7, 3.6, 3.8, 4.2],
            categories: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
            tooltipTemplate: '#= series.name #: #= value #'
        }
    }
}
</script>
