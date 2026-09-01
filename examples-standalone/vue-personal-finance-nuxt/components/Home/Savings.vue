<template>
    <Card class="savings-card">
        <div class="savings-heading">
          <div
            :style='{
              fontSize: "20px",
              letterSpacing: "wide",
              fontWeight: "500",
            }'
          >
            Savings
          </div>
          <div
            :style='{
              fontSize: "16px",
              letterSpacing: "0.5px",
              fontWeight: "400",
            }'
          >
            {{displayCurrencyValue(104500, currency)}}
          </div>
        </div>

          <SavingsProgressBar
            :currency="currency"
            :savings="savings"
            :value="3000"
            :title="'Education'"
          />
          <SavingsProgressBar
             :currency="currency"
            :savings="savings"
            :value="25000"
            :title="'Dream Home'"
          />
          <SavingsProgressBar
            :currency="currency"
            :savings="savings"
            :value="6500"
            :title="'Car'"
          />
          <SavingsProgressBar
            :currency="currency"
            :savings="savings"
            :value="20000"
            :title="'Holidays'"
          />
          <SavingsProgressBar
            :currency="currency"
            :savings="savings"
            :value="50000"
            :title="'Health Care'"
          />
      </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
import { displayCurrencyValue } from "@/utils/currency-converter";
import SavingsProgressBar from "./SavingsProgressbar.vue";

defineProps({
    savings: {
        type: Number,
        default: 100000,
    },
    currency: {
        type: String,
        default: "USD",
    },
});
</script>
<style scoped>
.savings-card { padding: var(--kendo-spacing-4); gap: calc(1.5 * var(--kendo-spacing-base)); border-radius: var(--kendo-border-radius-xxl); }
.savings-heading { display: grid; gap: var(--kendo-spacing-4); }
</style>