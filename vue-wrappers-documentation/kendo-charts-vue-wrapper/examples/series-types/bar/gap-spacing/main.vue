<template>
<div>
    <span>Gap: </span>
    <chart :title-text="'Site Visitors Stats /thousands/'"
                 :legend-visible="false"
                 :series-defaults-type="'column'"
                 :category-axis="categoryAxis"
                 :value-axis="valueAxis"
                 :tooltip="tooltip"
                 :theme="'sass'">
        <chart-series-item :gap="0.3"
                                 :spacing="0.6"
                                 :name="'Total Visits'"
                                 :data="[56000, 63000, 74000, 91000, 117000, 138000]">
        </chart-series-item>
        <chart-series-item :gap="0.3"
                                 :spacing="0.6"
                                 :name="'Unique visitors'"
                                 :data="[52000, 34000, 23000, 48000, 67000, 83000]">
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
            valueAxis: [{
                max: 140000,
                line: {
                    visible: false
                },
                minorGridLines: {
                    visible: true
                },
                labels: {
                    rotation: "auto"
                }
            }],
            categoryAxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                majorGridLines: {
                    visible: false
                }
            },
            tooltip: {
                visible: true,
                template: "#= series.name #: #= value #"
            }
        }
    }
}
</script>
