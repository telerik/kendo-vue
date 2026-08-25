<template>
  <PageShell title="Notifications" description="Review account activity, reminders, and security updates.">
    <template #action><Button fill-mode="outline">Mark all as read</Button></template>
    <Card class="notifications-card">
      <div v-for="notification in notifications" :key="notification.title" class="notification-item">
        <span class="notification-status" :class="{ unread: notification.unread }" aria-hidden="true"></span>
        <div><strong>{{ notification.title }}</strong><p>{{ notification.message }}</p></div>
        <time>{{ notification.time }}</time>
      </div>
    </Card>
  </PageShell>
</template>

<script setup>
import { Button } from "@progress/kendo-vue-buttons";
import { Card } from "@progress/kendo-vue-layout";
import PageShell from "@/components/common/PageShell.vue";

const notifications = [
  { title: "Payment due soon", message: "Your Northline Electric payment of $126.48 is scheduled for Aug 29.", time: "2h ago", unread: true },
  { title: "Deposit received", message: "A payroll deposit of $3,842.17 is available in Everyday checking.", time: "Yesterday", unread: true },
  { title: "Security check complete", message: "Your recent sign-in from Sofia, BG was verified.", time: "Aug 20", unread: false },
];
</script>

<style scoped>
.notifications-card { max-width: 800px; padding: var(--kendo-spacing-2) var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-lg); }
.notification-item { display: grid; grid-template-columns: auto 1fr auto; gap: var(--kendo-spacing-4); align-items: start; padding: var(--kendo-spacing-5) 0; border-bottom: 1px solid var(--kendo-color-border); }
.notification-item:last-child { border-bottom: 0; }
.notification-status { width: var(--kendo-spacing-2); height: var(--kendo-spacing-2); margin-top: var(--kendo-spacing-2); border-radius: var(--kendo-border-radius-full); background: var(--kendo-color-base-emphasis); }
.notification-status.unread { background: var(--kendo-color-info); }
p { margin: var(--kendo-spacing-1) 0 0; color: var(--kendo-color-subtle); }
time { color: var(--kendo-color-subtle); font-size: var(--kendo-font-size-sm); white-space: nowrap; }
@media (max-width: 575px) { .notification-item { grid-template-columns: auto 1fr; } time { grid-column: 2; } }
</style>
