<template>
<div>
    <chart ref="chart"
            :title-text="'Average Weather Conditions'"
            :series-defaults-labels-visible="true"
            :series-defaults-labels-from-template="fromtemplate"
            :series-defaults-labels-to-template="totemplate"
            :series="series"
            :value-axis-labels-format="'{0}%'"
            :value-axis-line-visible="false"
            :value-axis-axis-crossing-value="'-10'"
            :category-axis-categories="categories"
            :category-axis-labels-rotation="'auto'"
            :tooltip-visible="true"
            :tooltip-template="tooltiptemplate"
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
            fromtemplate: '#=value.from# °C',
            totemplate: '#=value.to# °C',
            tooltiptemplate: 'Avg Min Temp : #= value.from # °C <br> Avg Max Temp : #= value.to # °C',
            series: [{
                type: 'rangeArea',
                data: [
                    [5, 11],
                    [5, 13],
                    [7, 15],
                    [10, 19],
                    [13, 23],
                    [17, 28],
                    [20, 30],
                    [20, 30],
                    [17, 26],
                    [13, 22],
                    [9, 16],
                    [6, 13]
                ]
            }],
            categories: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
        }
    }
}
</script>
