<template>
  <PageShell title="Help & support" description="Find answers or contact a banking specialist.">
    <div class="help-search"><input class="k-input k-input-lg" aria-label="Search help articles" placeholder="Search accounts, transfers, cards, and security" /></div>
    <div class="help-grid">
      <Card v-for="topic in topics" :key="topic.title" class="topic-card"><h2>{{ topic.title }}</h2><p>{{ topic.description }}</p><Button fill-mode="flat">{{ topic.action }}</Button></Card>
    </div>
  </PageShell>
</template>

<script setup>
import { Button } from "@progress/kendo-vue-buttons";
import { Card } from "@progress/kendo-vue-layout";
import PageShell from "@/components/common/PageShell.vue";

const topics = [
  { title: "Accounts", description: "Balances, deposits, and account access.", action: "Browse account help" },
  { title: "Transfers & payments", description: "Move money and manage upcoming payments.", action: "Browse transfer help" },
  { title: "Cards & security", description: "Freeze a card, review a charge, or secure your profile.", action: "Browse security help" },
  { title: "Contact us", description: "Chat with a specialist or call 1-800-555-0148, 24/7.", action: "Start secure chat" },
];
</script>

<style scoped>
.help-search { max-width: 720px; margin-bottom: var(--kendo-spacing-6); }
.help-search input { width: 100%; }
.help-grid { display: grid; gap: var(--kendo-spacing-4); grid-template-columns: repeat(1, minmax(0, 1fr)); }
.topic-card { display: grid; gap: var(--kendo-spacing-3); padding: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-lg); }
h2, p { margin: 0; }
h2 { font-size: var(--kendo-font-size-lg); }
p { color: var(--kendo-color-subtle); }
@media (min-width: 768px) { .help-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
</style>
