---
title: NoteLabelPosition
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the NoteLabelPosition."
api_reference: true
type: inner_api
slug: api_charts_notelabelposition
---

# NoteLabelPosition
The position of a note label.

```jsx
<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :max="5" :notes="valueNotes" />
      </ChartValueAxis>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      valueNotes: {
        data: [
          {
            value: 4,
            text: 'Max',
          },
          {
            value: 1,
            text: 'Min',
          },
        ],
        label: {
          position: 'outside',
          content: (args) => args.dataItem.text,
        },
      },
    };
  },
};
</script>
```


`type` NoteLabelPosition = "inside" | "outside";
