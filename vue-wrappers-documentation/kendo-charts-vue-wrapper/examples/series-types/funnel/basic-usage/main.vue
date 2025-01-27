<template>
<div>
    <chart ref="chart"
            :title-text="'October'"
            :title-position="'bottom'"
            :legend-visible="false"
            :series-defaults-labels-visible="true"
            :series-defaults-labels-background="'transparent'"
            :series-defaults-labels-color="'white'"
            :series-defaults-labels-format="'N0'"
            :series-defaults-dynamic-slope="false"
            :series-defaults-dynamic-height="false"
            :series="series"
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
            tooltiptemplate: '#= category #',
            series: [{
                type: 'funnel',
                data: [{
                    category: 'Impressions ',
                    value: 434823,
                    color: '#0e5a7e'
                },
                {
                    category: 'Clicks',
                    value: 356854,
                    color: '#166f99'
                },
                {
                    category: 'Unique Visitors',
                    value: 280022,
                    color: '#2185b4'
                },
                {
                    category: 'Downloads',
                    value: 190374,
                    color: '#319fd2'
                },
                {
                    category: 'Purchases',
                    value: 120392,
                    color: '#3eaee2'
                }]
            }]
        }
    }
}
</script>
