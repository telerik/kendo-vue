---
title: NotePosition
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the NotePosition."
api_reference: true
type: inner_api
slug: api_charts_noteposition
---

# NotePosition
Specifies the position of a note.

```jsx
 <template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :notes="valueNotes" />
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
        position: 'left',
      },
    };
  },
};
</script>
```


`type` NotePosition = "top" | "bottom" | "left" | "right";
