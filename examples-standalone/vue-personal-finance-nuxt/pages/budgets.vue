<template>
  <PageShell title="Budget planner" description="Track this month's spending against the categories that matter to you.">
    <template #action><Button theme-color="primary">Create budget</Button></template>
    <div class="budget-summary">
      <Card><strong>$4,800.00</strong><span>Monthly budget</span></Card>
      <Card><strong>$3,245.76</strong><span>Spent so far</span></Card>
      <Card><strong>$1,554.24</strong><span>Remaining</span></Card>
    </div>
    <Card class="budget-card">
      <h2>Category progress</h2>
      <div v-for="budget in budgets" :key="budget.name" class="budget-row">
        <div><strong>{{ budget.name }}</strong><span>{{ budget.spent }} of {{ budget.limit }}</span></div>
        <ProgressBar :value="budget.value" :theme-color="budget.value >= 100 ? 'error' : budget.value >= 80 ? 'warning' : 'success'" />
        <span>{{ budget.value }}%</span>
      </div>
    </Card>
  </PageShell>
</template>

<script setup>
import { Button } from "@progress/kendo-vue-buttons";
import { Card } from "@progress/kendo-vue-layout";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import PageShell from "@/components/common/PageShell.vue";

const budgets = [
  { name: "Housing", spent: "$1,450.00", limit: "$1,600.00", value: 91 },
  { name: "Food & dining", spent: "$486.42", limit: "$650.00", value: 75 },
  { name: "Transportation", spent: "$283.16", limit: "$400.00", value: 71 },
  { name: "Utilities", spent: "$218.55", limit: "$275.00", value: 79 },
  { name: "Entertainment", spent: "$167.63", limit: "$150.00", value: 112 },
];
</script>

<style scoped>
.budget-summary { display: grid; gap: var(--kendo-spacing-4); grid-template-columns: repeat(1, minmax(0, 1fr)); margin-bottom: var(--kendo-spacing-5); }
.budget-summary :deep(.k-card) { display: grid; gap: var(--kendo-spacing-1); padding: var(--kendo-spacing-5); border-radius: var(--kendo-border-radius-lg); }
.budget-summary strong { font-family: var(--kendo-font-family-monospace); font-size: var(--kendo-font-size-xl); }
.budget-summary span { color: var(--kendo-color-subtle); }
.budget-card { padding: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-lg); }
h2 { margin: 0 0 var(--kendo-spacing-5); font-size: var(--kendo-font-size-lg); }
.budget-row { display: grid; grid-template-columns: minmax(150px, 1fr) minmax(120px, 2fr) auto; align-items: center; gap: var(--kendo-spacing-4); padding: var(--kendo-spacing-4) 0; border-top: 1px solid var(--kendo-color-border); }
.budget-row div { display: grid; gap: var(--kendo-spacing-1); }
.budget-row div span { color: var(--kendo-color-subtle); font-family: var(--kendo-font-family-monospace); font-size: var(--kendo-font-size-sm); }
@media (min-width: 768px) { .budget-summary { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 575px) { .budget-row { grid-template-columns: 1fr auto; } .budget-row :deep(.k-progressbar) { grid-column: span 2; } }
</style>
