<template>
<div>
    <h4>Labels Configuration</h4>
    <input name="alignType"
           type="radio"
           value="circle"
           autocomplete="off"
           v-model="labelAlign"/>
    <label for="alignCircle">Aligned in circle</label>
    <br/>
    <input name="alignType"
           type="radio"
           value="column"
           autocomplete="off"
           v-model="labelAlign"/>
    <label for="alignCircle">Aligned in columns</label>
    <chart ref="chart"
                 :title-text="'What is you favourite sport?'"
                 :legend-position="'top'"
                 :tooltip-visible="true"
                 :tooltip-template="template"
                 :theme="'sass'">
        <chart-series-item :type="'donut'"
                                 :data="seriesData"
                                 :labels-visible="true"
                                 :labels-template="template"
                                 :labels-position="'outsideEnd'"
                                 :labels-background="'transparent'"
                                 :labels-align="labelAlign">
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
    watch: {
      labelAlign(){
        var c = this.$refs.chart
        c.updateWidget();
      }
    },
    data: function() {
        return {
            labelAlign: "circle",
            seriesData: [{
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
            }],
            template: "#= category # - #= kendo.format('{0:P}', percentage) #"
        }
    }
}
</script>
