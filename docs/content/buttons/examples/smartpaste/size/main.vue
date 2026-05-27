<template>
    <div class="button-container">
        <SmartPasteButton size="small">Small</SmartPasteButton>
        <SmartPasteButton size="medium">Medium</SmartPasteButton>
        <SmartPasteButton size="large">Large</SmartPasteButton>
    </div>
</template>

<script setup>
import { SmartPasteButton } from '@progress/kendo-vue-buttons';
</script>

<style>
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.k-button {
    margin: 5px;
}
</style>
