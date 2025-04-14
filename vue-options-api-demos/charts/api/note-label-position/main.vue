  <template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :notes="{ data, label: { position } }" />
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
      data: [{ value: 1, label: { text: "Foo" } }],
      position: "outside",
    };
  },
};
</script>
