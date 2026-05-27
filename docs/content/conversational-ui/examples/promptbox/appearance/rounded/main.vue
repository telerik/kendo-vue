<template>
    <div class="example">
        <PromptBox
            mode="single"
            placeholder="Small roundness..."
            :upload-button-config="{ rounded: 'small', fillMode: 'outline' }"
            :speech-to-text-button-config="{ rounded: 'small', fillMode: 'outline' }"
            :action-button-config="{ rounded: 'small', fillMode: 'outline' }"
        />

        <PromptBox
            mode="single"
            placeholder="Medium roundness..."
            :upload-button-config="{ rounded: 'medium', fillMode: 'outline' }"
            :speech-to-text-button-config="{ rounded: 'medium', fillMode: 'outline' }"
            :action-button-config="{ rounded: 'medium', fillMode: 'outline' }"
        />

        <PromptBox
            mode="single"
            placeholder="Large roundness..."
            :upload-button-config="{ rounded: 'large', fillMode: 'outline' }"
            :speech-to-text-button-config="{ rounded: 'large', fillMode: 'outline' }"
            :action-button-config="{ rounded: 'large', fillMode: 'outline' }"
        />

        <PromptBox
            mode="single"
            placeholder="Full roundness..."
            :upload-button-config="{ rounded: 'full', fillMode: 'outline' }"
            :speech-to-text-button-config="{ rounded: 'full', fillMode: 'outline' }"
            :action-button-config="{ rounded: 'full', fillMode: 'outline' }"
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

.custom-borders {
    border-radius: 10px;
}
</style>
