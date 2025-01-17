<template>
  <div>
    <Chart :style="{ height: '320px'}">
      <ChartTooltip :visible="true" :shared="true" />
      <ChartTitle
        :text="'Sales and Revenue Total'"
        :position="'top'"
        :align="'center'"
      />
      <ChartLegend :position="'right'">
        <ChartLegendTitle :text="'Countries'" :font="'18px Arial'" />
      </ChartLegend>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories_months"
          :axisCrossingValue="[0, 20]"
          :start-angle="45"
        />
      </ChartCategoryAxis>

      <ChartValueAxis>
        <ChartValueAxisItem :name="'items'">
          <ChartValueAxisTitle :text="'Sold items (thousands)'" />
          <ChartValueAxisLabels :format="'{0:C}M'" />
        </ChartValueAxisItem>
        <ChartValueAxisItem :name="'RevenueAxis'">
          <ChartValueAxisTitle :text="'Revenue'" />
          <ChartValueAxisLabels :format="'{0:C}M'" />
        </ChartValueAxisItem>
      </ChartValueAxis>

      <ChartSeries>
        <ChartSeriesItem
          :name="'LL Mountain Rear Weel'"
          :data-items="ll_weel_series"
          :type="'column'"
          :axis="'items'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :name="'Total revenue'"
          :axis="'RevenueAxis'"
          :data-items="total_revenue"
          :type="'line'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :name="'HL Mountain Rear Weel'"
          :data-items="hl_weel_series"
          :type="'column'"
          :axis="'items'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :name="'ML Mountain Rear Weel'"
          :data-items="ml_weel_series"
          :type="'column'"
          :axis="'items'"
        >
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
    <div class="mt-md k-d-flex k-flex-wrap">
      <div class="k-flex-grow mb-md kd-border kd-rounded chart-item">
        <Chart :style="{ height: '260px', width: '540px' }">
          <ChartTooltip :visible="true" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem
              :categories="categories_months"
              :axisCrossingValue="[0, 20]"
              :start-angle="45"
            />
          </ChartCategoryAxis>
          <ChartTitle :text="'Revenue Trend per Product'" />
          <ChartValueAxis>
            <ChartValueAxisItem :name="'RevenueAxis'">
              <ChartValueAxisTitle :text="'Revenue'" />
              <ChartValueAxisLabels :format="'{0:C}M'" />
            </ChartValueAxisItem>
          </ChartValueAxis>
          <ChartSeries>
            <ChartSeriesItem
              :type="'line'"
              :line-style="'smooth'"
              :name="'LL Mountain Rear Weel'"
              :data-items="ll_weel_revenue"
              :axis="'RevenueAxis'"
            >
            </ChartSeriesItem>
            <ChartSeriesItem
              :type="'line'"
              :line-style="'smooth'"
              :name="'HL Mountain Rear Weel'"
              :data-items="hl_weel_revenue"
              :axis="'RevenueAxis'"
            >
            </ChartSeriesItem>
            <ChartSeriesItem
              :type="'line'"
              :line-style="'smooth'"
              :name="'ML Mountain Rear Weel'"
              :data-items="ml_weel_revenue"
              :axis="'RevenueAxis'"
            >
            </ChartSeriesItem>
            <ChartSeriesMarkers :visible="false" />
          </ChartSeries>
        </Chart>
      </div>
      <div class="k-flex-grow mb-md kd-border kd-rounded chart-item">
        <Chart :style="{ height: '260px', width: '470px' }">
          <ChartTooltip :visible="true" />
          <ChartLegend :visible="false"> </ChartLegend>
          <ChartTitle :text="'Sales Distribution for the Last Year'" />
          <ChartSeries>
            <ChartSeriesItem
              :type="'donut'"
              :name="'HL Mountain Rear Weel'"
              :data-items="year_sales"
              :category-field="'kind'"
              :field="'share'"
            >
              <ChartSeriesLabels
                :position="'outsideEnd'"
                :content="labelContent"
              >
              </ChartSeriesLabels>
            </ChartSeriesItem>
          </ChartSeries>
        </Chart>
      </div>
    </div>
    <Chart :style="{ height: '260px' }">
      <ChartTooltip :visible="true" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories_months" />
      </ChartCategoryAxis>
      <ChartTitle :text="'Revenue Trend per Product'" />

      <ChartSeries>
        <ChartSeriesItem
          :stack="{ type: '100%' }"
          :type="'area'"
          :name="'LL Mountain Rear Weel'"
          :data-items="ll_weel_revenue"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :stack="{ type: '100%' }"
          :type="'area'"
          :name="'ML Mountain Rear Weel'"
          :data-items="ml_weel_revenue"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :stack="{ type: '100%' }"
          :type="'area'"
          :name="'HL Mountain Rear Weel'"
          :data-items="hl_weel_revenue"
        >
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>
<script>
import {
  ChartSeriesLabels,
  ChartSeriesMarkers,
  ChartLegend,
  ChartLegendTitle,
  ChartValueAxisTitle,
  ChartValueAxisLabels,
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    ChartSeriesLabels,
    ChartSeriesMarkers,
    ChartLegend,
    ChartLegendTitle,
    ChartValueAxisTitle,
    ChartValueAxisLabels,
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      year_sales: [
        {
          kind: "LL Mountain Rear Weel",
          share: 201,
        },
        {
          kind: "ML Mountain Rear Weel",
          share: 235,
        },
        {
          kind: "HL Mountain Rear Weel",
          share: 283,
        },
      ],
      hl_weel_series: [10, 40, 9, 30, 67, 54, 31, 42],
      ml_weel_series: [12, 73, 12, 33, 11, 32, 44, 18],
      ll_weel_series: [20, 40, 18, 32, 35, 11, 43, 2],
      hl_weel_revenue: [
        13422.62,
        23559.48,
        20056.31,
        10798.09,
        17080.62,
        13154.04,
        8049.48,
        10012.77,
      ],
      ml_weel_revenue: [
        8616.04,
        16621.06,
        15166.35,
        6231.06,
        11895.66,
        11470.81,
        5381.37,
        6231.06,
      ],
      ll_weel_revenue: [
        3849.72,
        8577.45,
        5470.65,
        4525.11,
        7226.67,
        3782.18,
        2026.17,
        4525.11,
      ],
      total_revenue: [
        2234234,
        5233334,
        4242342,
        4233222,
        3555334,
        1434221,
        3943343,
        2533633,
      ],
      categories_months: [
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
    };
  },
  methods: {
    labelContent(e) {
      return `${e.category}: \n ${e.value} pcs`;
    },
  },
};
</script>

<style>
.chart-item {
  width: 50%;
  min-width: 500px;
}

@media only screen and (max-width:600px) {
  .chart-item {
    min-width: 250px;
  }
}
</style>
