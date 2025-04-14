<template>
  <div>
    <div :className="'example-config'">
      <Checkbox
        :checked="dynamicHeight"
        @change="onChange"
        :label="'Dynamic Height'"
      />
    </div>
    <Chart>
      <ChartTitle :text="'Sales'" />
      <ChartSeries>
        <ChartSeriesItem
          :data-items="seriesData"
          :dynamicHeight="dynamicHeight"
          :type="'pyramid'"
          :field="'count'"
          :categoryField="'stat'"
        >
          <ChartSeriesLabels :background="'none'" />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartTooltip :render="tooltipRenderer" />
      <ChartLegend :visible="false" />
    </Chart>
  </div>
</template>

<script>
  import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
    ChartSeriesLabels
  } from '@progress/kendo-vue-charts';
  import { Checkbox } from '@progress/kendo-vue-inputs';

  export default {
    components: {
      Chart,
      ChartTitle,
      ChartSeries,
      ChartSeriesItem,
      ChartTooltip,
      ChartLegend,
      ChartSeriesLabels,
      Checkbox
    },
    data() {
      return {
        seriesData: [{
            stat: 'Unique Visitors',
            count: 280022
        }, {
            stat: 'Downloads',
            count: 190374
        }, {
            stat: 'Purchases',
            count: 120392
        }],
        dynamicHeight: false
      };
    },
    methods: {
      tooltipRenderer(h, elem, props, listeners) {
        if (props?.point) {
          const { category, percentage } = props.point;
          return h('span', {
            innerHTML: `${category}: ${Math.floor(percentage * 100)}%`,
          });
        }
      },
      onChange(event) {
        this.dynamicHeight = event.value;
      }
    }
  };
</script>

<style scoped>
  .k-chart {
      width: 300px;
      margin: '0 auto';
  }
</style>
