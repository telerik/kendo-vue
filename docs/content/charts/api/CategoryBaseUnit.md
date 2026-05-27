---
title: CategoryBaseUnit
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the CategoryBaseUnit."
api_reference: true
type: inner_api
slug: api_charts_categorybaseunit
---

# CategoryBaseUnit
The `baseUnit` type of the category axis.

```jsx
<template>
 <Chart>
   <ChartCategoryAxis>
    <ChartCategoryAxisItem :base-unit="baseUnit" />
   </ChartCategoryAxis>
   <ChartSeries>
     <ChartSeriesItem :category-field="category" :data-items="dataItems" />
   </ChartSeries>
 </Chart>
</template>
<script>
import {
 Chart,
 ChartCategoryAxis,
 ChartCategoryAxisItem,
 ChartSeries,
 ChartSeriesItem
} from '@progress/kendo-vue-charts';

export default {
  components: {
      Chart,
      ChartCategoryAxis,
      ChartCategoryAxisItem,
      ChartSeries,
      ChartSeriesItem
  },
  data () {
      return {
         baseUnit: "months",
         dataItems: [
             { category: new Date(2000, 0, 1), value: 1 },
             { category: new Date(2001, 0, 1), value: 1}
         ]
      };
  }
}
</script>
```


`type` CategoryBaseUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years" | "auto" | "fit";
