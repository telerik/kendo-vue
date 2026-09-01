<template>
    <Card class="total-investments-card">
      <div class="total-investments-content">
        <div
          :style='{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }'
          class="total-investments-title"
        >
          Total Investments
        </div>
        <div class="total-investments-chart">
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
<style scoped>
.total-investments-card { height: 100%; padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.total-investments-content, .total-investments-chart { display: grid; gap: var(--kendo-spacing-6); }
.total-investments-title { gap: var(--kendo-spacing-2); }
</style>