  <template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :notes="{ data, position }" />
      </ChartValueAxis>
    </Chart>
  </div>
</template>
  <script>
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data() {
    return {
      data: [{ value: 1 }],
      position: "right",
    };
  },
};
</script>
