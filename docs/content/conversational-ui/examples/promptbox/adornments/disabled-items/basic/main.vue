<template>
    <div class="demo-container">
        <div class="example-buttons">
            <Button @click="toggleDisabled">{{ isDisabled ? 'Enable' : 'Disable' }} PromptBox</Button>
        </div>
        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            mode="single"
            :disabled="isDisabled"
            placeholder="Type your message..."
            @promptaction="handleSend"
            :start-affix="startAffix"
            :end-affix="endAffix"
        />
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Button } from '@progress/kendo-vue-buttons';
import { starIcon, bookIcon } from '@progress/kendo-svg-icons';

const promptValue = ref('Describe the impact of artificial intelligence on healthcare');
const isDisabled = ref(false);

const toggleDisabled = () => {
    isDisabled.value = !isDisabled.value;
};

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const handleSend = () => {
    console.log('Sent:', promptValue.value);
    promptValue.value = '';
};

const startAffix = () =>
    h(Button, { svgIcon: starIcon, fillMode: 'flat', rounded: 'full', title: 'Add to favorites' });

const endAffix = () =>
    h(Button, { svgIcon: bookIcon, fillMode: 'flat', rounded: 'full', title: 'Bookmark prompt' });
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
    line-height: 1.5;
    color: var(--kendo-color-on-app-surface);
}

.info-message code {
    padding: 2px 6px;
    background-color: var(--kendo-color-surface);
    border-radius: 3px;
    font-family: monospace;
    font-size: 13px;
}
</style>
