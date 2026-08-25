<template>
  <PageShell title="Transfer funds" description="Move money securely between your accounts or a saved recipient.">
    <div class="transfer-layout">
      <Card class="transfer-card">
        <h2>New transfer</h2>
        <div class="field-list">
          <label>From account <DropDownList :data-items="accounts" :default-value="accounts[0]" /></label>
          <label>To account <DropDownList :data-items="accounts" :default-value="accounts[1]" /></label>
          <label>Amount <input v-model="amount" class="k-input k-input-md" inputmode="decimal" aria-describedby="available-balance" /></label>
          <p id="available-balance">Available balance: $8,426.18</p>
          <label>Transfer date <DatePicker :default-value="today" /></label>
          <label>Memo <input class="k-input k-input-md" placeholder="Rent, savings, or other reference" /></label>
        </div>
        <p v-if="showConfirmation" class="confirmation" role="status">Review complete. Your transfer of {{ amount || "$0.00" }} is ready to confirm.</p>
        <Button theme-color="primary" @click="showConfirmation = true">Review transfer</Button>
      </Card>
      <Card class="transfer-card">
        <h2>Scheduled transfers</h2>
        <ul class="activity-list">
          <li><strong>Emergency savings</strong><span>$350.00 · Sep 1, 2026</span></li>
          <li><strong>Rent reserve</strong><span>$1,450.00 · Sep 3, 2026</span></li>
          <li><strong>Holiday fund</strong><span>$125.00 · Sep 15, 2026</span></li>
        </ul>
      </Card>
    </div>
  </PageShell>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@progress/kendo-vue-buttons";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { DatePicker } from "@progress/kendo-vue-dateinputs";
import { Card } from "@progress/kendo-vue-layout";
import PageShell from "@/components/common/PageShell.vue";

const accounts = ["Everyday checking · ••••4821", "High-yield savings · ••••0916"];
const amount = ref("");
const showConfirmation = ref(false);
const today = new Date();
</script>

<style scoped>
.transfer-layout { display: grid; gap: var(--kendo-spacing-5); grid-template-columns: repeat(1, minmax(0, 1fr)); }
.transfer-card { padding: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-lg); }
h2 { margin: 0 0 var(--kendo-spacing-5); font-size: var(--kendo-font-size-lg); }
.field-list { display: grid; gap: var(--kendo-spacing-4); margin-bottom: var(--kendo-spacing-5); }
label { display: grid; gap: var(--kendo-spacing-2); font-weight: var(--kendo-font-weight-medium); }
.field-list p { margin: calc(-1 * var(--kendo-spacing-2)) 0 0; color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); }
.confirmation { padding: var(--kendo-spacing-3); border-radius: var(--kendo-border-radius-md); background: var(--kendo-color-success-subtle); color: var(--kendo-color-success-on-subtle); }
.activity-list { display: grid; gap: var(--kendo-spacing-4); margin: 0; padding: 0; list-style: none; }
.activity-list li { display: flex; justify-content: space-between; gap: var(--kendo-spacing-3); padding-bottom: var(--kendo-spacing-3); border-bottom: 1px solid var(--kendo-color-border); }
.activity-list span { color: var(--kendo-color-subtle); text-align: end; }
@media (min-width: 992px) { .transfer-layout { grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); } }
</style>
