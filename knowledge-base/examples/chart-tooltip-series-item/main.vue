<template>
    <div>
      <Chart id="kdo-chart" @render="onRender">
        <ChartTitle
          :visible="chartLayout.title.visible"
          :align="chartLayout.title.align"
          :position="chartLayout.title.position"
          :text="title"
        />
        <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            :type="categoryAxisType"
            :base-unit="'fit'"
            :tooltip="{ visible: true, template: tooltipTemplate }"
          >
            <ChartCategoryAxisLabels
              :rotation="'auto'"
              :content="labelContent"
              :visual="yAxisLabelContent"
            />
            <ChartCategoryAxisTitle
              :text="category"
              :visible="chartLayout.category.visible"
            />
          </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            v-for="field in fields"
            :key="field.Id + field.fieldName"
            :type="type"
            :data-items="datasetProcessed"
            :field="field.fieldName"
            :aggregate="field.aggregate"
            :category-field="category"
            :tooltip="{ visible: true, template: tooltipTemplate }"
          />
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
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisLabels,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
    CategoryAxisRangeLabels,
    ChartLegend,
  } from '@progress/kendo-vue-charts';
  import { Popup } from '@progress/kendo-vue-popup';
  import 'hammerjs';
  
  export default {
    components: {
      Chart,
      ChartTitle,
      ChartSeries,
      ChartSeriesItem,
      ChartCategoryAxis,
      ChartCategoryAxisLabels,
      ChartCategoryAxisItem,
      ChartCategoryAxisTitle,
      CategoryAxisRangeLabels,
      ChartLegend,
      Popup,
    },
    data: function () {
      return {
        popupContent: '',
        show: false,
        offset: { top: 150, left: 50 },
        chartLayout: {
          title: {
            visible: true,
            position: 'top',
            align: 'center',
          },
          category: {
            visible: true,
          },
        },
        category: 'ApprovalStatus.Name',
        categoryAxisType: 'category', // can be 'date'
        title: 'Purchases',
        fields: [
          {
            fieldName: 'Actual.TotalConsumption',
            table: 'projects',
            aggregate: 'sum',
            text: 'Cost: Actual. Total',
          },
        ],
        type: 'bar',
        datasetProcessed: [
          {
            Id: 31289,
            ApprovalStatus: {
              Name: 'Approved by a very log whatnot label here sooo long',
            },
            ExternalClient: { Id: 5394 },
            Actual: { TotalConsumption: 7380 },
          },
          {
            Id: 31290,
            ApprovalStatus: { Name: 'Pending' },
            ExternalClient: null,
            Actual: { TotalConsumption: 132096.54 },
          },
        ],
      };
    },
    methods: {
      yAxisLabelContent(args) {
        const visual = args.createVisual();
        visual.options.myTooltip = 'TOOLTIP ' + args.value;
  
        return visual;
      },
      labelContent(e) {
        if (e.value.length > 15) {
          return e.value.substring(0, 15) + '...';
        }
        return e.value;
      },
      tooltipTemplate(e) {
        return e.category;
      },
      onRender(e) {
        const surface = e.target.surface();
        const that = this;
        surface.bind('mouseenter', (e) => {
          const group = e.element.parent;
          const myTooltip = group.options.myTooltip;
          const origin = group.bbox().origin;
  
          if (myTooltip && origin.x > 0) {
            this.popupContent = myTooltip;
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
  