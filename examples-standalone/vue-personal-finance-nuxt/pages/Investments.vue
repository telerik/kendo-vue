<template>
     <h1 class="k-px-md-15 k-p-5 k-m-0">Investments</h1>
      <div class="k-d-grid k-grid-cols-1 k-grid-cols-md-9 k-gap-5 k-p-md-5 k-px-md-15 k-p-5">
        <div class="k-col-span-9 k-col-span-xl-4 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
            <TotalInvestments />
        </div>
        <div class="k-col-span-9 k-col-span-xl-5 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
            <TopMovers />
        </div>
        <div class="k-col-span-9 k-col-span-md-9">
            <StockChart />
        </div>
      </div>
</template>
<script setup>
import TotalInvestments from "@/components/Investments/TotalInvestments.vue";
import TopMovers from "@/components/Investments/TopMovers.vue";
import StockChart from "@/components/Investments/StockChart.vue";
</script>