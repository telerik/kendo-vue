<template>
  <div>
    <KButton> Enabled Button</KButton> &nbsp;
    <KButton :disabled="true">Disabled Button (focusable)</KButton>
    <KButton :disabled="true" :tabindex="-1"
      >Disabled Button (not focusable)</KButton
    >
  </div>
</template>

<script setup>
import { Button as KButton } from "@progress/kendo-vue-buttons";
</script>
