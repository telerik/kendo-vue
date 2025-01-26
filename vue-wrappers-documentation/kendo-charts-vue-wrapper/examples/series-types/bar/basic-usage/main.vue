<template>
<div>
    <chart :title-text="'Site Visitors Stats /thousands/'"
            :legend-visible="false"
            :series-defaults-type="'bar'"
            :series="series"
            :category-axis="categoryAxis"
            :value-axis="valueAxis"
            :tooltip="tooltip"
            :theme="'sass'">
    </chart>
</div>
</template>

<script>
import { Chart } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart,
    },
    data: function() {
        return {
            series: [{
                name: "Total Visits",
                data: [56000, 63000, 74000, 91000, 117000, 138000]
            },
            {
                name: "Unique visitors",
                data: [52000, 34000, 23000, 48000, 67000, 83000]
            }],
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
