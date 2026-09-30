<template>
  <PageShell title="Account details" description="Review your balance, account information, and recent activity.">
    <template #action><span class="route-context">Everyday checking · •••• 4821</span></template>
    <AccountDetail :currency="currency" />
  </PageShell>
</template>

<script setup lang="ts">
import { inject } from "vue";
import PageShell from "@/components/common/PageShell.vue";
import AccountDetail from "@/components/Finance/AccountDetail.vue";

const currency = inject("currency", "USD");
</script>

<style scoped>
.route-context { color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); }
</style>
