<template>
<div>
    <chart ref="chart"
                 :data-source="grandSlam"
                 :title-text="'Roger Federer Grand Slam tournament performance'"
                 :legend-position="'bottom'"
                 :series-defaults-type="'line'"
                 :value-axis-line-visible="false"
                 :category-axis-major-grid-lines-visible="false"
                 :tooltip-visible="true"
                 :tooltip-template="tooltipTemplate"
                 :theme="'sass'">
                    <chart-series-item :name="'Wins'"
                                             :field="'win'"
                                             :category-field="'year'"
                                             :note-text-field="'extremum'"
                                             :notes-label-position="'bottom'"
                                             :notes-position="'bottom'">
                    </chart-series-item>
                    <chart-series-item :name="'Losses'"
                                             :field="'loss'">
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
            grandSlam: [{
                "year": "2003",
                "win": 13,
                "extremum": "MIN: 13",
                "loss": 3
            },{
                "year": "2004",
                "win": 22,
                "loss": 1
            },{
                "year": "2005",
                "win": 24,
                "loss": 2
            },{
                "year": "2006",
                "win": 27,
                "extremum": "MAX: 27",
                "loss": 1
            },{
                "year": "2007",
                "win": 26,
                "loss": 1
            },{
                "year": "2008",
                "win": 24,
                "loss": 3
            },{
                "year": "2009",
                "win": 26,
                "loss": 2
            },{
                "year": "2010",
                "win": 20,
                "loss": 3
            },{
                "year": "2011",
                "win": 20,
                "loss": 4
            },{
                "year": "2012",
                "win": 19,
                "loss": 3
            }],
            tooltipTemplate: '#= series.name #: #= value #'
        }
    }
}
</script>
