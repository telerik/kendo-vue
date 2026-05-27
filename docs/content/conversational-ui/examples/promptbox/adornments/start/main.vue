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
            placeholder="Type your message..."
            @promptaction="handleSend"
            :upload-button-config="true"
            :start-affix="startAffix"
        />
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Button } from '@progress/kendo-vue-buttons';
import { globeIcon } from '@progress/kendo-svg-icons';

const promptValue = ref('What is machine learning?');

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const setShortText = () => {
    promptValue.value = 'Explain quantum computing';
};

const setLongText = () => {
    promptValue.value = `Provide a detailed analysis of modern cloud computing architectures:

1. Infrastructure Patterns:
   - Compare microservices vs monolithic approaches
   - Evaluate containerization benefits and trade-offs
   - Discuss serverless computing use cases

2. Scalability and Performance:
   - Horizontal vs vertical scaling strategies
   - Load balancing techniques
   - Caching mechanisms for optimization

3. Security Considerations:
   - Identity and access management best practices
   - Data encryption at rest and in transit
   - Compliance requirements and auditing`;
};

const clearText = () => {
    promptValue.value = '';
};

const handleSend = () => {
    promptValue.value = '';
};

const startAffix = () => h(Button, { fillMode: 'flat', svgIcon: globeIcon });
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

.attachment-message {
    margin-top: 16px;
    padding: 12px;
    background-color: var(--kendo-color-success-subtle);
    border-radius: 4px;
    color: var(--kendo-color-success-on-subtle);
}
</style>
