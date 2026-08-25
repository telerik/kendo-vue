<template>
  <main class="not-found">
    <Card>
      <h1>Page not found</h1>
      <p>We could not find that page. Return to your financial overview to continue.</p>
      <NuxtLink class="k-button k-button-solid k-button-solid-primary" to="/">Return to dashboard</NuxtLink>
    </Card>
  </main>
</template>

<script setup>
import { Card } from "@progress/kendo-vue-layout";
</script>

<style scoped>
.not-found { display: grid; min-height: 70vh; place-items: center; padding: var(--kendo-spacing-5); }
:deep(.k-card) { display: grid; max-width: 600px; gap: var(--kendo-spacing-4); padding: var(--kendo-spacing-8); text-align: center; border-radius: var(--kendo-border-radius-xl); }
h1, p { margin: 0; }
p { color: var(--kendo-color-subtle); }
</style>
