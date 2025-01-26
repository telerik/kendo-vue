<template>
<div>
    <chart ref="chart"
            :title-text="'What is you favourite sport?'"
            :chart-area-background="''"
            :legend-position="'bottom'"
            :series="series"
            :series-defaults-labels-visible="true"
            :series-defaults-labels-position="'outsideEnd'"
            :series-defaults-labels-background="'transparent'"
            :series-defaults-labels-template="labelTemplate"
            :tooltip-visible="true"
            :tooltip-template="tooltipTemplate"
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
            series:  [{
                type: 'pie',
                data: [{
                    category: "Football",
                    value: 35
                }, {
                    category: "Basketball",
                    value: 25
                }, {
                    category: "Volleyball",
                    value: 20
                }, {
                    category: "Rugby",
                    value: 10
                }, {
                    category: "Tennis",
                    value: 10
                }]
            }],
            labelTemplate: "#= category # - #= kendo.format('{0:P}', percentage)#",
            tooltipTemplate: "#= category # - #= kendo.format('{0:P}', percentage) #"
        }
    }
}
</script>
