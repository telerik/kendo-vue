<template>
  <PageShell title="Cards" description="Review card status, spending limits, and recent activity.">
    <template #action><div class="secure-action"><Button :svg-icon="lockIcon" fill-mode="outline" disabled>Lock or unlock card</Button><span>Secure card controls are unavailable in this static showcase.</span></div></template>
    <div class="cards-layout">
      <Card class="card-hero">
        <div class="card-topline"><span class="eyebrow">Everyday rewards</span><span class="status status-success">{{ card.status }}</span></div>
        <div class="card-number">{{ card.number }}</div>
        <div class="card-brand">PERSONAL FINANCE</div>
        <div class="card-footer"><span>Maria Johnson</span><span>VISA</span></div>
      </Card>
      <Card class="limit-card">
        <div class="section-heading"><div><p class="eyebrow">Spending limit</p><h2>Available credit</h2></div><SvgIcon :icon="banknoteIcon" aria-hidden="true" /></div>
        <strong class="limit-amount">{{ formatCurrency(card.available, currency) }}</strong>
        <div class="limit-track" role="progressbar" :aria-valuenow="usedPercent" aria-valuemin="0" aria-valuemax="100" :aria-label="`${usedPercent}% of credit limit used`"><span :style="{ width: `${usedPercent}%` }" /></div>
        <div class="limit-meta"><span>{{ formatCurrency(card.limit - card.available, currency) }} used</span><span>{{ formatCurrency(card.limit, currency) }} limit</span></div>
      </Card>
      <Card class="activity-card">
        <div class="section-heading"><div><p class="eyebrow">Recent activity</p><h2>Card transactions</h2></div><NuxtLink class="section-link" to="/transactions">See all</NuxtLink></div>
        <ul v-if="card.activity.length" class="activity-list">
          <li v-for="item in card.activity" :key="`${item.merchant}-${item.date}`"><div class="activity-icon" aria-hidden="true"><SvgIcon :icon="item.amount > 0 ? arrowDownLeftIcon : arrowUpIcon" /></div><div class="activity-copy"><strong>{{ item.merchant }}</strong><span>{{ item.date }} · {{ item.status }}</span></div><strong :class="item.amount > 0 ? 'amount-positive' : 'amount-negative'">{{ item.amount > 0 ? "+" : "−" }}{{ formatCurrency(Math.abs(item.amount), currency) }}</strong></li>
        </ul>
        <div v-else class="state-panel" role="status"><SvgIcon :icon="documentManagerIcon" aria-hidden="true" /><strong>No card activity</strong><span>Recent purchases will appear here.</span></div>
      </Card>
      <Card class="payment-card">
        <div class="section-heading"><div><p class="eyebrow">Payment overview</p><h2>Next payment</h2></div><SvgIcon :icon="calendarIcon" aria-hidden="true" /></div>
        <strong>{{ formatCurrency(card.minimumPayment, currency) }}</strong>
        <span class="balance-support">Minimum due {{ card.paymentDue }}</span>
        <Button fill-mode="flat" disabled>Make a payment</Button>
        <p class="action-explanation">Payment submission is unavailable in this static showcase.</p>
      </Card>
    </div>
  </PageShell>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { Button } from "@progress/kendo-vue-buttons";
import { Card } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { arrowDownLeftIcon, arrowUpIcon, banknoteIcon, calendarIcon, documentManagerIcon, lockIcon } from "@progress/kendo-svg-icons";
import { cardFixture, formatCurrency } from "@/data/finance-fixtures";
import PageShell from "@/components/common/PageShell.vue";

const currency = inject("currency", "USD");
const card = cardFixture;
const usedPercent = computed(() => Math.round(((card.limit - card.available) / card.limit) * 100));
</script>

