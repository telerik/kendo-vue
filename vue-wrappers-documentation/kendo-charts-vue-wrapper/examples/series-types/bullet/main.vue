<template>
<div>
    <chart :legend-visible=false
            :series="series"
            :chart-area-margin-left="0"
            :value-axis-plot-bands="plotBands"
            :value-axis-major-ticks-visible="false"
            :value-axis-min="715"
            :value-axis-max="795"
            :value-axis-minor-ticks-visible="true"
            :category-axis-major-grid-lines-visible="false"
            :category-axis-major-ticks-visible="false"
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
        'chart': Chart,
    },
    data: function() {
        return {
            bulletdata: [[750, 762.5]],
            plotBands: [{
                from: 715, to: 752, color: '#ccc', opacity: 0.6
            }, {
                from: 752, to: 772, color: '#ccc', opacity: 0.3
            }],
            tooltiptemplate: 'Maximum: #= value.target # <br /> Average: #= value.current #',
            series: [{
                type: 'bullet',
                data: [[750, 762.5]]
            }]
        }
    }
}
</script>
