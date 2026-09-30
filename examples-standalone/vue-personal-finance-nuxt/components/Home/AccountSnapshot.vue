<template>
  <Card class="account-snapshot">
    <div class="account-identity">
      <div class="account-icon" aria-hidden="true">
        <SvgIcon :icon="bankIcon" />
      </div>
      <div class="account-copy">
        <strong>{{ account.name }}</strong>
        <span>{{ account.type }} · {{ account.number }}</span>
      </div>
      <Badge theme-color="success" rounded="large">{{ status }}</Badge>
    </div>
    <div class="account-metrics">
      <div><span>Account balance</span><strong>{{ formatCurrency(account.balance, currency) }}</strong></div>
      <div><span>Available cash</span><strong>{{ formatCurrency(account.available, currency) }}</strong></div>
      <div><span>Invested assets</span><strong>{{ formatCurrency(investedAssets, currency) }}</strong></div>
    </div>
  </Card>
</template>

<script setup>
import { Card } from "@progress/kendo-vue-layout";
import { Badge } from "@progress/kendo-vue-indicators";
import { SvgIcon } from "@progress/kendo-vue-common";
import { bankIcon } from "@progress/kendo-svg-icons";
import { accountFixture, formatCurrency } from "@/data/finance-fixtures";

defineProps({ currency: { type: String, default: "USD" } });
const account = accountFixture;
const status = "Active";
const investedAssets = 35000;
</script>

<style scoped>
.account-snapshot {
  display: grid;
  gap: var(--kendo-spacing-6);
  padding: var(--kendo-spacing-6);
  border: 1px solid var(--kendo-color-border);
  border-radius: var(--kendo-border-radius-xl);
  background: var(--kendo-color-surface-alt);
  box-shadow: var(--kendo-elevation-1);
}
.account-identity, .account-metrics { display: flex; align-items: center; gap: var(--kendo-spacing-4); }
.account-icon { display: grid; width: var(--kendo-spacing-12); height: var(--kendo-spacing-12); place-items: center; border-radius: var(--kendo-border-radius-lg); color: var(--kendo-color-primary); background: var(--kendo-color-primary-subtle); }
.account-copy { display: flex; flex-direction: column; gap: var(--kendo-spacing-1); flex: 1; }
.account-copy span, .account-metrics span { color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); }
.account-metrics { align-items: stretch; justify-content: space-between; }
.account-metrics > div { display: flex; flex-direction: column; gap: var(--kendo-spacing-1); }
.account-metrics strong { font-size: var(--kendo-font-size-lg); }
@media (max-width: 575px) {
  .account-snapshot { padding: var(--kendo-spacing-4); }
  .account-identity, .account-metrics { align-items: flex-start; flex-wrap: wrap; }
  .account-metrics > div { flex: 1 1 40%; }
}
</style>
