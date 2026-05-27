<template>
    <div class="example">
        <PromptBox
            mode="single"
            placeholder="Solid fill mode..."
            :upload-button-config="{ fillMode: 'solid' }"
            :speech-to-text-button-config="{ fillMode: 'solid' }"
            :action-button-config="{ fillMode: 'solid', themeColor: 'primary' }"
        />

        <PromptBox
            mode="single"
            placeholder="Flat fill mode..."
            :upload-button-config="{ fillMode: 'flat' }"
            :speech-to-text-button-config="{ fillMode: 'flat' }"
            :action-button-config="{ fillMode: 'flat', themeColor: 'primary' }"
        />

        <PromptBox
            mode="single"
            placeholder="Outline fill mode..."
            :upload-button-config="{ fillMode: 'outline' }"
            :speech-to-text-button-config="{ fillMode: 'outline' }"
            :action-button-config="{ fillMode: 'outline', themeColor: 'primary' }"
        />

        <PromptBox
            mode="single"
            placeholder="Clear fill mode..."
            :upload-button-config="{ fillMode: 'clear' }"
            :speech-to-text-button-config="{ fillMode: 'clear' }"
            :action-button-config="{ fillMode: 'clear', themeColor: 'primary' }"
        />

        <PromptBox
            mode="single"
            placeholder="Link fill mode..."
            :upload-button-config="{ fillMode: 'link' }"
            :speech-to-text-button-config="{ fillMode: 'link' }"
            :action-button-config="{ fillMode: 'link', themeColor: 'primary' }"
        />
    </div>
</template>

<script setup>
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
</script>

<style>
.example {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 600px;
    margin: 0 auto;
}
</style>
