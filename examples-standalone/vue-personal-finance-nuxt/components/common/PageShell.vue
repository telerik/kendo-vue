<template>
  <main class="page-shell">
    <header class="page-header">
      <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <slot name="action" />
    </header>
    <slot />
  </main>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>

<style scoped>
.page-shell {
  max-width: 1440px;
  margin: auto;
  padding: var(--kendo-spacing-5);
}

.page-header {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: var(--kendo-spacing-4);
  margin-bottom: var(--kendo-spacing-6);
}

h1 {
  margin: 0;
  color: var(--kendo-color-primary);
  font-size: var(--kendo-font-size-xl);
  font-weight: var(--kendo-font-weight-semibold);
}

p {
  margin: var(--kendo-spacing-1) 0 0;
  color: var(--kendo-color-subtle);
}

@media (min-width: 768px) {
  .page-shell {
    padding-inline: var(--kendo-spacing-15);
  }
}
</style>
