<template>
    <div class="demo-container">
        <div class="example-buttons">
            <Button @click="setShortText">Short Prompt</Button>
            <Button @click="setLongText">Long Prompt</Button>
            <Button @click="clearText">Clear</Button>
        </div>
        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            mode="auto"
            max-text-area-height="200"
            placeholder="Start typing to see the affix position change..."
            @promptaction="handleSend"
            :upload-button-config="true"
            :end-affix="endAffix"
        />
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Button } from '@progress/kendo-vue-buttons';
import { trashIcon, heartIcon } from '@progress/kendo-svg-icons';

const promptValue = ref('Summarize the benefits of renewable energy');
const isFavorite = ref(false);

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const setShortText = () => {
    promptValue.value = 'What are neural networks?';
};

const setLongText = () => {
    promptValue.value = `Create a comprehensive project plan for implementing a customer relationship management (CRM) system:

1. Requirements Gathering:
   - Identify key stakeholders and their needs
   - Document current processes and pain points
   - Define success criteria and KPIs

2. Technical Architecture:
   - Select appropriate technology stack
   - Design database schema and data models
   - Plan integration with existing systems

3. Implementation Roadmap:
   - Phase 1: Core functionality and user management
   - Phase 2: Advanced features and customization
   - Phase 3: Analytics and reporting capabilities

4. Training and Adoption:
   - Develop user training materials
   - Schedule onboarding sessions
   - Establish support channels and documentation`;
};

const clearText = () => {
    promptValue.value = '';
};

const handleSend = () => {
    promptValue.value = '';
};

const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value;
};

const clearPrompt = () => {
    promptValue.value = '';
};

const endAffix = () => [
    h(Button, {
        svgIcon: heartIcon,
        fillMode: 'flat',
        rounded: 'full',
        title: isFavorite.value ? 'Remove from favorites' : 'Add to favorites',
        themeColor: isFavorite.value ? 'error' : 'base',
        onClick: toggleFavorite,
    }),
    h(Button, {
        svgIcon: trashIcon,
        fillMode: 'flat',
        rounded: 'full',
        title: 'Clear prompt',
        disabled: !promptValue.value,
        onClick: clearPrompt,
    }),
];
</script>

<style>
.demo-container {
    max-width: 600px;
    margin: 0 auto;
}

.example-buttons {
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
}

.info-message {
    margin-bottom: 16px;
    padding: 12px;
    background-color: var(--kendo-color-base);
    border-radius: 4px;
    border-left: 3px solid var(--kendo-color-info);
}

.info-message p {
    margin: 0;
    font-size: 14px;
    color: var(--kendo-color-on-app-surface);
}

.status-message {
    margin-top: 16px;
    padding: 12px;
    background-color: var(--kendo-color-info-subtle);
    border-radius: 4px;
    color: var(--kendo-color-info-on-subtle);
}
</style>
