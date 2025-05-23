<template>
    <Card class="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
      <div class="k-d-grid k-gap-6">
        <div
          :style='{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }'
          class="k-gap-2"
        >
          Total Investments
        </div>
        <div class="k-d-grid k-gap-6">
          <Chart :style="{ width: '100%', height: '320px' }">
            <ChartLegend :offset-x="0" :labels="{ margin: '6px' }" :position="isBigScreen() ? 'right' : 'bottom'"/>
            <ChartSeries>
              <ChartSeriesItem
                :padding="10"
                :type="'pie'"
                :data-items="data"
                :field="'value'"
                :category-field="'category'"
                :color-field="'color'"
              >
                <ChartSeriesLabels
                  :content="(e) => `${e.value}%`"
                  :position="'center'"
                  :background="'transparent'"
                />
              </ChartSeriesItem>
            </ChartSeries>
          </Chart>
        </div>
      </div>
    </Card>
</template>
<script setup>
import { ref } from "vue";
import { Card } from "@progress/kendo-vue-layout";
import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from "@progress/kendo-vue-charts";


const data = ref([
  { category: "Stocks", value: 25, color: "#9C27B0" },
  { category: "Real Estate", value: 20, color: "#1D84D6" },
  { category: "Bonds", value: 15, color: "#008478" },
  { category: "Mutual Funds", value: 10, color: "#E0CF34" },
  { category: "Cryptocurrency", value: 20, color: "#F44336" },
  { category: "Commodities", value: 10, color: "#439A46" },
]);

const isBigScreen = () => {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        return width > 1200;
    }
    return false; 
};

</script>