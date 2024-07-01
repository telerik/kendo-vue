<template>
    <div>
      <Chart @render="onRender">
        <ChartLegend :position="'bottom'" :orientation="'horizontal'">
          <ChartLegendItem :visual="legendItemVisual" />
        </ChartLegend>
        <ChartSeries>
          <ChartSeriesItem :name="'Fibonacci'" :data-items="seriesData" />
          <ChartSeriesItem :name="'Fibonacci1'" :data-items="seriesData" />
        </ChartSeries>
      </Chart>
      <Popup :offset="offset" :show="show" :animate="false">
        {{ popupContent }}
      </Popup>
    </div>
  </template>
  
  <script>
  import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartLegendItem,
  } from '@progress/kendo-vue-charts';
  import { Popup } from '@progress/kendo-vue-popup';
  import 'hammerjs';
  
  export default {
    components: {
      Chart,
      ChartLegend,
      ChartSeries,
      ChartSeriesItem,
      ChartLegendItem,
      Popup,
    },
    data: function () {
      return {
        seriesData: [1, 2, 3, 5],
        popupContent: '',
        show: false,
        offset: { top: 150, left: 50 },
      };
    },
    methods: {
      legendItemVisual(args) {
        const visual = args.createVisual();
        visual.options.myTooltip = 'TOOLTIP ' + args.series.name;
  
        return visual;
      },
      onRender(e) {
        const surface = e.target.surface();
        const that = this;
        surface.bind('mouseenter', (e) => {
          const group = e.element.parent;
          const tooltip = group.options.myTooltip;
          const origin = group.bbox().topLeft();
  
          if (tooltip && origin.x > 0) {
            this.popupContent = tooltip;
            that.show = true;
            that.offset = { top: origin.y, left: origin.x };
          }
        });
  
        surface.bind('mouseleave', (e) => {
          that.show = false;
        });
      },
    },
  };
  </script>
  