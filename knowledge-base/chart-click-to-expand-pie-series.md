---
title: Exploding Pie/Donut Chart Series On Click
description: This article demonstrates how to enable click-to-expand functionality for pie chart segments in a Vue application.
type: how-to
page_title: Exploding Pie/Donut Chart Series On Click
slug: chart-click-to-expand-pie-series
tags: vue, pie chart, click, expand, chart series
res_type: kb
ticketid: 1651859
---

## Environment

| Product | Version |
| --- | --- |
| Chart for React | Current |

## Description

How can I make the Pie or Donut Chart series explode when clicking them?

## Solution

To achieve click-to-expand functionality in a Vue pie chart you must:

1. Handle the [`seriesClick`](slug:api_charts_chartcomponent#toc-seriesclick) event:

````html
<Chart @seriesclick="onSeriesClick">
</Chart>
````

2. Within the event handler function, toggle the [`explodeField`](slug:api_charts_seriesitemcomponent#toc-explodeField) property and update the Chart data by reference to re-render the Chart.

```JavaScript
onSeriesClick(event) {
  const newData = this.pieData.map((item) => {
    item.exploded = item === event.dataItem ? !item.exploded : false;
    return item;
  });

  this.pieData.value = newData;
}
```

### Runnable example
{% meta height:600 %}
{% embed_file chart-click-to-expand-pie-series/main.vue preview %}
{% embed_file chart-click-to-expand-pie-series/main.js %}
{% endmeta %}


## See Also

- [Kendo UI for Vue Charts Documentation](https://www.telerik.com/kendo-vue-ui/components/charts/)
- [Chart SeriesItem Component](https://www.telerik.com/kendo-vue-ui/components/charts/api/ChartSeriesItemProps/)
- [Handling Events in Kendo UI for Vue Charts](https://www.telerik.com/kendo-vue-ui/components/charts/events/)
