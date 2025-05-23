<template>
    <Card class="k-p-4 k-gap-6 k-rounded-xxl" :style="{ minHeight: '410px' }">
      <div class="k-d-grid k-gap-6">
        <div
          :style="{ fontSize: '20px', letterSpacing: 'wide', fontWeight: '500' }"
          class="k-gap-2"
        >
          Stock Chart
        </div>
        <div class="k-d-grid k-gap-6">
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