---
title: LineStyle
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the LineStyle."
api_reference: true
type: inner_api
slug: api_charts_linestyle
---

# LineStyle
The line style of the series.

```jsx
<template>
 <Chart>
   <ChartSeries>
     <ChartSeriesItem :type="'line'" :data-items="dataItems" :item-style="'smooth'" />
   </ChartSeries>
 </Chart>
 </template>
<script>
import {
 Chart,
 ChartSeries,
 ChartSeriesItem
} from '@progress/kendo-vue-charts';

export default {
  components: {
     Chart,
     ChartSeries,
     ChartSeriesItem
  },
  data () {
      return {
         dataItems: [1, 2, 3]
      };
  }
}
</script>
```


`type` LineStyle = "normal" | "step" | "smooth";
