<template>
  <div class="variant-grid">
    <div v-for="v in variants" :key="v.label" class="variant-card">
      <SvgIcon :icon="icon" :variant="v.value" :size="'xxlarge'" />
      <span class="variant-label">{{ v.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { SvgIcon } from "@progress/kendo-vue-common";
import { starIcon } from "@progress/kendo-svg-icons";

const icon = starIcon;
const variants = [
  { label: 'Default', value: undefined },
  { label: 'Solid', value: 'solid' },
  { label: 'Outline', value: 'outline' },
  { label: 'Duotone', value: 'duotone' }
];
</script>

<style scoped>
.variant-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 24px;
}

.variant-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: var(--kendo-color-base, #f5f5f5);
  border-radius: 8px;
  min-width: 80px;
}

.variant-label {
  font-size: 12px;
  font-weight: 500;
}
</style>
