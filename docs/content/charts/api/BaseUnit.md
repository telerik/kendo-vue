---
title: BaseUnit
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the BaseUnit."
api_reference: true
type: inner_api
slug: api_charts_baseunit
---

# BaseUnit
The `baseUnit` type of an X or Y axis.

```jsx
 <Chart>
   <ChartXAxis>
    <ChartXAxisItem :base-unit="baseUnit" />
   </ChartXAxis>
   <ChartSeries>
     <ChartSeriesItem :type="'scatter'" :data-items="data" />
   </ChartSeries>
 </Chart>
```


`type` BaseUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years";
