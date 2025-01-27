<template>
<div>
    <chart :title-text="'Kendo Chart Example'"
                 :legend-position="'bottom'"
                 :series="series"
                 :category-axis-categories="categories"
                 :value-axis="axis"
                 :theme="'sass'"
                 @axislabelclick="onAxisLabelClick">
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
                name: 'Temperature',
                data: [20, 25, 32],
                axis: "temperature"
            },
            {
                name: 'Humidity',
                data: [40, 50, 80],
                axis: "humidity"
            }],
            categories: ["Aug", "Sep", "Oct"],
            axis: [{
                name: "temperature",
                labels: {
                    format: "{0}C"
                }
            },
            {
                name: "humidity",
                labels: {
                    format: "{0}%"
                }
            }]
        }
    },
    methods: {
        onAxisLabelClick: function(e) {
            console.log("Event :: axisLabelClick");
        }
    }
}
</script>
