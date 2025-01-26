<template>
<div>
    <chart :render-as="'canvas'"
                 :data-source="chartData"
                 :series="series"
                 :pannable-lock="'y'"
                 :zoomable-mousewheel-lock="'y'"
                 :zoomable-selection-lock="'y'"
                 :category-axis="categoryAxis"
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
            chartData: this.chartValues(),
            series: [{
                type: "column",
                field: "value",
                categoryField: "category"
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
                min: 0,
                max: 10,
                labels: {
                    rotation: "auto"
                }
            },
            tooltip: {
                visible: true,
                template: "#= series.name #: #= value #"
            }
        }
    },
    methods: {
        chartValues: function() {
            var data = [];

            for (var i = 0; i < 100; i++) {
                var val = Math.round(Math.random() * 10);

                data.push({
                    category: "C" + i,
                    value: val
                });
            }

            return data;
        }
    }
}
</script>
