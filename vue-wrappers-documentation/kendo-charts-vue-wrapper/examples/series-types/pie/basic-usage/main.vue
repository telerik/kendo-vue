<template>
<div>
    <chart ref="chart"
            :title-text="'Share of Internet Population Growth, 2007 - 2012'"
            :title-position="'bottom'"
            :chart-area-background="''"
            :legend-visible="false"
            :series-defaults-labels-visible="true"
            :series-defaults-labels-background="'transparent'"
            :series-defaults-labels-template="labelTemplate"
            :series="series"
            :tooltip-visible="true"
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
            labelTemplate: '#= category # #= value #%',
            series: [{
                type: 'pie',
                startAngle: 150,
                data: [{
                    category: 'Asia',
                    value: 53.8,
                    color: '#9de219'
                },
                {
                    category: 'Europe',
                    value: 16.1,
                    color: '#90cc38'
                },
                {
                    category: 'Latin America',
                    value: 11.3,
                    color: '#068c35'
                },
                {
                    category: 'Africa',
                    value: 9.6,
                    color: '#006634'
                },
                {
                    category: 'Middle East',
                    value: 5.2,
                    color: '#004d38'
                },
                {
                    category: 'North America',
                    value: 3.6,
                    color: '#033939'
                }]
            }]
        }
    }
}
</script>
