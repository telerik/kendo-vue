<template>
    <Card class="stock-chart-card" :style="{ minHeight: '410px' }">
      <div class="stock-chart-content">
        <div
          :style="{ fontSize: '20px', letterSpacing: 'wide', fontWeight: '500' }"
          class="stock-chart-title"
        >
          Stock Chart
        </div>
        <div class="stock-chart-tabs">
          <TabStrip  :tabs="tabs" :selected="selected" @select="handleSelect">
            <template #solarFlux = {props}>
                <StockChartComponent :data="solarFluxData" />
            </template>
            <template #quantum="{ props }">
              <StockChartComponent :data="quantumData" />
            </template>
            <template #neopharm="{ props }">
              <StockChartComponent :data="neopharmData" />
            </template>
            <template #solaris="{ props }">
              <StockChartComponent :data="solarData" />
            </template>
            <template #glofebinBank="{ props }">
              <StockChartComponent :data="glofebinBankData" />
            </template>
          </TabStrip>
        </div>
      </div>
    </Card>
</template>
<script setup>
import { ref } from "vue";
import { Card } from "@progress/kendo-vue-layout";
import { TabStrip, TabStripTab } from "@progress/kendo-vue-layout";
import StockChartComponent from "./StockChartComponent.vue";
import { glofebinBankData, neopharmData, quantumData, solarData, solarFluxData } from "@/data/stockchart-data";

const selected = ref(0);
const handleSelect = (event) => {
    selected.value = event.selected;
};

const tabs = ref([
    { title: "Solar Flux", content: "solarFlux" },
    { title: "Quantum", content: "quantum" },
    { title: "Neopharm", content: "neopharm" },
    { title: "Solaris", content: "solaris" },
    { title: "Globefin Bank", content: "glofebinBank" },
]);

</script>
<style scoped>
.stock-chart-card { padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.stock-chart-content, .stock-chart-tabs { display: grid; gap: var(--kendo-spacing-6); }
.stock-chart-title { gap: var(--kendo-spacing-2); }
</style>