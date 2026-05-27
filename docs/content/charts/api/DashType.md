---
title: DashType
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the DashType."
api_reference: true
type: inner_api
slug: api_charts_dashtype
---

# DashType
The dash line type.

```jsx
<template>
 <Chart>
   <ChartSeries>
     <ChartSeriesItem :type="'line'" :data-items="dataItems" :dash-type="'dot'" />
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


`type` DashType = "dash" | "dashDot" | "dot" | "longDash" | "longDashDot" | "longDashDotDot" | "solid";
