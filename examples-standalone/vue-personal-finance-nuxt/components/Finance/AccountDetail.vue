<template>
  <div class="account-detail">
    <Card class="account-summary">
      <div class="account-summary-heading">
        <div class="account-icon" aria-hidden="true"><SvgIcon :icon="bankIcon" /></div>
        <div>
          <p class="eyebrow">{{ account.type }}</p>
          <h2>{{ account.name }} <span>{{ account.number }}</span></h2>
        </div>
      </div>
      <div class="balance-block">
        <span class="balance-label">Current balance</span>
        <strong>{{ formatCurrency(account.balance, currency) }}</strong>
        <span class="balance-support">Available {{ formatCurrency(account.available, currency) }}</span>
      </div>
      <div class="account-actions" aria-label="Account actions">
        <Button :svg-icon="arrowLeftIcon" fill-mode="outline" @click="goBack">Back to overview</Button>
        <Button :svg-icon="arrowsSwapIcon" theme-color="primary" @click="goToTransactions">View transactions</Button>
        <Button :svg-icon="filePdfIcon" fill-mode="flat" @click="showAction('Statement preview')">View statement</Button>
      </div>
      <p v-if="actionMessage" class="action-message" role="status">{{ actionMessage }}</p>
    </Card>

    <div class="account-grid">
      <Card class="metadata-card">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Account details</p>
            <h2>At a glance</h2>
          </div>
          <SvgIcon :icon="infoCircleIcon" aria-label="Account information" />
        </div>
        <dl class="metadata-list">
          <div><dt>Account number</dt><dd>{{ account.number }}</dd></div>
          <div><dt>Opened</dt><dd>{{ account.opened }}</dd></div>
          <div><dt>Interest rate</dt><dd>{{ account.interest }}</dd></div>
          <div><dt>Account status</dt><dd><span class="status status-success">Active</span></dd></div>
        </dl>
      </Card>

      <Card class="activity-card">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Recent activity</p>
            <h2>Latest transactions</h2>
          </div>
          <NuxtLink class="section-link" to="/transactions">See all</NuxtLink>
        </div>
        <ul v-if="account.activity.length" class="activity-list" aria-label="Recent account activity">
          <li v-for="item in account.activity" :key="`${item.merchant}-${item.date}`">
            <div class="activity-icon" :class="`activity-${item.kind}`" aria-hidden="true">
              <SvgIcon :icon="item.kind === 'credit' ? arrowDownLeftIcon : arrowUpIcon" />
            </div>
            <div class="activity-copy"><strong>{{ item.merchant }}</strong><span>{{ item.date }} · {{ item.status }}</span></div>
            <strong class="activity-amount" :class="item.kind === 'credit' ? 'amount-positive' : 'amount-negative'">
              {{ item.kind === "credit" ? "+" : "−" }}{{ formatCurrency(Math.abs(item.amount), currency) }}
            </strong>
          </li>
        </ul>
        <div v-else class="state-panel" role="status">
          <SvgIcon :icon="documentManagerIcon" aria-hidden="true" />
          <strong>No activity yet</strong>
          <span>Transactions will appear here once your account is used.</span>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { SvgIcon } from "@progress/kendo-vue-common";
import { accountFixture, formatCurrency } from "@/data/finance-fixtures";
import { arrowDownLeftIcon, arrowLeftIcon, arrowUpIcon, arrowsSwapIcon, bankIcon, documentManagerIcon, filePdfIcon, infoCircleIcon } from "@progress/kendo-svg-icons";

defineProps<{ currency?: string }>();
const currency = inject("currency", "USD");
const account = accountFixture;
const actionMessage = ref("");

const showAction = (action: string) => {
  actionMessage.value = `${action} is represented for this showcase only. No financial action was submitted.`;
};

const goBack = () => navigateTo("/");
const goToTransactions = () => navigateTo("/transactions");
</script>

