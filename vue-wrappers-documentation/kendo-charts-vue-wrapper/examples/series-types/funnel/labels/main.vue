<template>
<div>
    <div style="width: 45%; display: inline-block;">
        <h4>Align Label:</h4>
        <input id="alignCenter"
               name="align"
               type="radio"
               value="center"
               autocomplete="off"
               v-model="labelAlign"/>
        <label for="alignCenter">Center</label>
        <br/>
        <input id="alignLeft"
               name="align"  
               type="radio"
               value="left"
               autocomplete="off"
               v-model="labelAlign"/>
        <label for="alignLeft">Left</label>
        <br/>
        <input id="alignRight"
               name="align"  
               type="radio"
               value="right"
               autocomplete="off"
               v-model="labelAlign"/>
        <label for="alignRight">Right</label>
    </div>
    <div style="width: 45%; display: inline-block;">
        <h4>Position Label:</h4>
        <input id="positionCenter"
               name="position"
               type="radio"
               value="center"
               autocomplete="off"
               v-model="labelPosition"/>
        <label for="positionCenter">Center</label>
        <br/>
        <input id="positionTop"
               name="position"  
               type="radio"
               value="top"
               autocomplete="off"
               v-model="labelPosition"/>
        <label for="positionTop">Top</label>
        <br/>
        <input id="positionBottom"
               name="position"  
               type="radio"
               value="bottom"
               autocomplete="off"
               v-model="labelPosition"/>
        <label for="positionBottom">Bottom</label>
    </div>
    <chart ref="chart"
                 :title-text="'The AIDA model'"
                 :legend-position="'top'"
                 :tooltip-visible="true"
                 :tooltip-template="tooltipTemplate"
                 :series-defaults-dynamic-height="false"
                 :theme="'sass'">
        <chart-series-item :type="'funnel'"
                            :data="seriesData"
                            :labels-template="labelTemplate"
                            :labels-visible="true"
                            :labels-font="'15px sans-serif'"
                            :labels-background="'transparent'"
                            :labels-color="'#000'"
                            :labels-padding="5"
                            :labels-format="'N0'"
                            :labels-border="labelBorder"
                            :labels-align="labelAlign"
                            :labels-position="labelPosition">
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
      },
      labelPosition(){
        var c = this.$refs.chart
        c.updateWidget();
      }
    },
    data: function() {
        return {
            labelTemplate: "#= category #",
            labelBorder: {
                width: 1,
                dashType: "dot",
                color: "#000"
            },
            labelAlign: "center",
            labelPosition: "center",
            seriesData: [{
                category: "Awareness",
                value: 4
            }, {
                category: "Interest",
                value: 3
            }, {
                category: "Desire",
                value: 2
            }, {
                category: "Action",
                value: 1
            }],
            tooltipTemplate: "#= category # - #= kendo.format('{0:P}', percentage) #"
        }
    }
}
</script>
