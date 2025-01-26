<template>
<div>
    <chart ref="chart"
            :data-source="requestData"
            :title-text="'Request latency breakdown'"
            :legend-visible="false"
            :axis-defaults-major-grid-lines-visible="false"
            :value-axis-labels-format="'{0} ms'"
            :theme="'sass'">
        <chart-series-item :type="'horizontalWaterfall'"
                                 :field="'elapsed'"
                                 :category-field="'caption'"
                                 :summary-field="'summary'"
                                 :color="color">
        </chart-series-item>
    </chart>
</div>
</template>

<script>
import { Chart, ChartSeriesItem } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart,
        'chart-series-item': ChartSeriesItem
    },
    data: function() {
        return {
            palette: [
                "#95c3cd", "#abc75b", "#c6816f", "#968cb2", "#c0c0c0", "#2ba6ff"
            ],
            requestData: [{
                caption: "DNS Lookup",
                elapsed: 20
            }, {
                caption: "Connecting",
                elapsed: 122
            }, {
                caption: "Sending",
                elapsed: 30
            }, {
                caption: "Waiting",
                elapsed: 421
            }, {
                caption: "Receiving",
                elapsed: 357
            }, {
                caption: "Total",
                summary: "total"
            }]
        }
    },
    methods: {
        color: function(point) {
            return this.palette[point.index % this.palette.length];
        }
    }
}
</script>