<style scoped>
.account-detail { display: grid; gap: var(--kendo-spacing-6); }
.account-summary, .metadata-card, .activity-card { display: grid; gap: var(--kendo-spacing-6); padding: var(--kendo-spacing-6); border: 1px solid var(--kendo-color-border); border-radius: var(--kendo-border-radius-xl); background: var(--kendo-color-surface-alt); box-shadow: var(--kendo-elevation-1); }
.account-summary { grid-template-columns: minmax(0, 1fr); background: var(--kendo-color-primary-subtle); }
.account-summary-heading, .section-heading, .account-actions, .activity-list li { display: flex; align-items: center; }
.account-summary-heading, .section-heading { gap: var(--kendo-spacing-3); }
.account-icon, .activity-icon { display: grid; flex: 0 0 auto; place-items: center; width: var(--kendo-icon-size-lg); height: var(--kendo-icon-size-lg); border-radius: var(--kendo-border-radius-full); }
.account-icon { color: var(--kendo-color-on-primary); background: var(--kendo-color-primary); }
.eyebrow, .balance-label, .balance-support, .activity-copy span, dt { margin: 0; color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); }
h2 { margin: 0; color: var(--kendo-color-primary); font-size: var(--kendo-font-size-lg); }
h2 span { color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); font-weight: var(--kendo-font-weight-normal); }
.balance-block { display: grid; gap: var(--kendo-spacing-1); }
.balance-block strong { color: var(--kendo-color-primary); font-size: clamp(2rem, 4vw, 3rem); letter-spacing: var(--kendo-letter-spacing-tight); }
.account-actions { flex-wrap: wrap; gap: var(--kendo-spacing-3); }
.action-message { margin: 0; padding: var(--kendo-spacing-3); color: var(--kendo-color-info-on-subtle); border: 1px solid var(--kendo-color-info-emphasis); border-radius: var(--kendo-border-radius-md); background: var(--kendo-color-info-subtle); }
.account-grid { display: grid; gap: var(--kendo-spacing-6); grid-template-columns: minmax(0, 1fr); }
.section-heading { justify-content: space-between; }
.section-link { color: var(--kendo-color-info-on-surface); font-weight: var(--kendo-font-weight-medium); }
.metadata-list { display: grid; gap: var(--kendo-spacing-4); margin: 0; }
.metadata-list div { display: flex; justify-content: space-between; gap: var(--kendo-spacing-4); padding-bottom: var(--kendo-spacing-3); border-bottom: 1px solid var(--kendo-color-border); }
dd { margin: 0; color: var(--kendo-color-on-surface); font-weight: var(--kendo-font-weight-medium); text-align: right; }
.status { display: inline-flex; align-items: center; gap: var(--kendo-spacing-1); padding: var(--kendo-spacing-1) var(--kendo-spacing-2); border-radius: var(--kendo-border-radius-full); font-size: var(--kendo-font-size-xs); }
.status-success { color: var(--kendo-color-success-on-subtle); background: var(--kendo-color-success-subtle); }
.activity-list { display: grid; gap: var(--kendo-spacing-2); margin: 0; padding: 0; list-style: none; }
.activity-list li { gap: var(--kendo-spacing-3); padding: var(--kendo-spacing-3) 0; border-bottom: 1px solid var(--kendo-color-border); }
.activity-list li:last-child { border-bottom: 0; }
.activity-icon { width: var(--kendo-icon-size-md); height: var(--kendo-icon-size-md); }
.activity-credit { color: var(--kendo-color-success-on-subtle); background: var(--kendo-color-success-subtle); }
.activity-debit { color: var(--kendo-color-error-on-subtle); background: var(--kendo-color-error-subtle); }
.activity-copy { display: grid; flex: 1; gap: var(--kendo-spacing-1); min-width: 0; }
.activity-copy strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.activity-amount { white-space: nowrap; }
.amount-positive { color: var(--kendo-color-success-on-surface); }
.amount-negative { color: var(--kendo-color-error-on-surface); }
.state-panel { display: grid; place-items: center; gap: var(--kendo-spacing-2); min-height: 10rem; padding: var(--kendo-spacing-6); color: var(--kendo-color-subtle); text-align: center; }
.state-panel .k-svg-icon { color: var(--kendo-color-info); font-size: var(--kendo-icon-size-xl); }
@media (min-width: 768px) { .account-summary { grid-template-columns: minmax(0, 1fr) auto; } .account-actions, .action-message { grid-column: 1 / -1; } .account-grid { grid-template-columns: minmax(15rem, 0.85fr) minmax(0, 1.4fr); } }
@media (max-width: 575px) { .account-summary, .metadata-card, .activity-card { padding: var(--kendo-spacing-4); } .metadata-list div { display: grid; gap: var(--kendo-spacing-1); } dd { text-align: left; } .activity-amount { font-size: var(--kendo-font-size-sm); } }
@media (prefers-reduced-motion: reduce) { .account-detail * { scroll-behavior: auto; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
</style>
