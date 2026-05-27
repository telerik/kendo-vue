<template>
    <div class="example">
        <PromptBox
            :value="smallValue"
            @change="(e) => (smallValue = e.value)"
            mode="single"
            placeholder="Small size..."
            :upload-button-config="{ size: 'small' }"
            :speech-to-text-button-config="{ size: 'small' }"
            :action-button-config="{ size: 'small', themeColor: 'primary' }"
        />

        <PromptBox
            :value="mediumValue"
            @change="(e) => (mediumValue = e.value)"
            mode="single"
            placeholder="Medium size..."
            :upload-button-config="{ size: 'medium' }"
            :speech-to-text-button-config="{ size: 'medium' }"
            :action-button-config="{ size: 'medium', themeColor: 'primary' }"
        />

        <PromptBox
            :value="largeValue"
            @change="(e) => (largeValue = e.value)"
            mode="single"
            placeholder="Large size..."
            :upload-button-config="{ size: 'large' }"
            :speech-to-text-button-config="{ size: 'large' }"
            :action-button-config="{ size: 'large', themeColor: 'primary' }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';

const smallValue = ref('');
const mediumValue = ref('');
const largeValue = ref('');
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
