---
title: SeriesType
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the SeriesType."
api_reference: true
type: inner_api
slug: api_charts_seriestype
---

# SeriesType
The series type.

The supported values are:
- `"area"`&mdash;Displays the data as continuous lines that show trends over time, evenly distributed along the category field.
- `"bar"`&mdash;Displays the data as sets of horizontal bars that show the relationship between individual items and the whole category.
- `"boxPlot"`&mdash;Displays the data as a box-and-whisker diagram, which shows the distribution of values in a series.
- `"bubble"`&mdash;Displays the data as bubbles, where each bubble represents a value from the series data.
- `"bullet"`&mdash;Displays the data as vertical bars that show the performance measure, and markers that show the comparative measure.
- `"candlestick"`&mdash;Displays the data as candlesticks, which show the open, close, high, and low values of a series.
- `"column"`&mdash;Displays the data as sets of vertical bars that show the relationship between individual items and the whole category.
- `"donut"`&mdash;Displays the data as a series of rings that are sliced depending on the value.
- `"exponentialTrendline"`&mdash;Displays an exponential [trendline]({% slug trendlines_chart_charts %}#toc-exponential-trendline) for the specified parent series.
- `"funnel"`&mdash;Displays the data as a funnel, which is useful for sales data visualization.
- `"heatmap"`&mdash;Displays the data as a heatmap, which is useful for comparing values in a matrix.
- `"horizontalWaterfall"`&mdash;Displays the data as a horizontal waterfall chart, which is useful for comparing positive and negative values over a period.
- `"line"`&mdash;Displays the data as continuous lines that connect data points evenly distributed along the category field.
- `"linearTrendline"`&mdash;Displays a linear [trendline]({% slug trendlines_chart_charts %}#toc-linear-trendline) for the specified parent series.
- `"logarithmicTrendline"`&mdash;Displays a logarithmic [trendline]({% slug trendlines_chart_charts %}#toc-logarithmic-trendline) for the specified parent series.
- `"movingAverageTrendline"`&mdash;Displays a moving average [trendline]({% slug trendlines_chart_charts %}#toc-moving-average-trendline) for the specified parent series.
- `"ohlc"`&mdash;Displays the data as OHLC (open-high-low-close) bars, which show the open, high, low, and close values of a series.
- `"pie"`&mdash;Displays the data as a series of pie slices, which show the contribution of each value to a total.
- `"polarArea"`&mdash;Displays the data as a series of polar area segments, which show the contribution of each value to a total.
- `"polarLine"`&mdash;Displays the data as continuous lines that connect data points evenly distributed along the category field.
- `"polarScatter"`&mdash;Displays the data as points distributed in a polar coordinate system.
- `"polynomialTrendline"`&mdash;Displays a polynomial [trendline]({% slug trendlines_chart_charts %}#toc-polynomial-trendline) for the specified parent series.
- `"powerTrendline"`&mdash;Displays a power [trendline]({% slug trendlines_chart_charts %}#toc-power-trendline) for the specified parent series.
- `"pyramid"`&mdash;Displays the data as a pyramid divided in segments proportional to each value.
- `"radarArea"`&mdash;Displays the data as a series of radar area segments, which show the contribution of each value to a total.
- `"radarColumn"`&mdash;Displays the data as sets of vertical bars that show the relationship between individual items and the whole category.
- `"radarLine"`&mdash;Displays the data as continuous lines that connect data points evenly distributed along the category field.
- `"rangeArea"`&mdash;Displays the data as a series of range area segments, which show the contribution of each value to a total.
- `"rangeBar"`&mdash;Displays the data as sets of horizontal bars that show the relationship between individual items and the whole category.
- `"rangeColumn"`&mdash;Displays the data as sets of vertical bars that show the relationship between individual items and the whole category.
- `"scatter"`&mdash;Displays the data as points that show the relationship between two variables.
- `"scatterLine"`&mdash;Displays the data as continuous lines that connect data points evenly distributed along the category field.
- `"verticalArea"`&mdash;Displays the data as continuous lines that show trends over time, evenly distributed along the category field.
- `"verticalBoxPlot"`&mdash;Displays the data as a box-and-whisker diagram, which shows the distribution of values in a series.
- `"verticalBullet"`&mdash;Displays the data as vertical bars that show the performance measure, and markers that show the comparative measure.
- `"verticalLine"`&mdash;Displays the data as continuous lines that connect data points evenly distributed along the category field.
- `"verticalRangeArea"`&mdash;Displays the data as a series of range area segments, which show the contribution of each value to a total.
- `"waterfall"`&mdash;Displays the data as a waterfall chart, which is useful for comparing positive and negative values over a period.

```jsx
<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        :type="'line'"
        :data-items="dataItems"
        :type="seriesType"
      />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';
export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      dataItems: [1, 2, 3],
      seriesType: 'verticalLine',
    };
  },
};
</script>
```


`type` SeriesType = "area" | "bar" | "boxPlot" | "bubble" | "bullet" | "candlestick" | "column" | "donut" | "exponentialTrendline" | "funnel" | "pyramid" | "heatmap" | "horizontalWaterfall" | "line" | "linearTrendline" | "logarithmicTrendline" | "movingAverageTrendline" | "ohlc" | "pie" | "polarArea" | "polarLine" | "polarScatter" | "polynomialTrendline" | "powerTrendline" | "radarArea" | "radarColumn" | "radarLine" | "rangeArea" | "rangeBar" | "rangeColumn" | "scatter" | "scatterLine" | "verticalArea" | "verticalBoxPlot" | "verticalBullet" | "verticalLine" | "verticalRangeArea" | "waterfall";
