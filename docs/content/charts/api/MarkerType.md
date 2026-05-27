---
title: MarkerType
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the MarkerType."
api_reference: true
type: inner_api
slug: api_charts_markertype
---

# MarkerType
Specifies the marker type.

```jsx
<template>
 <Chart>
   <ChartSeries>
     <ChartSeriesItem :type="'line'" :data-items="dataItems" :markers="markerType" />
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
         dataItems: [1, 2, 3],
         markerType: { type: "cross" }
      };
  }
}
</script>
```


`type` MarkerType = "square" | "circle" | "triangle" | "cross" | "rect" | "roundedRect";
