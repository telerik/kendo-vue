<template>
    <div class="button-container">
        <SmartPasteButton />
        <SmartPasteButton>Default Icon</SmartPasteButton>
        <SmartPasteButton :svg-icon="sparklesIcon" />
        <SmartPasteButton :svg-icon="sparklesIcon">Custom Icon</SmartPasteButton>
    </div>
</template>

<script setup>
import { SmartPasteButton } from '@progress/kendo-vue-buttons';
import { sparklesIcon } from '@progress/kendo-svg-icons';
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