<style scoped>
.cards-layout { display: grid; gap: var(--kendo-spacing-6); grid-template-columns: minmax(0, 1fr); }
.card-hero, .limit-card, .activity-card, .payment-card { display: grid; gap: var(--kendo-spacing-5); padding: var(--kendo-spacing-6); border: 1px solid var(--kendo-color-border); border-radius: var(--kendo-border-radius-xl); background: var(--kendo-color-surface-alt); box-shadow: var(--kendo-elevation-1); }
.card-hero { min-height: 15rem; align-content: space-between; color: var(--kendo-color-on-secondary); background: var(--kendo-color-secondary); }
.card-topline, .card-footer, .section-heading, .limit-meta, .activity-list li { display: flex; align-items: center; }
.card-topline, .card-footer, .section-heading, .limit-meta { justify-content: space-between; gap: var(--kendo-spacing-3); }
.eyebrow, .balance-support, .activity-copy span, .limit-meta { margin: 0; color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); }
.card-hero .eyebrow, .card-footer { color: var(--kendo-color-on-secondary); }
.secure-action { display: grid; justify-items: end; gap: var(--kendo-spacing-1); }
.secure-action span, .action-explanation { color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-xs); text-align: right; }
h2 { margin: 0; color: var(--kendo-color-primary); font-size: var(--kendo-font-size-lg); }
.card-number { font-size: var(--kendo-font-size-xl); letter-spacing: var(--kendo-letter-spacing-widest); }
.card-brand { font-size: var(--kendo-font-size-xs); letter-spacing: var(--kendo-letter-spacing-widest); }
.status { display: inline-flex; padding: var(--kendo-spacing-1) var(--kendo-spacing-2); border-radius: var(--kendo-border-radius-full); font-size: var(--kendo-font-size-xs); }
.status-success { color: var(--kendo-color-success-on-subtle); background: var(--kendo-color-success-subtle); }
.limit-amount, .payment-card > strong { color: var(--kendo-color-primary); font-size: var(--kendo-font-size-xl); }
.limit-track { height: var(--kendo-spacing-2); overflow: hidden; border-radius: var(--kendo-border-radius-full); background: var(--kendo-color-base-subtle); }
.limit-track span { display: block; height: 100%; border-radius: inherit; background: var(--kendo-color-secondary); }
.activity-list { display: grid; gap: var(--kendo-spacing-2); margin: 0; padding: 0; list-style: none; }
.activity-list li { gap: var(--kendo-spacing-3); padding: var(--kendo-spacing-3) 0; border-bottom: 1px solid var(--kendo-color-border); }
.activity-list li:last-child { border-bottom: 0; }
.activity-icon { display: grid; flex: 0 0 auto; place-items: center; width: var(--kendo-icon-size-md); height: var(--kendo-icon-size-md); color: var(--kendo-color-info-on-subtle); border-radius: var(--kendo-border-radius-full); background: var(--kendo-color-info-subtle); }
.activity-copy { display: grid; flex: 1; gap: var(--kendo-spacing-1); min-width: 0; }
.activity-copy strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.amount-positive { color: var(--kendo-color-success-on-surface); }
.amount-negative { color: var(--kendo-color-error-on-surface); }
.section-link { color: var(--kendo-color-info-on-surface); font-weight: var(--kendo-font-weight-medium); }
.state-panel { display: grid; place-items: center; gap: var(--kendo-spacing-2); min-height: 8rem; color: var(--kendo-color-subtle); text-align: center; }
.action-explanation { margin: 0; }
@media (min-width: 768px) { .cards-layout { grid-template-columns: repeat(2, minmax(0, 1fr)); } .card-hero { grid-column: span 1; } .activity-card { grid-column: span 2; } }
@media (min-width: 1200px) { .cards-layout { grid-template-columns: minmax(16rem, 0.9fr) minmax(18rem, 1fr) minmax(20rem, 1.2fr); } .card-hero, .activity-card { grid-column: auto; } .activity-card { grid-row: span 2; } }
@media (max-width: 575px) { .card-hero, .limit-card, .activity-card, .payment-card { padding: var(--kendo-spacing-4); } .secure-action { justify-items: start; width: 100%; } .secure-action span { text-align: left; } }
@media (prefers-reduced-motion: reduce) { .cards-layout * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
</style>
