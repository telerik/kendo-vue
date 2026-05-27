<template>
    <div class="button-container">
        <SmartPasteButton fillMode="solid">Solid</SmartPasteButton>
        <SmartPasteButton fillMode="flat">Flat</SmartPasteButton>
        <SmartPasteButton fillMode="outline">Outline</SmartPasteButton>
        <SmartPasteButton fillMode="clear">Clear</SmartPasteButton>
        <SmartPasteButton fillMode="link">Link</SmartPasteButton>
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
