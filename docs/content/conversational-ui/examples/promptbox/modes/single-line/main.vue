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
            mode="single"
            placeholder="Type a short question..."
            :upload-button-config="true"
            @promptaction="handleSend"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Button } from '@progress/kendo-vue-buttons';

const promptValue = ref('');

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const handleSend = () => {
    promptValue.value = '';
};

const setShortText = () => {
    promptValue.value = 'What is AI?';
};

const setLongText = () => {
    promptValue.value =
        'Explain the impact of artificial intelligence on modern healthcare systems, including diagnostic accuracy improvements, patient care optimization, administrative efficiency, and ethical considerations and data privacy concerns';
};

const clearText = () => {
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
