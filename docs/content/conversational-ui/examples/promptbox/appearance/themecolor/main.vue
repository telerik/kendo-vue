<template>
    <div class="example">
        <PromptBox
            mode="single"
            placeholder="Base theme color..."
            :upload-button-config="{ themeColor: 'base' }"
            :speech-to-text-button-config="{ themeColor: 'base' }"
            :action-button-config="{ themeColor: 'base' }"
        />

        <PromptBox
            mode="single"
            placeholder="Primary theme color..."
            :upload-button-config="{ themeColor: 'primary' }"
            :speech-to-text-button-config="{ themeColor: 'primary' }"
            :action-button-config="{ themeColor: 'primary' }"
        />

        <PromptBox
            mode="single"
            placeholder="Secondary theme color..."
            :upload-button-config="{ themeColor: 'secondary' }"
            :speech-to-text-button-config="{ themeColor: 'secondary' }"
            :action-button-config="{ themeColor: 'secondary' }"
        />

        <PromptBox
            mode="single"
            placeholder="Tertiary theme color..."
            :upload-button-config="{ themeColor: 'tertiary' }"
            :speech-to-text-button-config="{ themeColor: 'tertiary' }"
            :action-button-config="{ themeColor: 'tertiary' }"
        />

        <PromptBox
            mode="single"
            placeholder="Info theme color..."
            :upload-button-config="{ themeColor: 'info' }"
            :speech-to-text-button-config="{ themeColor: 'info' }"
            :action-button-config="{ themeColor: 'info' }"
        />

        <PromptBox
            mode="single"
            placeholder="Success theme color..."
            :upload-button-config="{ themeColor: 'success' }"
            :speech-to-text-button-config="{ themeColor: 'success' }"
            :action-button-config="{ themeColor: 'success' }"
        />

        <PromptBox
            mode="single"
            placeholder="Warning theme color..."
            :upload-button-config="{ themeColor: 'warning' }"
            :speech-to-text-button-config="{ themeColor: 'warning' }"
            :action-button-config="{ themeColor: 'warning' }"
        />

        <PromptBox
            mode="single"
            placeholder="Error theme color..."
            :upload-button-config="{ themeColor: 'error' }"
            :speech-to-text-button-config="{ themeColor: 'error' }"
            :action-button-config="{ themeColor: 'error' }"
        />

        <PromptBox
            mode="single"
            placeholder="Inverse theme color..."
            :upload-button-config="{ themeColor: 'inverse' }"
            :speech-to-text-button-config="{ themeColor: 'inverse' }"
            :action-button-config="{ themeColor: 'inverse' }"
        />
    </div>
</template>

<script setup>
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
</script>

<style>
.example {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>
