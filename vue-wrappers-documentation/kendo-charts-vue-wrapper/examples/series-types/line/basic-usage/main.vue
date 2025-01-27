<template>
<div>
    <chart ref="chart"
                 :title-text="'Gross domestic product growth /GDP annual %/'"
                 :legend-position="'bottom'"
                 :chart-area-background="''"
                 :series-defaults-type="'line'"
                 :series-defaults-style="'smooth'"
                 :value-axis-labels-format="'{0}%'"
                 :value-axis-line-visible="false"
                 :value-axis-axis-crossing-value="'-10'"
                 :category-axis-categories="categories"
                 :category-axis-major-grid-lines-visible="false"
                 :category-axis-labels-rotation="'auto'"
                 :tooltip-visible="true"
                 :tooltip-format="'{0}%'"
                 :tooltip-template="tooltiptemplate"
                 :theme="'sass'">
        <chart-series-item :name="'India'"
                                 :data="indiaData"
                                 :k-style="'step'">
        </chart-series-item>
        <chart-series-item :name="'World'" :data="worldData"></chart-series-item>
        <chart-series-item :name="'Haiti'" :data="haitiData"></chart-series-item>
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
            tooltiptemplate: '#= series.name #: #= value #',
            indiaData: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855],
            worldData: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727],
            haitiData: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590],
            categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011]
        }
    }
}
</script>
