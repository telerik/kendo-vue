<template>
<div>
    <chart :title-text="'Hybrid car mileage report'"
            :legend-position="'top'"
            :series="series"
            :category-axis="categoryAxis"
            :value-axis="valueAxis"
            :theme="'sass'">
    </chart>
</div>
</template>

<script>
import { Chart } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart
    },
    data: function() {
        return {
            series: [{
                type: "column",
                data: [20, 40, 45, 30, 50],
                stack: true,
                name: "on battery",
                color: "#cc6e38"
            }, {
                type: "column",
                data: [20, 30, 35, 35, 40],
                stack: true,
                name: "on gas",
                color: "#ef955f"
            }, {
                type: "line",
                data: [30, 38, 40, 32, 42],
                name: "mpg",
                color: "#ec5e0a",
                axis: "mpg"
            }, {
                type: "line",
                data: [7.8, 6.2, 5.9, 7.4, 5.6],
                name: "l/100 km",
                color: "#4e4141",
                axis: "l100km"
            }],
            valueAxis: [{
                title: { text: "miles" },
                min: 0,
                max: 100
            }, {
                name: "km",
                title: { text: "km" },
                min: 0,
                max: 161,
                majorUnit: 32
            }, {
                name: "mpg",
                title: { text: "miles per gallon" },
                color: "#ec5e0a"
            }, {
                name: "l100km",
                title: { text: "liters per 100km" },
                color: "#4e4141"
            }],
            categoryAxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                // Align the first two value axes to the left
                // and the last two to the right.
                //
                // Right alignment is done by specifying a
                // crossing value greater than or equal to
                // the number of categories.
                axisCrossingValues: [0, 0, 10, 10]
            }
        }
    }
}
</script>
