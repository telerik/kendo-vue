<template>
  <div>
    <div>
      <span style="font-weight: bold">The Sparkline is a small Chart that is usually drawn as a Line Chart -</span>
      <Sparkline :data-items="sparklineData" />
    </div>
    <div style="font-weight: bold">The Sparkline can also be drawn as:</div>
    <ul>
      <li>
        Bar/Column type Sparkline Chart <br/>
        <Sparkline :data-items="sparklineData" :type="'column'" />
      </li>
      <li>
        Area type Sparkline Chart
        <br/>
        <Sparkline :data-items="sparklineData" :type="'area'" />
      </li>
      <li>
        Pie type Sparkline Chart<br/>
        <Sparkline :data-items="sparklineData" :type="'pie'" />
      </li>
      <li>
        Bullet type Sparkline Chart<br/>
        <Sparkline :data-items="bulletData" :type="'bullet'">
          <ChartValueAxis>
            <ChartValueAxisItem :max="max" :min="min" :plot-bands="plotBands" />
          </ChartValueAxis>
        </Sparkline>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  Sparkline,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Sparkline,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      sparklineData: [936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007],
      bulletData: [21, 23],
      min: 0,
      max: 30,
      plotBands: [
        {
          from: 0,
          to: 15,
          color: "#787878",
          opacity: 0.15,
        },
        {
          from: 15,
          to: 22,
          color: "#787878",
          opacity: 0.3,
        },
        {
          from: 22,
          to: 30,
          color: "#787878",
          opacity: 0.15,
        },
      ],
    }
  }
};
</script>
<style>
.k-sparkline {
  width: 150px !important;
  height: 50px !important;
}
</style>