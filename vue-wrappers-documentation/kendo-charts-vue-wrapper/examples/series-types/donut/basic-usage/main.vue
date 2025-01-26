<template>
<div>
    <chart ref="chart"
            :title-text="'Share of Internet Population Growth'"
            :title-position="'bottom'"
            :legend-visible=false
            :chart-area-background="''"
            :series-defaults-type="'donut'"
            :series-defaults-start-angle="150"
            :series="series"
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
                name: "2011",
                data: [{
                    category: "Asia",
                    value: 30.8,
                    color: "#9de219"
                },{
                    category: "Europe",
                    value: 21.1,
                    color: "#90cc38"
                },{
                    category: "Latin America",
                    value: 16.3,
                    color: "#068c35"
                },{
                    category: "Africa",
                    value: 17.6,
                    color: "#006634"
                },{
                    category: "Middle East",
                    value: 9.2,
                    color: "#004d38"
                },{
                    category: "North America",
                    value: 4.6,
                    color: "#033939"
                }]
            },
            {
                name: "2012",
                data: [{
                    category: "Asia",
                    value: 53.8,
                    color: "#9de219"
                },{
                    category: "Europe",
                    value: 16.1,
                    color: "#90cc38"
                },{
                    category: "Latin America",
                    value: 11.3,
                    color: "#068c35"
                },{
                    category: "Africa",
                    value: 9.6,
                    color: "#006634"
                },{
                    category: "Middle East",
                    value: 5.2,
                    color: "#004d38"
                },{
                    category: "North America",
                    value: 3.6,
                    color: "#033939"
                }],
                labels: {
                    visible: true,
                    background: "transparent",
                    position: "outsideEnd",
                    template: "#= category #: #= value#%"
                }
            }],
            tooltip: {
                visible: true,
                template: "#= category # (#= series.name #): #= value #%"
            }
        }
    }
}
</script>
