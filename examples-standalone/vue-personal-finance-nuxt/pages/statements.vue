<template>
  <PageShell title="Statements" description="Find account statements by period. Preview and download affordances are included for the showcase.">
    <template #action><div class="filter-control"><label for="statement-period">Statement period</label><DropDownList id="statement-period" aria-label="Statement period" :data-items="periods" :value="selectedPeriod" @change="selectedPeriod = $event.target.value" /></div></template>
    <Card class="statements-card">
      <div class="statements-heading"><div><p class="eyebrow">Everyday checking · •••• 4821</p><h2>Available statements</h2></div><SvgIcon :icon="documentManagerIcon" aria-hidden="true" /></div>
      <div v-if="isLoading" class="state-panel" role="status" aria-live="polite" aria-busy="true">
        <span class="loading-indicator" aria-hidden="true"></span>
        <strong>Loading statements</strong>
        <span>Retrieving your available periods…</span>
      </div>
      <div v-else-if="filteredStatements.length" class="statement-list">
        <article v-for="statement in filteredStatements" :key="statement.period" class="statement-row">
          <div class="statement-icon" aria-hidden="true"><SvgIcon :icon="filePdfIcon" /></div>
          <div class="statement-copy"><h3>{{ statement.period }}</h3><span>{{ statement.range }} · Closing balance {{ formatCurrency(statement.balance, currency) }}</span><span class="status" :class="statement.status === 'Ready' ? 'status-success' : 'status-neutral'">{{ statement.status }}</span></div>
          <div class="statement-actions"><Button :svg-icon="eyeIcon" fill-mode="flat" @click="showNotice('Preview')">Preview</Button><Button :svg-icon="downloadIcon" fill-mode="outline" @click="showNotice('Download')">Download</Button></div>
        </article>
      </div>
      <div v-else class="state-panel" role="status"><SvgIcon :icon="searchIcon" aria-hidden="true" /><strong>No statements found</strong><span>Try another period to see available account activity.</span></div>
      <p v-if="notice" class="action-message" :class="{ 'action-error': noticeKind === 'error' }" :role="noticeKind === 'error' ? 'alert' : 'status'">{{ notice }}</p>
    </Card>
    <Card class="disclaimer-card"><SvgIcon :icon="infoCircleIcon" aria-hidden="true" /><p><strong>Showcase note:</strong> Preview and download buttons demonstrate the intended affordances. This sample does not deliver documents or connect to a financial institution.</p></Card>
  </PageShell>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import { Button } from "@progress/kendo-vue-buttons";
import { Card } from "@progress/kendo-vue-layout";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { SvgIcon } from "@progress/kendo-vue-common";
import { documentManagerIcon, downloadIcon, eyeIcon, filePdfIcon, infoCircleIcon, searchIcon } from "@progress/kendo-svg-icons";
import { formatCurrency, statementFixtures } from "@/data/finance-fixtures";
import PageShell from "@/components/common/PageShell.vue";

const currency = inject("currency", "USD");
const periods = ["All periods", ...statementFixtures.map((statement) => statement.period), "2023"];
const selectedPeriod = ref(periods[0]);
const notice = ref("");
const noticeKind = ref<"info" | "error">("info");
const isLoading = ref(true);
const filteredStatements = computed(() => selectedPeriod.value === "All periods" ? statementFixtures : statementFixtures.filter((statement) => statement.period === selectedPeriod.value));
onMounted(() => window.setTimeout(() => { isLoading.value = false; }, 160));
const showNotice = (action: string) => { noticeKind.value = "error"; notice.value = `${action} is unavailable in this static showcase. No document was delivered.`; };
</script>

<style scoped>
.filter-control { display: grid; gap: var(--kendo-spacing-1); min-width: 12rem; }
.filter-control label, .eyebrow, .statement-copy span { color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); }
.statements-card, .disclaimer-card { display: grid; gap: var(--kendo-spacing-5); padding: var(--kendo-spacing-6); border: 1px solid var(--kendo-color-border); border-radius: var(--kendo-border-radius-xl); background: var(--kendo-color-surface-alt); box-shadow: var(--kendo-elevation-1); }
.statements-heading, .statement-row, .disclaimer-card { display: flex; align-items: center; gap: var(--kendo-spacing-4); }
.statements-heading { justify-content: space-between; }
.statements-heading .k-svg-icon { color: var(--kendo-color-info); font-size: var(--kendo-icon-size-xl); }
h2, h3 { margin: 0; color: var(--kendo-color-primary); }
h2 { font-size: var(--kendo-font-size-lg); }
h3 { font-size: var(--kendo-font-size-md); }
.statement-list { display: grid; }
.statement-row { justify-content: space-between; padding: var(--kendo-spacing-4) 0; border-top: 1px solid var(--kendo-color-border); }
.statement-icon { display: grid; flex: 0 0 auto; place-items: center; width: var(--kendo-icon-size-lg); height: var(--kendo-icon-size-lg); color: var(--kendo-color-error-on-subtle); border-radius: var(--kendo-border-radius-md); background: var(--kendo-color-error-subtle); }
.statement-copy { display: grid; flex: 1; gap: var(--kendo-spacing-1); min-width: 0; }
.statement-copy span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.statement-actions { display: flex; flex-wrap: wrap; gap: var(--kendo-spacing-2); }
.status { width: fit-content; padding: var(--kendo-spacing-1) var(--kendo-spacing-2); border-radius: var(--kendo-border-radius-full); font-size: var(--kendo-font-size-xs) !important; }
.status-success { color: var(--kendo-color-success-on-subtle) !important; background: var(--kendo-color-success-subtle); }
.status-neutral { color: var(--kendo-color-on-base) !important; background: var(--kendo-color-base-subtle); }
.state-panel { display: grid; place-items: center; gap: var(--kendo-spacing-2); min-height: 14rem; color: var(--kendo-color-subtle); text-align: center; }
.state-panel .k-svg-icon { color: var(--kendo-color-info); font-size: var(--kendo-icon-size-xl); }
.action-message { margin: 0; padding: var(--kendo-spacing-3); color: var(--kendo-color-info-on-subtle); border: 1px solid var(--kendo-color-info-emphasis); border-radius: var(--kendo-border-radius-md); background: var(--kendo-color-info-subtle); }
.disclaimer-card { align-items: flex-start; color: var(--kendo-color-info-on-subtle); border-color: var(--kendo-color-info-emphasis); background: var(--kendo-color-info-subtle); }
.disclaimer-card p { margin: 0; line-height: var(--kendo-line-height-md); }
@media (max-width: 767px) { .statement-row { align-items: flex-start; flex-wrap: wrap; } .statement-actions { width: 100%; padding-left: calc(var(--kendo-icon-size-lg) + var(--kendo-spacing-4)); } }
@media (max-width: 575px) { .statements-card, .disclaimer-card { padding: var(--kendo-spacing-4); } .filter-control { width: 100%; } }
@media (prefers-reduced-motion: reduce) { .statements-card * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
</style>
