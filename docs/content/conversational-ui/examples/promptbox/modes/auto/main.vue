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
            placeholder="Start typing..."
            mode="auto"
            :upload-button-config="true"
            max-text-area-height="200"
            @promptaction="handleSend"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Button } from '@progress/kendo-vue-buttons';

const promptValue = ref('Tell me about renewable energy sources');

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const setShortText = () => {
    promptValue.value = 'What is AI?';
};

const setLongText = () => {
    promptValue.value = `Analyze our Q4 financial performance and provide a comprehensive strategic assessment covering the following areas:

1. Revenue Analysis:
   - Compare Q4 revenue against Q3 and the same quarter last year
   - Identify which product lines or services drove the most growth
   - Analyze revenue by geographic region and customer segment

2. Cost Structure and Efficiency:
   - Evaluate operational expenses as a percentage of revenue
   - Suggest opportunities for cost optimization without impacting quality
   - Compare our cost efficiency metrics against industry benchmarks`;
};

const clearText = () => {
    promptValue.value = '';
};

const handleSend = () => {
    promptValue.value = '';
};
</script>

<style>
.demo-container {
    max-width: 600px;
    margin: 0 auto;
}

.demo-container .k-prompt-box {
    width: 100%;
}

.example-buttons {
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
}
</style>
