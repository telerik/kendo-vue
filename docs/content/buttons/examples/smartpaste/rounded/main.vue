<template>
    <div class="button-container">
        <SmartPasteButton rounded="none">None</SmartPasteButton>
        <SmartPasteButton rounded="small">Small</SmartPasteButton>
        <SmartPasteButton rounded="medium">Medium</SmartPasteButton>
        <SmartPasteButton rounded="large">Large</SmartPasteButton>
        <SmartPasteButton rounded="full">Full</SmartPasteButton>
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
