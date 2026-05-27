<template>
    <div class="demo-container">
        <div class="example-config">
            <Checkbox
                label="Disabled"
                :value="isDisabled"
                @change="(e) => (isDisabled = e.value ?? false)"
                :style="{ marginLeft: '4px' }"
            />
        </div>

        <div class="promptbox-section">
            <PromptBox
                :value="promptValue"
                @change="handleValueChange"
                :disabled="isDisabled"
                placeholder="Type your message..."
                :action-button-config="{
                    themeColor: 'primary',
                    disabled: false,
                }"
                :upload-button-config="{
                    disabled: true,
                }"
                :speech-to-text-button-config="{
                    disabled: false,
                }"
                @promptaction="handleActionClick"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Checkbox } from '@progress/kendo-vue-inputs';

const promptValue = ref('');
const isDisabled = ref(false);

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const handleActionClick = () => {
    if (!promptValue.value.trim()) {
        return;
    }

    console.log('Prompt sent:', promptValue.value);
    promptValue.value = '';
};
</script>

<style>
.demo-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 800px;
    margin: 0 auto;
}

.example-config {
    margin: 0;
    padding: 10px;
    background-color: var(--kendo-color-base);
    border: 1px solid #ddd;
    border-radius: 4px;
}

.event-log li:last-child {
    border-bottom: none;
}
</style>
