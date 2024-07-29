<template>
  <div>
    <Chart @seriesclick="onSeriesClick">
      <ChartTitle :text="'World Population by Broad Age Groups'" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'pie'"
          :data-items="pieData"
          :field="'value'"
          :category-field="'category'"
          :explodeField="'exploded'"
          :labels="{ visible: true, content: labelContent }"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
  },
  data: function () {
    return {
      pieData: [
        {
          category: "0-14",
          value: 0.2545,
          exploded: true,
        },
        {
          category: "15-24",
          value: 0.1552,
          exploded: false,
        },
        {
          category: "25-54",
          value: 0.4059,
          exploded: false,
        },
        {
          category: "55-64",
          value: 0.0911,
          exploded: false,
        },
        {
          category: "65+",
          value: 0.0933,
          exploded: false,
        },
      ],
    };
  },
  methods: {
    labelContent(props) {
      let formatedNumber = Number(props.dataItem.value).toLocaleString(
        undefined,
        {
          style: "percent",
          minimumFractionDigits: 2,
        }
      );
      return `${props.dataItem.category} years old: ${formatedNumber}`;
    },
    onSeriesClick(event) {
      const newData = this.pieData.map((item) => {
        item.exploded = item === event.dataItem ? !item.exploded : false;
        return item;
      });

      this.pieData.value = newData;
    },
  },
};
</script>
